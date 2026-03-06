import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconMenu, IconClose } from './Icons';

const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Skills', path: '/skills' },
    { label: 'Qualification', path: '/qualification' },
    { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const menuRef = useRef(null);
    const triggerRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Focus trap for mobile menu
    useEffect(() => {
        if (!isOpen) return;
        const menu = menuRef.current;
        if (!menu) return;

        const focusable = menu.querySelectorAll('a, button');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        const trap = (e) => {
            if (e.key === 'Escape') {
                setIsOpen(false);
                triggerRef.current?.focus();
                return;
            }
            if (e.key !== 'Tab') return;
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        };

        document.addEventListener('keydown', trap);
        first?.focus();
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', trap);
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const toggleMenu = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-250 ${scrolled
                    ? 'bg-[var(--color-bg)]/95 backdrop-blur-sm shadow-[0_1px_0_rgba(0,0,0,0.06)]'
                    : 'bg-transparent'
                }`}
            role="banner"
        >
            <nav
                className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8"
                aria-label="Main navigation"
            >
                {/* Logo */}
                <Link
                    to="/"
                    className="text-lg font-semibold tracking-tight text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors duration-200"
                    aria-label="Kundan Patil — Home"
                >
                    KP<span className="text-[var(--color-accent)]">.</span>
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-1">
                    {navLinks.map(({ label, path }) => (
                        <li key={path}>
                            <Link
                                to={path}
                                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${location.pathname === path
                                        ? 'text-[var(--color-accent)]'
                                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)]'
                                    }`}
                            >
                                {label}
                                <span
                                    className={`absolute bottom-0.5 left-3 right-3 h-px bg-[var(--color-accent)] transition-transform duration-250 origin-left ${location.pathname === path ? 'scale-x-100' : 'scale-x-0'
                                        }`}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Hamburger */}
                <button
                    ref={triggerRef}
                    onClick={toggleMenu}
                    className="md:hidden p-2 -mr-2 text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                >
                    {isOpen ? <IconClose /> : <IconMenu />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/20 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* Mobile Menu */}
            <div
                ref={menuRef}
                id="mobile-menu"
                className={`fixed top-0 right-0 bottom-0 w-72 bg-[var(--color-bg)] z-50 shadow-xl transform transition-transform duration-300 ease-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
            >
                <div className="flex items-center justify-between p-6 border-b border-[var(--color-border-light)]">
                    <span className="text-lg font-semibold text-[var(--color-text)]">
                        Menu
                    </span>
                    <button
                        onClick={() => {
                            setIsOpen(false);
                            triggerRef.current?.focus();
                        }}
                        className="p-2 -mr-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
                        aria-label="Close menu"
                    >
                        <IconClose />
                    </button>
                </div>

                <ul className="flex flex-col p-6 gap-1">
                    {navLinks.map(({ label, path }) => (
                        <li key={path}>
                            <Link
                                to={path}
                                className={`block px-4 py-3 rounded-[var(--radius-sm)] text-base font-medium transition-all duration-200 ${location.pathname === path
                                        ? 'text-[var(--color-accent)] bg-[var(--color-accent)]/5'
                                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-border-light)]'
                                    }`}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}
