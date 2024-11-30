import { Link } from 'react-router-dom';
import { InstagramIcon, Facebook, Linkedin, Youtube, Send } from 'lucide-react';

const socialLink = [
    {
        title: 'Facebook',
        url: 'https://www.facebook.com/',
    },
    {
        title: 'Twitter',
        url: 'https://twitter.com/',
    },
    {
        title: 'Instagram',
        url: 'https://www.instagram.com/',
    },

    {
        title: 'Pinterest',
        url: 'https://www.pinterest.com/',
    },
    {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/',
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
                <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
                    <div>
                        <h2 className="mb-2 text-2xl font-bold">Suscribe to Updates</h2>
                        <p className="text-gray-600">Stay informed about our latest products and offers.</p>
                    </div>
                    <div className="space-x-2">
                        <input type="email" placeholder="Your Email Here" className="border border-gray-300 p-3" />
                        <button className="bg-green-600 p-3 text-white hover:bg-green-700">Subscribe</button>
                    </div>
                </div>

                {/* Newsletter Signup */}
                <div className="mb-16 flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
                    <div>
                        <h2 className="mb-2 text-2xl font-bold text-gray-800">Subscribe to Updates</h2>
                        <p className="text-gray-600">Stay informed about our latest products and offers.</p>
                    </div>
                    <div className="flex w-full max-w-md md:w-auto">
                        <input
                            type="email"
                            placeholder="Your Email Here"
                            className="flex-grow rounded-l-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <button className="flex items-center rounded-r-lg bg-green-600 px-6 py-3 text-white transition-colors hover:bg-green-700">
                            <Send className="mr-2 h-5 w-5" />
                            Subscribe
                        </button>
                    </div>
                </div>

                <div className="container grid grid-cols-2 gap-10 py-20 md:grid-cols-4">
                    {/* SIDE */}
                    <div>
                        <h3 className="mb-4 text-lg font-bold">agricart</h3>
                        <p className="mb-2">Discover the freshness of nature</p>
                    </div>

                    {/* LEFT */}
                    <div className="flex flex-col">
                        <h3 className="mb-4 text-lg">Quick Links</h3>
                        {quickLinks.map((item, index) => (
                            <Link key={index} to={item.url} className="duration-400 transition hover:underline">
                                {item.title}
                            </Link>
                        ))}
                    </div>

                    {/* CENTER */}
                    <div className="flex flex-col">
                        <h3 className="mb-4 text-lg">Our Company</h3>
                        {companyLinks.map((item, index) => (
                            <Link to="/" key={index}>
                                {item.title}
                            </Link>
                        ))}
                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-col">
                        <h3 className="mb-4 text-lg">Follow Us</h3>
                        {socialLink.map((item, index) => (
                            <a
                                key={index}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="duration-400 transition hover:underline"
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>
                </div>

                {/* FOOTER BOTTOM */}
                <div className="flex justify-between space-x-4 border-t border-gray-700 pt-8">
                    <p className="text-sm">© {new Date().getFullYear()} agricart. All rights reserved.</p>
                    <Link to="/about" className="underline">
                        Privacy Policy
                    </Link>
                    <Link to="/about" className="underline">
                        Terms of Service.
                    </Link>
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <Facebook className="h-5 w-5" />
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon className="h-5 w-5" />
                        </a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                            <Youtube className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
