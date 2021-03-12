import React from 'react';

import './TodoList.scss';
import { TodoItemEntity } from '../../entities';

interface TodoListProps {
    todos: TodoItemEntity[],
    children: (todo: TodoItemEntity) => JSX.Element,
}

const TodoList: React.FC<TodoListProps> = ({ children, todos }) => {

    const todoListComponents = todos.map(children);

    return (
        <ul className='todo-list'>
            {todoListComponents}
        </ul>
    );
};

export default TodoList;