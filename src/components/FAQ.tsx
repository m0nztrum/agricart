export const FAQ = ({ heading, description }) => {
    return (
        <div>
            <h2>FAQS</h2>
            <div>
                <div>
                    <h3>{heading}</h3>
                </div>
                <div>{description}</div>
            </div>
        </div>
    );
};
