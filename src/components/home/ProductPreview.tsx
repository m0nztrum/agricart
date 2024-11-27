export const ProductPreview = () => {
    return (
        <div className="px-16 py-28">
            <div className="grid grid-cols-2 gap-20">
                <div>
                    <h2 className="mb-6 text-3xl">Discover the Freshest Farm Products Delivered Right to Your Doorstep</h2>
                    <p className="mb-8">
                        Experience the difference with our farm-fresh products that are sourced locally. Enjoy the peace of mind that comes with our organic
                        certification.
                    </p>
                    <section className="grid grid-cols-2 gap-6">
                        <div>
                            {/* ICON HERE */}
                            <h3 className="my-4 font-semibold">Freshness Guaranteed</h3>
                            <p>Taste the vibrant flavours of produce picked at peak ripeness.</p>
                        </div>
                        <div>
                            {/* ICON HERE */}
                            <h3 className="my-4 font-semibold">Locally Sourced</h3>
                            <p>Support your community by choosing products from nearby farms.</p>
                        </div>
                    </section>
                </div>
                <div>
                    <img src="/images/placeholder-image-3610342416.png" />
                </div>
            </div>
        </div>
    );
};
