import React from 'react';

import './TodoHeader.scss';

import sun from '../../assets/icons/icon-sun.svg';

const TodoHeader: React.FC = () => {
    return (
        <div className='todo-header d-flex justify-content-between align-items-center'>
            <h1 className='todo-header__title'>TODO</h1>
            <img src={sun} alt="sun"/>
        </div>
    )
};

export default TodoHeader;