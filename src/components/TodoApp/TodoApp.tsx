import React, { useState } from 'react';

import './TodoApp.scss';

import TodoHeader from '../TodoHeader';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';
import TodoFooter from '../TodoFooter';
import TodoItem from '../TodoItem';


import { TodoItemEntity } from '../../entities';

const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState<TodoItemEntity[]>([
        { ...new TodoItemEntity('Create your first task') },
    ]);

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

    const renderFunction = (todo: TodoItemEntity) => {
        const { id, ...item } = todo;

        return (
            <li key={id} className='todo-list__item'>
                <TodoItem toggleCompletion={() => toggleCompletion(id)} {...item} />
            </li>
        );
    };

return (
    <div className='todo-app container'>
        <TodoHeader/>
        <TodoForm createNewItem={createNewItem}/>
        <TodoList todos={todos}>
            {renderFunction}
        </TodoList>
        <TodoFooter/>
    </div>
);
}

export default TodoApp;