import { Link } from 'react-router-dom';
export const Navbar = () => {
    return (
        <nav className="px-16 py-1">
            <div className="mx-auto flex justify-between">
                <Link to="/">
                    <h1 className="text-2xl font-bold text-apple-600">agricart</h1>
                </Link>
                <div className="space-x-4">
                    <Link to="/products" className="hover:underline">
                        <button className="border border-black p-2">Shop</button>
                    </Link>
                    <Link to="/contact" className="hover:underline">
                        <button className="border border-black bg-black p-2 text-white">Contact</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};
