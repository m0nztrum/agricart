import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

export const Hero = () => {
    return (
        <div className="relative flex min-h-screen items-center justify-center bg-[url(/images/agri-bg.jpg)] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="container relative z-10 mx-auto px-4 text-center text-white">
                <div className="mx-auto max-w-3xl">
                    <h1 className="mb-6 text-3xl font-bold leading-tight md:text-5xl">
                        Farm Fresh Products Delivered to Your doorstep
                    </h1>
                    <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-gray-200 md:text-lg">
                        Discover the best in farm-fresh produce, sourced directly from local farms. Experience quality
                        and taste like never before!
                    </p>
                    <div className="flex justify-center space-x-4">
                        <Link
                            to="/products"
                            className="inline-flex items-center justify-center space-x-2 bg-green-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-apple-700"
                        >
                            <ShoppingCart />
                            <span>Shop Now</span>
                        </Link>
                        <Link
                            to="/about"
                            className="inline-flex items-center justify-center space-x-2 border-2 border-white bg-transparent px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-black"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-10 left-0 right-0 flex justify-center">
                <div className="h-1 w-1/2 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
            </div>
        </div>
    );
};
