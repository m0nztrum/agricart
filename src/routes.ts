import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import { NotFound } from './pages/NotFound';
import { createElement } from 'react';

export const router = createBrowserRouter([
    {
        path: '/',
        element: createElement(App),
        children: [],
    },
    {
        path: '*', // Global fallback
        element: createElement(NotFound),
    },
]);
