import { ProductCard } from '../ProductCard';

export const ProductPreview = () => {
    const products = [
        {
            id: 1,
            name: 'Product A',
            description: 'High-quality, innovative product designed to simplify your daily life.',
            price: '$49.99',
            imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URLs
        },
        {
            id: 2,
            name: 'Product B',
            description: 'Eco-friendly product crafted with sustainability in mind.',
            price: '$29.99',
            imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URLs
        },
        {
            id: 3,
            name: 'Product C',
            description: 'A versatile product offering unmatched performance and reliability.',
            price: '$79.99',
            imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URLs
        },
    ];

    return (
        <div className="bg-gray-100 px-8 py-16">
            <div className="mx-auto max-w-6xl">
                <h2 className="mb-10 text-center text-4xl font-bold">Featured Products</h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};
