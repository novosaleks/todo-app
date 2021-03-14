import React, { useState } from 'react';

import './TodoApp.scss';

import TodoHeader from '../TodoHeader';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';
import TodoFooter from '../TodoFooter';
import TodoItem from '../TodoItem';

import { TodoItemEntity } from '../../entities';
import { DragDropContext, Draggable, DropResult } from 'react-beautiful-dnd';

const TodoApp: React.FC = () => {
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

    const renderItems = (todo: TodoItemEntity, idx: number) => {
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

    return (
        <div className='todo-app container'>
            <TodoHeader/>
            <TodoForm createNewItem={createNewItem}/>
            <DragDropContext onDragEnd={onDragEnd}>
                <TodoList todos={filterTodos(filterType)}>
                    {renderItems}
                </TodoList>
            </DragDropContext>
            <TodoFooter
                activeTodosNumber={countActiveTodos()}
                removeAllCompleted={removeAllCompleted}
                setFilterType={setFilterType}
                filter={filterType}
            />
        </div>
    );
};

export default TodoApp;