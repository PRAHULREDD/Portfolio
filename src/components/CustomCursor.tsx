import { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const tagName = target.tagName.toLowerCase();

      // Restore native cursor for text inputs
      if (tagName === 'input' || tagName === 'textarea' || target.isContentEditable) {
        setIsHidden(true);
        setIsHovering(false);
        return;
      } else {
        setIsHidden(false);
      }

      // If hovering over a link, button, or an element with cursor-pointer
      if (
        tagName === 'a' ||
        tagName === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  // Hide cursor on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      <style>{`
        * {
          cursor: none;
        }
        input, textarea, [contenteditable="true"] {
          cursor: text !important;
        }
      `}</style>
      
      {/* Outer expanding ring */}
      {!isHidden && (
        <>
          <motion.div
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border border-primary"
            style={{
              x: cursorXSpring,
              y: cursorYSpring,
              translateX: '-50%',
              translateY: '-50%',
              opacity: isHovering ? 0.8 : 0.4,
              backgroundColor: isHovering ? 'rgba(34, 197, 94, 0.1)' : 'transparent',
            }}
            animate={{
              width: isHovering ? 50 : 24,
              height: isHovering ? 50 : 24,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          />
          {/* Dot that strictly follows */}
          <motion.div
            className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999]"
            style={{
              x: cursorX,
              y: cursorY,
              translateX: '-50%',
              translateY: '-50%',
            }}
          />
        </>
      )}
    </>
  );
}
