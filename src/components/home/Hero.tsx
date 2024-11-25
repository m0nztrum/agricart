import { Link } from 'react-router-dom';

export const Hero = () => {
    return (
        <div className="flex h-screen items-center justify-center bg-[url(images/hero-bg.webp)] bg-cover bg-center">
            <div className="text-center text-white">
                <h1 className="mb-4 text-5xl font-bold">Welcome to Farmcart</h1>
                <p className="mb-6 text-lg">Freshness at your doorstep</p>
                <Link to="/products">
                    <button className="rounded-lg bg-apple-500 px-6 py-3 font-semibold text-white hover:bg-apple-600">Shop Now</button>
                </Link>
            </div>
        </div>
    );
};
