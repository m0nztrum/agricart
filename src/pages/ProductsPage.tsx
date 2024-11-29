import { ProductList } from '../components/product/ProductList';
import { LoadingSpinner } from '../components/Loading';
import { useProducts } from '../hooks/useProducts';

export const ProductsPage = () => {
    const { products, loading } = useProducts();

    return (
        <div className="px-20">
            <div className="text-center">
                <h1 className="my-6 text-2xl font-bold">Product</h1>
                <p>Explore our fresh, high-quality farm products today.</p>
            </div>
            {loading ? (
                <div className="flex flex-col items-center justify-center">
                    <LoadingSpinner />
                </div>
            ) : (
                <ProductList products={products} />
            )}
        </div>
    );
};
