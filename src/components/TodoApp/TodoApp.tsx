import React, { useState } from 'react';

import './TodoApp.scss';

import TodoHeader from '../TodoHeader';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';
import TodoFooter from '../TodoFooter';

import { todoItem } from '../../utils/types';

const TodoApp: React.FC = () => {
    const [todoList, setTodoList] = useState<todoItem[] | []>([
        { id: 0, label: 'Create your first task', completed: false },
    ]);

    const createNewItem = (label: string) => {
        setTodoList(prevList => {
            return [
                ...prevList,
                {
                    id: +new Date(),
                    label,
                    completed: false
                }
            ];
        });
    };

    return (
        <div className='todo-app container'>
            <TodoHeader/>
            <TodoForm createNewItem={createNewItem}/>
            <TodoList todoList={todoList}/>
            <TodoFooter/>
        </div>
    );
};

export default TodoApp;