export const Contact = () => {
    return (
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="relative flex flex-col items-center px-5 py-32 text-gray-700">
                <div className="mb-12">
                    <h1 className="text-center">Have any questions ?</h1>
                    <p className="text-center font-semibold">Get In touch</p>
                </div>
                <form className="w-full max-w-2xl space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="mb-2 font-medium text-gray-400">
                                Name*
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="John Doe"
                                className="border-dark-300 bg-dark-100 w-full rounded-md border p-3 placeholder-gray-500 focus:border-green-300 focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="mb-2 font-medium text-gray-400">
                                Email*
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="john@doe.com"
                                className="border-dark-300 bg-dark-100 w-full rounded-md border p-3 placeholder-gray-500 focus:border-green-300 focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="message" className="mb-2 font-medium text-gray-400">
                            Message*
                        </label>
                        <textarea
                            rows={5}
                            placeholder="Your Message"
                            className="border-dark-300 bg-dark-100 w-full rounded-md border p-3 placeholder-gray-500 focus:border-green-300 focus:outline-none"
                        />
                    </div>

                    <div className="mt-8 flex justify-center">
                        <button
                            type="submit"
                            className="flex rounded-lg bg-green-400 px-6 py-3 font-semibold text-white"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
