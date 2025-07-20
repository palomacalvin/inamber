import React, { useEffect, useRef } from 'react';
import '../styles/Fireflies.css';

const Fireflies: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const createFirefly = () => {
    if (!containerRef.current) return;

    const firefly = document.createElement('div');
    firefly.classList.add('firefly');

    const size = Math.random() * 10 + 40;
    const posX = Math.random() * window.innerWidth;
    const posY = window.scrollY + window.innerHeight * 0.8;

    firefly.style.width = `${size}px`;
    firefly.style.height = `${size}px`;
    firefly.style.left = `${posX}px`;
    firefly.style.top = `${posY}px`;

    containerRef.current.appendChild(firefly);

    setTimeout(() => {
      if (containerRef.current?.contains(firefly)) {
        containerRef.current.removeChild(firefly);
      }
    }, 20000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (Math.random() < 0.7) {
        createFirefly();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div id="firefly-container" ref={containerRef}></div>;
};

export default Fireflies;
