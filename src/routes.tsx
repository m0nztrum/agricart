import { createBrowserRouter } from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import { ProductsPage } from './pages/ProductsPage';
import { Layout } from './pages/Layout';
import { Home } from './pages/Home';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/products',
                element: <ProductsPage />,
            },
        ],
    },
]);
