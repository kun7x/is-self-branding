import { useEffect, useRef } from 'react';

export default function ScrollReveal({ children, className = '', delay = 0, stagger = false }) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (stagger) {
                            // For stagger mode, reveal all children
                            el.querySelectorAll('.reveal').forEach((child) => {
                                child.classList.add('visible');
                            });
                        } else {
                            el.classList.add('visible');
                        }
                        observer.unobserve(el);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [stagger]);

    if (stagger) {
        return (
            <div ref={ref} className={`reveal-stagger ${className}`}>
                {children}
            </div>
        );
    }

    return (
        <div
            ref={ref}
            className={`reveal ${className}`}
            style={delay ? { transitionDelay: `${delay}ms` } : undefined}
        >
            {children}
        </div>
    );
}
