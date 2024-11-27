const navLinks = [
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

export const Navbar = () => {
    return (
        <nav className="bg-apple-700 p-4">
            <div className="flex justify-between">
                <h1 className="font-bold text-apple-50">agricart</h1>
                <div>
                    {navLinks.map((link, index) => (
                        <a key={index} href={link.url} className="mx-2 text-apple-50">
                            {link.title}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};
