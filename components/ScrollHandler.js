'use client';
import { useEffect } from 'react';

const ScrollHandler = () => {
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="/#"], a[href^="#"]');
      if (!anchor) return;

      const hash = anchor.getAttribute('href').split('#')[1];
      if (!hash) return;

      const target = document.getElementById(hash);
      if (target) {
        e.preventDefault();
        const yOffset = -12;
        const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return null; // This is just a hook component
};

export default ScrollHandler;