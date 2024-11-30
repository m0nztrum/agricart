import { Link } from 'react-router-dom';
import { InstagramIcon, Facebook, Linkedin, Youtube } from 'lucide-react';

const socialLinks = [
    {
        icon: Facebook,
        url: 'https://www.facebook.com/',
        title: 'Facebook',
    },
    {
        icon: Linkedin,
        url: 'https://www.linkedin.com/',
        title: 'LinkedIn',
    },
    {
        icon: InstagramIcon,
        url: 'https://www.instagram.com/',
        title: 'Instagram',
    },
    {
        icon: Youtube,
        url: 'https://www.youtube.com/',
        title: 'YouTube',
    },
];

const quickLinks = [
    {
        title: 'Home',
        url: '/',
    },

    {
        title: 'Products',
        url: '/products',
    },
    {
        title: 'About',
        url: '/about',
    },
    {
        title: 'Contact Us',
        url: '/contact',
    },
    {
        title: 'FAQs',
        url: '/faqs',
    },
];

const companyLinks = [
    { title: 'Mission', url: '/about' },
    { title: 'Values', url: '/about' },
    { title: 'Sustainability', url: '/about' },
];

export const Footer = () => {
    return (
        <footer className="bg-gray-50 px-4 py-16 md:px-20 md:py-20">
            <div className="container mx-auto">
                {/* Newsletter Signup */}
                <div className="mb-16 flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
                    <div>
                        <h2 className="mb-2 text-2xl font-bold">Suscribe to Updates</h2>
                        <p className="text-gray-600">Stay informed about our latest products and offers.</p>
                    </div>
                    <div className="flex w-full max-w-md space-x-2 md:w-auto">
                        <input type="email" placeholder="Your Email Here" className="border border-gray-300 p-3" />
                        <button className="bg-apple-600 p-3 text-white hover:bg-apple-700">Subscribe</button>
                    </div>
                </div>

                {/* Footer Colums */}
                <div className="grid grid-cols-2 gap-10 py-20 md:grid-cols-4">
                    {/* BRAND */}
                    <div>
                        <h3 className="mb-4 text-2xl font-bold text-green-600">agricart</h3>
                        <p className="text-gray-600">Discover the freshness of nature</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 text-lg">Quick Links</h3>
                        {quickLinks.map((item, index) => (
                            <Link
                                key={index}
                                to={item.url}
                                className="mb-2 block text-gray-600 transition-colors hover:text-apple-600"
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-gray-800">Our Company</h3>
                        {companyLinks.map((link, index) => (
                            <Link
                                key={index}
                                to={link.url}
                                className="mb-2 block text-gray-600 transition-colors hover:text-green-600"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-gray-800">Follow Us</h3>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 transition-colors hover:text-green-600"
                                    aria-label={social.title}
                                >
                                    <social.icon className="h-6 w-6" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="flex flex-col items-center justify-between space-y-4 border-t border-gray-600 pt-8 md:flex-row md:space-y-0">
                    <p className="text-sm text-gray-600">
                        © {new Date().getFullYear()} agricart. All rights reserved.
                    </p>
                    <div className="flex space-x-4">
                        <Link to="/privacy" className="text-sm text-gray-600 transition-colors hover:text-green-600">
                            Privacy Policy
                        </Link>
                        <Link to="/terms" className="text-sm text-gray-600 transition-colors hover:text-green-600">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
