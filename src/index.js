import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import router from './routes';
import { RouterProvider } from 'react-router-dom';

ReactDOM.render(<RouterProvider router={router} />, document.getElementById('root'));

