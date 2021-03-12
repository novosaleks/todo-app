import React from 'react';
import TodoItem from '../TodoItem';

import './TodoList.scss';
import { todoItem } from '../../utils/types';

interface TodoListProps {
    todoList: todoItem[] | []
}

const TodoList: React.FC<TodoListProps> = ({ todoList }) => {
    const todoListComponents = todoList.map((element: todoItem) => {
        const {id, ...item} = element;

        return (
            <li key={id} className='todo-list__item'>
                <TodoItem {...item} />
            </li>
        )
    });

    return (
        <ul className='todo-list'>
            {todoListComponents}
        </ul>
    );
};

export default TodoList;