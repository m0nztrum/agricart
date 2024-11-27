import { Link } from 'react-router-dom';
import { InstagramIcon, Facebook, Linkedin, Youtube } from 'lucide-react';

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
        <footer className="px-16 pb-10 pt-20">
            <div className="mx-auto">
                <div className="flex justify-between">
                    <div>
                        <h2 className="font-bold">Suscribe to Updates</h2>
                        <p className="text-xs">Stay informed about our latest products and offers.</p>
                    </div>
                    <div className="space-x-2">
                        <input type="email" placeholder="Your Email Here" className="border border-gray-300 p-3" />
                        <button className="bg-green-600 p-3 text-white hover:bg-green-700">Subscribe</button>
                    </div>
                </div>
                <div className="container grid grid-cols-2 gap-10 py-20 md:grid-cols-4">
                    {/* SIDE */}
                    <div>
                        <h3 className="mb-4 text-lg font-bold">farmcart</h3>
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
                            <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" className="duration-400 transition hover:underline">
                                {item.title}
                            </a>
                        ))}
                    </div>
                </div>

                {/* FOOTER BOTTOM */}
                <div className="flex justify-between space-x-4 border-t border-gray-700 pt-8">
                    <p className="text-sm">© {new Date().getFullYear()} farmcart. All rights reserved.</p>
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
