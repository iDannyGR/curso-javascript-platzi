import React from 'react';
import reactDom from 'react-dom';
import App from './routes/App';



reactDom.hydrate(<App/>, document.getElementById('app'));

