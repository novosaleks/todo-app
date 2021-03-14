import React from 'react';

import './TodoFooter.scss';

interface TodoFooterProps {
    removeAllCompleted: () => void,
    activeTodosNumber: number,
    setFilterType: (filter: 'all' | 'active' | 'completed') => void,
    filter: 'all' | 'active' | 'completed',
}

const TodoFooter: React.FC<TodoFooterProps> = (
    { removeAllCompleted, activeTodosNumber, setFilterType, filter }) => {

    const selectFilterHandler = (selectedFilter: 'all' | 'active' | 'completed'): void => {
        if (selectedFilter !== filter) {
            setFilterType(selectedFilter);
        }
    };

    return (
        <div className='todo-footer d-flex justify-content-between align-items-center'>
            <div className='todo-footer__left'>
                {activeTodosNumber} items left
            </div>
            <div className='todo-footer__filter d-flex'>
                <div data-selected={filter === 'all'}
                     className='todo-footer__filter-item'
                     onClick={() => selectFilterHandler('all')}>
                    All
                </div>
                <div data-selected={filter === 'active'}
                     className='todo-footer__filter-item'
                     onClick={() => selectFilterHandler('active')}>
                    Active
                </div>
                <div data-selected={filter === 'completed'}
                     className='todo-footer__filter-item'
                     onClick={() => selectFilterHandler('completed')}>
                    Completed
                </div>
            </div>
            <div onClick={removeAllCompleted} className='todo-footer__clear'>
                Clear Completed
            </div>
        </div>
    );
};

export default TodoFooter;