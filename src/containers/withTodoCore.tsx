import React, { useState } from 'react';
import { TodoItemEntity } from '../entities';
import { Draggable, DropResult } from 'react-beautiful-dnd';
import TodoItem from '../components/TodoItem';


interface InjectedProps {
    createNewItem: (label: string) => void,
    onDragEnd: (result: DropResult) => void,
    todos: TodoItemEntity[],
    renderTodos: (todo: TodoItemEntity, idx: number) => JSX.Element,
    activeTodosNumber: number,
    removeAllCompleted: () => void,
    setFilterType: (filter: 'all' | 'active' | 'completed') => void,
    filterType: 'all' | 'active' | 'completed';
}

const withTodoCore = () => (View: React.ComponentType<InjectedProps>) => {
    return () => {
        const [todos, setTodos] = useState<TodoItemEntity[]>([
            { ...new TodoItemEntity('Create your first task') },
        ]);
        const [filterType, setFilterType] = useState<'all' | 'active' | 'completed'>('all');

        const toggleCompletion = (id: number) => {
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

        const createNewItem = (label: string) => {
            setTodos(prevList => {
                return [
                    ...prevList,
                    new TodoItemEntity(label)
                ];
            });
        };

        const removeItem = (id: number) => {
            setTodos(prevList => {
                return prevList.filter(todo => todo.id !== id);
            });
        };

        const removeAllCompleted = () => {
            setTodos(prevList => {
                return prevList.filter(todo => !todo.completed);
            });
        };

        const renderTodos = (todo: TodoItemEntity, idx: number) => {
            const { id, ...item } = todo;

            return (
                <Draggable isDragDisabled={filterType !== 'all'} key={id} draggableId={`${id}`} index={idx}>
                    {(provided) => (
                        <li ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className='todo-list__item'
                        >
                            <TodoItem
                                removeItem={() => removeItem(id)}
                                toggleCompletion={() => toggleCompletion(id)}
                                {...item}
                            />
                        </li>
                    )
                    }
                </Draggable>
            );
        };

        const countActiveTodos = (): number => {
            return todos.filter(item => !item.completed).length;
        };

        const filterTodos = (filter: 'all' | 'active' | 'completed'): TodoItemEntity[] => {
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

        const onDragEnd = (result: DropResult) => {
            const { destination, source } = result;

            if (!destination || destination.index === source.index) {
                return;
            }

            reOrderItems(source.index, destination.index);
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
                     setFilterType={setFilterType}/>
    };
};

export default withTodoCore;