import React, { useEffect, useState } from 'react';

import { TodoItemEntity } from '../entities';
import { Draggable, DropResult } from 'react-beautiful-dnd';
import TodoItem from '../components/TodoApp/TodoItem';
import { filterType, todoApp } from '../types';

import { StorageService } from '../services';

const withTodoCore = () => (View: React.ComponentType<todoApp>) => {
    const storage = new StorageService();

    return () => {
        const [todos, setTodos] = useState<TodoItemEntity[]>([
            new TodoItemEntity('Create your first task'),
        ]);

        useEffect(() => {
            const JSONTodos = storage.getData('todo-app-list');

            if (JSONTodos) {
                const todos = JSON.parse(JSONTodos);
                setTodos(todos);
            }
        }, []);

        const [filterType, setFilterType] = useState<filterType>('all');

        const toggleCompletion = (id: number): void => {
            setTodos(todos => {
                const idx  = todos.findIndex(item => item.id === id),
                      todo = todos[idx];

                return [
                    ...todos.slice(0, idx),
                    { ...todo, completed: !todo.completed },
                    ...todos.slice(idx + 1),
                ];
            });
        };

        const createNewItem = (label: string): void => {
            setTodos(prevList => {
                const newList = [
                    ...prevList,
                    new TodoItemEntity(label)
                ];

                storage.setData('todo-app-list', JSON.stringify(newList));

                return newList;
            });
        };

        const removeItem = (id: number): void => {
            setTodos(prevList => {
                return prevList.filter(todo => todo.id !== id);
            });
        };

        const removeAllCompleted = (): void => {
            setTodos(prevList => {
                return prevList.filter(todo => !todo.completed);
            });
        };

        const renderTodos = (todo: TodoItemEntity, idx: number): JSX.Element => {
            const { id, ...item } = todo;

            return (
                <Draggable key={id} draggableId={`${id}`} index={idx}>
                    {(provided) => (
                        <li ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className='todo-list__item'
                        >
                            <TodoItem
                                removeItem={() => removeItem(id)}
                                idx={idx}
                                toggleCompletion={() => toggleCompletion(id)}
                                {...item}
                            />
                        </li>
                    )}
                </Draggable>
            );
        };

        const countActiveTodos = (): number => {
            return todos.filter(item => !item.completed).length;
        };

        const filterTodos = (filter: filterType): TodoItemEntity[] => {
            return todos.filter(todo => {
                switch (filter) {
                    case 'all':
                        return true;
                    case 'active':
                        return !todo.completed;
                    case 'completed':
                        return todo.completed;
                }

                return true;
            });
        };

        const onDragEnd = (result: DropResult): void => {
            const { destination, source } = result;

            if (!destination || destination.index === source.index) {
                return;
            }

            const [startIndex, endIndex] = filterType === 'all' ? [source.index, destination.index] :
                getFullIndexes(source.index, destination.index);

            reOrderItems(startIndex, endIndex);
        };

        const getFullIndexes = (initialStartIndex: number, initialEndIndex: number): [number, number] => {
            const filteredTodos = filterTodos(filterType);
            const startObjectId = filteredTodos[initialStartIndex].id,
                  endObjectId   = filteredTodos[initialEndIndex].id;

            return [
                todos.findIndex(todo => todo.id === startObjectId),
                todos.findIndex(todo => todo.id === endObjectId)
            ];
        };

        const reOrderItems = (initialIndex: number, newIndex: number): void => {
            setTodos(prevList => {
                const item = prevList[initialIndex];

                const newList = [
                    ...prevList.slice(0, initialIndex),
                    ...prevList.slice(initialIndex + 1)
                ];

                newList.splice(newIndex, 0, item);

                return newList;
            });
        };

        return <View todos={filterTodos(filterType)}
                     activeTodosNumber={countActiveTodos()}
                     createNewItem={createNewItem}
                     filterType={filterType}
                     onDragEnd={onDragEnd}
                     removeAllCompleted={removeAllCompleted}
                     renderTodos={renderTodos}
                     setFilterType={setFilterType}/>;
    };
};

export default withTodoCore;