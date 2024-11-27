import { Link } from 'react-router-dom';

export const Hero = () => {
    return (
        <div className="relative flex h-screen items-center justify-center bg-[url(/images/placeholder-image-3610342416.png)] bg-cover bg-center">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative text-center text-white">
                <h1 className="mb-6 text-5xl font-bold">Farm Fresh Products Delivered to Your doorstep</h1>
                <p className="mb-8 text-lg">
                    Discover the best in farm-fresh produce, sourced directly from local farms. Experience quality and taste like never before!
                </p>
                <div className="space-x-4">
                    <Link to="/products">
                        <button className="bg-apple-500 px-6 py-3 font-semibold text-white hover:bg-apple-600">Shop Now</button>
                    </Link>
                    <Link to="/about">
                        <button className="bg-apple-500 px-6 py-3">Learn More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
