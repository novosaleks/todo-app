import React from 'react';

import TodoApp from '../TodoApp';

import './Footer.scss'

const Footer: React.FC = () => {
    return (
        <div className='footer'>
            <TodoApp/>
        </div>
    );
};

export default Footer;