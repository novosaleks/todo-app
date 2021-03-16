import React from 'react';

import './TodoFooter.scss';
import FilterPanel from '../FilterPanel';
import { filterType } from '../../../types';

interface TodoFooterProps {
    removeAllCompleted: () => void,
    activeTodosNumber: number,
    setFilterType: (filter: filterType) => void,
    filter: filterType,
}

const TodoFooter: React.FC<TodoFooterProps> = (
    { removeAllCompleted, activeTodosNumber, setFilterType, filter }) => {

    return (
        <>
            <div className='todo-footer d-flex justify-content-between align-items-center'>
                <div className='todo-footer__left'>
                    {activeTodosNumber} items left
                </div>
                <div className="todo-filter d-md-block d-none">
                    <FilterPanel filter={filter} setFilterType={setFilterType}/>
                </div>
                <div onClick={removeAllCompleted} className='todo-footer__clear'>
                    Clear Completed
                </div>
            </div>

            <div className='todo-filter__mobile d-md-none'>
                <FilterPanel filter={filter} setFilterType={setFilterType}/>
            </div>

            <div className="todo-footer__label">
                Drag and drop to reorder list
            </div>
        </>
    );
};

export default TodoFooter;