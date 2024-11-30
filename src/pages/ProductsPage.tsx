import { ProductList } from '../components/product/ProductList';
import { LoadingSpinner } from '../components/Loading';
import { useProducts } from '../hooks/useProducts';

export const ProductsPage = () => {
    const { products, loading } = useProducts();

    return (
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
                <h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-4xl">Product</h1>
                <p className="mx-auto max-w-2xl text-lg text-gray-600">
                    Explore our fresh, high-quality farm products today.
                </p>
            </div>
            {loading ? (
                <div className="flex min-h-[50vh] items-center justify-center">
                    <LoadingSpinner />
                </div>
            ) : (
                <ProductList products={products} />
            )}
        </div>
    );
};
