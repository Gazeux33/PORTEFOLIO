import { useEffect, useRef, useCallback } from 'react';

const useTypingEffect = (wordElement, words, typingDelay = 100, erasingDelay = 100, newTextDelay = 300) => {
    const wordIndex = useRef(0);
    const charIndex = useRef(0);

    const type = useCallback(() => {
        if (charIndex.current < words[wordIndex.current].length) {
            wordElement.current.textContent += words[wordIndex.current].charAt(charIndex.current);
            charIndex.current++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }, [typingDelay, newTextDelay, words, wordElement]);

    const erase = useCallback(() => {
        if (charIndex.current > 0) {
            wordElement.current.textContent = words[wordIndex.current].substring(0, charIndex.current - 1);
            charIndex.current--;
            setTimeout(erase, erasingDelay);
        } else {
            wordIndex.current = (wordIndex.current + 1) % words.length;
            setTimeout(type, typingDelay + 1100);
        }
    }, [erasingDelay, typingDelay, words, wordElement, type]);

    useEffect(() => {
        const timer = setTimeout(type, newTextDelay + 250);
        return () => clearTimeout(timer);
    }, [type, newTextDelay]);
};

export default useTypingEffect;
