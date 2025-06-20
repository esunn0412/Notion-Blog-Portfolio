'use client';

import { useEffect } from 'react';

export default function MouseAnimation() {
  useEffect(() => {
    // Create cursor element
    const cursor = document.createElement('div');
    cursor.className = 'cursor-blur';
    document.body.appendChild(cursor);

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup function to remove event listeners
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cursor.remove();
    };
  }, []);

  return (
    <style jsx global>{`
      .cursor-blur {
        position: fixed;
        width: 500px;
        height: 500px;
        border-radius: 50%;
        background: radial-gradient(
          circle,
          rgba(var(--background-rgb), 0) 0%,
          rgba(var(--background-rgb), 1) 50%
        );

        backdrop-filter: invert(30%);
        pointer-events: none;
        transform: translate(-50%, -50%);
        z-index: -1;
        transition: all 0.03s;
        opacity: 0.3;
      }
    `}</style>
  );
}
