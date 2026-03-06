import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
    const { pathname } = useLocation();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <a href="#main-content" className="skip-to-content">
                Skip to content
            </a>
            <Navbar />
            <main id="main-content" className="pt-20" role="main">
                {children}
            </main>
            <Footer />
        </>
    );
}
