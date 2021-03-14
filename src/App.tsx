import React from 'react';

import Header from './components/Header';
import TodoApp from './components/TodoApp/TodoApp';

import './App.scss';

const App: React.FC = () => {
    return (
        <>
            <Header/>
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                    <div className='col-xl-6 col-lg-8 col-md-10 col-12 todo__container'>
                        <TodoApp/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;