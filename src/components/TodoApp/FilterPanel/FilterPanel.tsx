import React from 'react';

import './FilterPanel.scss';
import { filterType } from '../../../types';

interface FilterPanelProps {
    filter: filterType,
    setFilterType: (filter: filterType) => void,
}

const FilterPanel: React.FC<FilterPanelProps> = ({ filter, setFilterType }) => {
    const selectFilterHandler = (selectedFilter: filterType): void => {
        if (selectedFilter !== filter) {
            setFilterType(selectedFilter);
        }
    };

    return (
        <div className='filter d-flex'>
            <div data-selected={filter === 'all'}
                 className='filter-item'
                 onClick={() => selectFilterHandler('all')}>
                All
            </div>
            <div data-selected={filter === 'active'}
                 className='filter-item'
                 onClick={() => selectFilterHandler('active')}>
                Active
            </div>
            <div data-selected={filter === 'completed'}
                 className='filter-item'
                 onClick={() => selectFilterHandler('completed')}>
                Completed
            </div>
        </div>
    );
};

export default FilterPanel;