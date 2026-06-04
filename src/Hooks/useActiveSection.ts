import { useEffect } from 'react';

const sections = ['about', 'skills', 'experience', 'projects', 'contact'];

export function useActiveSection() {
    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        const callback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    if (id) {
                        window.history.replaceState(null, '', `#${id}`);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(callback, {
            root: null,
            rootMargin: '-40% 0px -40% 0px',
            threshold: 0,
        });

        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                observer.observe(el);
                observers.push(observer);
            }
        });

        return () => observers.forEach(o => o.disconnect());
    }, []);
}