import { Link } from 'react-router-dom';

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
        title: 'Contact',
        url: '/contact',
    },
];
const companyLinks = [{ title: 'Mission' }, { title: 'Values' }, { title: 'Sustainability' }, { title: 'Careers' }];

export const Footer = () => {
    return (
        <footer className="bg-apple-950 py-10 text-apple-50">
            <div className="container mx-auto grid grid-cols-1 gap-8 px-6 md:grid-cols-4">
                {/* SIDE */}
                <div>
                    <h3 className="mb-4 text-lg font-bold">farmcart</h3>
                    <p className="mb-2">Discover the freshness of nature</p>
                    <p className="text-sm">© {new Date().getFullYear()} farmcart.</p>
                    <p className="text-sm">All Rights Reserved.</p>
                </div>
                {/* LEFT */}
                <div className="flex flex-col">
                    <h3 className="mb-4 text-lg">Quicklinks</h3>
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
                        <Link key={index} to={item.url} target="_blank" rel="noopener noreferrer" className="duration-400 transition hover:underline">
                            {item.title}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
};
