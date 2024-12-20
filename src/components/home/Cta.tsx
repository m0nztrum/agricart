import { Link } from "react-router-dom";
export const Cta = () => {
    return (
        <div className="container mx-auto px-4 py-16 md:px-20 md:py-28">
            <div className="flex justify-between">
                <div>
                    <h3 className="font-bold">Discover our fresh farm products.</h3>
                    <p>Explore our range of quality farm products today.</p>
                </div>
                <div className="space-x-4">
                    <Link to='/products' className="bg-green-600 p-3 text-white hover:bg-green-700">Shop</Link>

                    <button className="border border-gray-600 p-3">Contact</button>
                </div>
            </div>
        </div>
    );
};
