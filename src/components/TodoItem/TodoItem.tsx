import React from 'react';

import './TodoItem.scss';
import { TodoItemEntity } from '../../entities';

interface TodoItemProps extends Omit<TodoItemEntity, 'id'> {
    toggleCompletion: () => void
}

const TodoItem: React.FC<TodoItemProps> = ({ label, completed, toggleCompletion }) => {
    return (
        <div className='todo-item d-flex align-items-center'>
            <input onChange={toggleCompletion} type="checkbox" defaultChecked={completed}/>
            <div className={`todo-item__label ${completed ? 'completed' : ''}`}>{label}</div>
        </div>
    );
};

export default TodoItem;

