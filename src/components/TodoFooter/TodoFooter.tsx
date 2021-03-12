import React from 'react';

import './TodoFooter.scss';

const TodoFooter: React.FC = () => {
    return (
        <div className='todo-footer d-flex justify-content-between align-items-center'>
            <div className='todo-footer__left'>
                0 items left
            </div>
            <div className='todo-footer__filter d-flex'>
                <span>All</span>
                <span>Active</span>
                <span>Completed</span>
            </div>
            <div className='todo-footer__clear'>
                Clear Completed
            </div>
        </div>
    );
};

export default TodoFooter;