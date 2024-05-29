'use client'

import { useEffect } from 'react';

const useIntersectionObserver = () => {
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1
        };

        const observerCallback: IntersectionObserverCallback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.replace("overlay__reveal", "overlay__reveal--visible");
                    entry.target.classList.replace("overlay__conceal", "overlay__conceal--visible");
                } else {
                    entry.target.classList.replace("overlay__reveal--visible", "overlay__reveal");
                    entry.target.classList.replace("overlay__conceal--visible", "overlay__conceal");
                }
            });
        };

        const fadeOutElms = document.querySelectorAll(".card__reveal");
        const fadeInElms = document.querySelectorAll(".card__conceal");

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        fadeOutElms.forEach((el) => observer.observe(el));
        fadeInElms.forEach((el) => observer.observe(el));

        return () => {
            fadeOutElms.forEach((el) => observer.unobserve(el));
            fadeInElms.forEach((el) => observer.unobserve(el));
        };
    }, []);
};

export default useIntersectionObserver;
