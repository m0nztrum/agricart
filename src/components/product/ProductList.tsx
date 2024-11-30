import { Product } from '../../supabase/model/Product';
import { ProductCard } from './ProductCard';

interface ProductListProps {
    products: Product[];
}

export const ProductList = ({ products }: ProductListProps) => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-8">
                {products.map((product) => (
                    <div key={product.product_id}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
            {products.length === 0 && (
                <div className="py-12 text-center text-gray-500">No products available at the moment.</div>
            )}
        </div>
    );
};
