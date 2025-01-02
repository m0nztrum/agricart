import { createBrowserRouter } from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import { ProductsPage } from './pages/ProductsPage';
import { Layout } from './pages/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';

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
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
        ],
    },
    {
        path: '/login',
        element: <Login />,
        errorElement: <NotFound />,
    },
    {
        path: '/signup',
        element: <SignUp />,
        errorElement: <NotFound />,
    },
]);
