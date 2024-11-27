import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';

export const App = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <Footer />
        </div>
    );
};
