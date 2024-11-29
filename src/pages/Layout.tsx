import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

export const Layout = () => {
    return (
        <div>
            <Navbar />
            {/* for react router to render children components*/}
            <Outlet />
            <Footer />
        </div>
    );
};
