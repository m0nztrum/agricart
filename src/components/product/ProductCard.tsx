import { Product } from '../../supabase/model/Product';

export const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className="overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="relative">
                <img
                    src={product.image_url}
                    alt={product.name}
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {product.stock === 0 && (
                    <div className="absolute right-2 top-2 rounded-md bg-red-500 px-2 py-1 text-xs text-white">
                        Out of Stock
                    </div>
                )}
                <div className="space-y-3 p-4">
                    <div className="flex items-center justify-between">
                        <h3 className="max-w-[70%] truncate text-xl font-bold text-gray-800">{product.name}</h3>
                        <span className="text-sm text-gray-500">{product.stock} pcs</span>
                    </div>

                    <p className="line-clamp-2 min-h-[2.5rem] text-sm text-gray-600">{product.description}</p>

                    <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-green-600">${product.price.toFixed(2)}</span>
                        <button
                            disabled={product.stock === 0}
                            className="rounded-lg bg-green-600 px-4 py-2 text-white transition duration-300 hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-400"
                        >
                            {product.stock > 0 ? 'Buy Now' : 'Sold Out'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
