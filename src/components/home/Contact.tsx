export const Contact = () => {
    return (
        <div className="grid grid-cols-1 gap-8 bg-apple-800 px-8 py-16 md:grid-cols-2 md:px-20">
            <div className="space-y-6 text-apple-50">
                <h1 className="text-4xl font-extrabold tracking-wide">Contact Us</h1>
                <p className="text-lg leading-relaxed">
                    We'd love to hear from you! Whether you have a question, feedback, or are interested in wholesale or partnership opportunities, our team is
                    here to assist you. Feel free to reach out to us any time.
                </p>
            </div>
            <form className="space-y-6 rounded-lg bg-apple-900 p-8 shadow-lg">
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full rounded-md px-4 py-3 text-apple-800 focus:outline-none focus:ring-2 focus:ring-apple-600"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full rounded-md px-4 py-3 text-apple-800 focus:outline-none focus:ring-2 focus:ring-apple-600"
                    />
                    <textarea
                        placeholder="Your Message"
                        rows={5}
                        className="w-full rounded-md px-4 py-3 text-apple-800 focus:outline-none focus:ring-2 focus:ring-apple-600"
                    ></textarea>
                </div>
                <button type="submit" className="w-full rounded-md bg-apple-600 py-3 font-semibold text-white transition duration-300 hover:bg-apple-500">
                    Send Message
                </button>
            </form>
        </div>
    );
};
