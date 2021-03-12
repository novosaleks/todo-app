import React from 'react';

import './TodoItem.scss';
import { todoItem } from '../../utils/types';

const TodoItem: React.FC<Omit<todoItem, 'id'>> = ({label, completed}) => {
    return (
        <div className='todo-item'>
            {label}
        </div>
    );
};

export default TodoItem;

