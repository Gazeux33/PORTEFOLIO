import { useEffect, useRef, useCallback } from 'react';

const useTypingEffect = (wordElement, words, typingDelay = 100, erasingDelay = 100, newTextDelay = 300) => {
    const wordIndex = useRef(0);
    const charIndex = useRef(0);

    const type = useRef(null);
    const erase = useRef(null);

    type.current = useCallback(() => {
        if (charIndex.current < words[wordIndex.current].length) {
            wordElement.current.textContent += words[wordIndex.current].charAt(charIndex.current);
            charIndex.current++;
            setTimeout(type.current, typingDelay);
        } else {
            setTimeout(erase.current, newTextDelay);
        }
    }, [typingDelay, newTextDelay, words, wordElement]);

    erase.current = useCallback(() => {
        if (charIndex.current > 0) {
            wordElement.current.textContent = words[wordIndex.current].substring(0, charIndex.current - 1);
            charIndex.current--;
            setTimeout(erase.current, erasingDelay);
        } else {
            wordIndex.current = (wordIndex.current + 1) % words.length;
            setTimeout(type.current, typingDelay + 1100);
        }
    }, [erasingDelay, typingDelay, words, wordElement]);

    useEffect(() => {
        const timer = setTimeout(type.current, newTextDelay + 250);
        return () => clearTimeout(timer);
    }, [newTextDelay]);

};

export default useTypingEffect;
