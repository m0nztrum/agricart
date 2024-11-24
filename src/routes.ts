import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import { NotFoundPage } from './not-found';
import { createElement } from 'react';

export const router = createBrowserRouter([
    {
        path: '/',
        element: createElement(App),
        children: [],
    },
    {
        path: '*', // Global fallback
        element: createElement(NotFoundPage),
    },
]);
