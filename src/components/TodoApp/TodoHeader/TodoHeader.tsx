import React, { useEffect, useState } from 'react';

import './TodoHeader.scss';

import sun from '../../../assets/icons/icon-sun.svg';
import moon from '../../../assets/icons/icon-moon.svg';

const TodoHeader: React.FC = () => {
    const generateInitialTheme = (): string => {
        const newTheme = localStorage.getItem('todo-theme');

        if (newTheme === 'light' || newTheme === 'dark') {
            return newTheme;
        }

        return 'light';
    };

    const [theme, setTheme] = useState(generateInitialTheme());

    useEffect(() => {
        document.body.dataset.theme = theme;
    }, [theme]);

    const switchTheme = () => {
        setTheme(currentTheme => {
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';

            localStorage.setItem('todo-theme', newTheme);

            return newTheme;
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