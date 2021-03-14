import React from 'react';

import './TodoItem.scss';
import { TodoItemEntity } from '../../entities';

import cross from '../../assets/icons/icon-cross.svg';

interface TodoItemProps extends Omit<TodoItemEntity, 'id'> {
    toggleCompletion: () => void,
    removeItem: () => void,
}

const TodoItem: React.FC<TodoItemProps> = ({ label, completed, toggleCompletion, removeItem }) => {
    return (
        <div className='todo-item d-flex justify-content-between align-items-center'>
            <div className='todo-item__description d-flex align-items-center'>
                <input onChange={toggleCompletion} type="checkbox" defaultChecked={completed}/>
                <div className={`todo-item__label ${completed ? 'completed' : ''}`}>{label}</div>
            </div>
            <img onClick={removeItem} src={cross} alt="close-cross"/>
        </div>
    );
};

export default TodoItem;

