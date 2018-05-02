import React from 'react';
import Axios from 'axios';
import App from './App';
import ReactDOM from 'react-dom';

Axios.get('http://localhost:3000/backend.json').then(response => {
    ReactDOM.render(
        <App schema={response.data} />,
        document.getElementById('root')
    )
})



