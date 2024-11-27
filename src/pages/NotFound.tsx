import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <div className="grid h-screen place-content-center bg-white px-4 text-center">
            <h1 className="text-3xl font-bold uppercase tracking-widest text-gray-500">404 | Not Found</h1>
            <Link to="/" className="mt-4 uppercase text-apple-800 underline-offset-4 hover:underline" aria-label="Go back to homepage">
                Go Home
            </Link>
        </div>
    );
};
