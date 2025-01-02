import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { router } from './routes';
import { RouterProvider } from 'react-router-dom';
import { SupabaseProvider } from './contexts/SupabaseAuth';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <SupabaseProvider>
            <RouterProvider router={router} />
        </SupabaseProvider>
    </StrictMode>,
);
