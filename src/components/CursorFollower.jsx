// components/CursorFollower.js
import React, { useEffect, useRef } from 'react';

const CursorFollower = () => {
  const cursorRef = useRef(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const cursorX = useRef(0);
  const cursorY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    document.addEventListener('mousemove', handleMouseMove);

    const updateCursorFollower = () => {
      cursorX.current += (mouseX.current - cursorX.current - 10) * 0.1;
      cursorY.current += (mouseY.current - cursorY.current - 10) * 0.1;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorX.current}px, ${cursorY.current}px)`;
      }

      requestAnimationFrame(updateCursorFollower);
    };

    updateCursorFollower();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div className="cursor-follower" id="cursorFollower" ref={cursorRef}></div>;
};

export default CursorFollower;