import { Product } from '../../supabase/model/Product';

export const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className="group relative transform overflow-hidden rounded-lg bg-white shadow-lg transition hover:scale-105">
            <img src={product.image_url} alt={product.name} className="h-48 w-full object-cover" />
            <div className="space-y-4 p-6">
                <h3 className="text-xl font-semibold text-gray-600 group-hover:text-apple-600">{product.name}</h3>
                <p className="line-clamp-3 text-gray-600">{product.description}</p>

                <section>
                    <div className="mb-2 flex flex-row space-x-4">
                        <p className="text-xl font-bold text-apple-500">${product.price.toFixed(2)}</p>
                        <p className="text-sm text-gray-400 underline">{product.stock}pcs</p>
                    </div>
                    <button className="rounded-lg bg-apple-600 px-4 py-2 text-white transition hover:bg-apple-500">Buy Now</button>
                </section>
            </div>
        </div>
    );
};

export const ProductCardf = ({ product }: { product: Product }) => {
    return (
        <div className="group relative transform overflow-hidden rounded-lg bg-white shadow-lg transition hover:scale-105">
            {/* Product Image */}
            <img src={product.image_url} alt={product.name} className="h-48 w-full object-cover transition duration-300 ease-in-out group-hover:opacity-90" />

            {/* Content */}
            <div className="space-y-4 p-6">
                {/* Product Name */}
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-apple-600">{product.name}</h3>

                {/* Product Description */}
                <p className="line-clamp-3 text-sm text-gray-600">{product.description}</p>

                {/* Pricing and Stock Info */}
                <section>
                    {/* Buy Button */}
                    <button className="w-full rounded-lg bg-apple-600 px-4 py-2 text-center text-sm font-semibold text-white transition duration-300 hover:bg-apple-500 focus:outline-none focus:ring-2 focus:ring-apple-500 focus:ring-offset-2">
                        Buy Now
                    </button>
                </section>
            </div>
        </div>
    );
};
