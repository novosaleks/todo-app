import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import favicon from './assets/images/favicon-32x32.png';
import Favicon from 'react-favicon';

ReactDOM.render(
    <React.StrictMode>
        <Favicon url={favicon}/>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
