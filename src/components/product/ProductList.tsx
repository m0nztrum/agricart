import { Product } from '../../supabase/model/Product';
import { ProductCard } from './ProductCard';

interface ProductListProps {
    products: Product[];
}

export const ProductList = ({ products }: ProductListProps) => {
    return (
        <div className="my-20">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
                {products.map((product) => (
                    <div key={product.product_id}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};
