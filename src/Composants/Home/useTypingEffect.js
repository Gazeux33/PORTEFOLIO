import { useEffect } from 'react';

const useTypingEffect = (wordElement, words, typingDelay = 100, erasingDelay = 100, newTextDelay = 300) => {
    let wordIndex = 0;
    let charIndex = 0;

    const type = () => {
        if (charIndex < words[wordIndex].length) {
            wordElement.current.textContent += words[wordIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    };

    const erase = () => {
        if (charIndex > 0) {
            wordElement.current.textContent = words[wordIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, typingDelay + 1100);
        }
    };

    useEffect(() => {
        const timer = setTimeout(type, newTextDelay + 250);
        return () => clearTimeout(timer);
    }, [type]);
};

export default useTypingEffect;
