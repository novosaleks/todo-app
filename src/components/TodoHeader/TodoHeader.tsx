import React, { useEffect, useState } from 'react';

import './TodoHeader.scss';

import sun from '../../assets/icons/icon-sun.svg';
import moon from '../../assets/icons/icon-moon.svg';

const TodoHeader: React.FC = () => {
    const [theme, setTheme] = useState<'dark' | 'light'>('light');

    useEffect(() => {
        document.body.dataset.theme = theme;
    }, [theme])

    const switchTheme = () => {
        setTheme(currentTheme => {
            return currentTheme === 'light' ? 'dark' : 'light';
        });
    };

    return (
        <div className='todo-header d-flex justify-content-between align-items-center'>
            <h1 className='todo-header__title'>TODO</h1>
            <img onClick={switchTheme} src={theme === 'light' ? moon : sun} alt="theme-selector"/>
        </div>
    );
};

export default TodoHeader;