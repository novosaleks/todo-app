import React, { useEffect, useState } from 'react';

import './TodoHeader.scss';

import sun from '../../../assets/icons/icon-sun.svg';
import moon from '../../../assets/icons/icon-moon.svg';

import { StorageService } from '../../../services';

const TodoHeader: React.FC = () => {
    const storage = new StorageService();

    const generateInitialTheme = (): string => {
        const newTheme = storage.getData('todo-theme');

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

            storage.setData('todo-theme', newTheme);

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