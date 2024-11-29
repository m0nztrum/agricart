import { Product } from '../../supabase/model/Product';

export const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className="transform overflow-hidden rounded-lg bg-white shadow-lg transition hover:scale-105">
            <img src={product.image_url} alt={product.name} className="h-48 w-full object-cover" />
            <div className="space-y-4 p-6">
                <h3 className="text-xl font-semibold">{product.name}</h3>
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
