import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import { NotFound } from './pages/NotFound';
import { Product } from './pages/Product';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [],
    },
    {
        path: '*', // Global fallback
        element: <NotFound />,
    },
    {
        path: '/products',
        element: <Product />,
    },
]);
