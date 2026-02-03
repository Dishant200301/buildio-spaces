
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    fullWidth?: boolean;
}

const FadeIn = ({
    children,
    className,
    delay = 0,
    direction = 'up',
    fullWidth = false,
}: FadeInProps) => {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        let x = 0;
        let y = 0;

        switch (direction) {
            case 'up':
                y = 40;
                break;
            case 'down':
                y = -40;
                break;
            case 'left':
                x = 40;
                break;
            case 'right':
                x = -40;
                break;
            case 'none':
                break;
        }

        gsap.fromTo(
            element,
            {
                opacity: 0,
                x,
                y,
            },
            {
                opacity: 1,
                x: 0,
                y: 0,
                duration: 0.8,
                delay,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 85%', // Start slightly later than StaggerText
                    toggleActions: 'play none none reverse',
                },
            }
        );

        return () => {
            // Cleanup if needed, though mostly unnecessary for simple triggers
        };
    }, [delay, direction]);

    return (
        <div
            ref={elementRef}
            className={cn(fullWidth ? "w-full" : "", className)}
            style={{ opacity: 0 }} // Start hidden
        >
            {children}
        </div>
    );
};

export default FadeIn;
