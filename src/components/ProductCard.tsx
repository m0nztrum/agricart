interface ProductCardProps {
    name: string;
    description: string;
    imageUrl: string;
    price: string;
}

export const ProductCard = ({ product }: { product: ProductCardProps }) => {
    const { name, description, imageUrl, price } = product;
    return (
        <div className="transform overflow-hidden rounded-lg bg-white shadow-lg transition hover:scale-105">
            <img src={imageUrl} alt={name} className="h-48 w-full object-cover" />
            <div className="space-y-4 p-6">
                <h3 className="text-2xl font-semibold">{name}</h3>
                <p className="text-gray-600">{description}</p>
                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-800">{price}</span>
                    <button className="rounded-lg bg-apple-600 px-4 py-2 text-white transition hover:bg-apple-500">Buy Now</button>
                </div>
            </div>
        </div>
    );
};
