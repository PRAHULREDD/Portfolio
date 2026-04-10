import { useEffect, useState } from 'react';

const chars = "!<>-_\\\\/[]{}—=+*^?#________";

export default function DecryptText({ text, className }: { text: string, className?: string }) {
  const [displayText, setDisplayText] = useState(() => 
    text.split('').map(() => chars[Math.floor(Math.random() * chars.length)]).join('')
  );

  useEffect(() => {
    let iteration = 0;
    const maxIterations = text.length;
    
    const interval = setInterval(() => {
      setDisplayText(prev => prev.split('').map((letter, index) => {
        if (index < iteration) {
          return text[index];
        }
        return chars[Math.floor(Math.random() * chars.length)];
      }).join(''));

      if (iteration >= maxIterations) {
        clearInterval(interval);
      }
      iteration += 1 / 2; // Speed of reveal
    }, 40);

    return () => clearInterval(interval);
  }, [text]);

  return <span className={className}>{displayText}</span>;
}
