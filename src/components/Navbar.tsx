import { Link } from 'react-router-dom';
import { useState } from 'react';
import { X, Menu, ShoppingCart } from 'lucide-react';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { title: 'shop', path: '/products' },
        { title: 'about', path: '/about' },
        { title: 'contact', path: '/contact' },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="fixed left-0 top-0 z-50 w-full bg-white">
            <div className="container mx-auto flex justify-between px-4 py-2">
                <Link to="/">
                    <h1 className="text-2xl font-bold text-green-600">agricart</h1>
                </Link>
                {/* Desktop sizes */}
                <div className="hidden items-center space-x-6 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className="font-medium text-gray-800 transition-colors hover:text-green-600"
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>

                <div className="flex justify-between space-x-4">
                    <button className="font-medium">cart ( 1 )</button>
                    <button className="font-medium text-green-600 hover:text-green-500 hover:underline hover:underline-offset-2">
                        <Link to="/login">Login</Link>
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-800 focus:outline-none"
                        aria-label="Toggle mobile menu"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="absolute left-0 top-full w-full bg-white shadow-lg md:hidden">
                        <div className="flex flex-col space-y-4 p-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="text-gray-800 transition-colors hover:text-green-600"
                                    onClick={toggleMenu}
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};
