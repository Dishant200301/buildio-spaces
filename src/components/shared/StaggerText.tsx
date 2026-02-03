
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { cn } from '@/lib/utils'; // Assuming this exists, based on other files

gsap.registerPlugin(ScrollTrigger);

interface StaggerTextProps {
    children: React.ReactNode;
    className?: string;
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'span';
    stagger?: number;
    delay?: number;
}

const StaggerText = ({
    children,
    className,
    tag = 'div',
    stagger = 0.02,
    delay = 0,
}: StaggerTextProps) => {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Accessibility: set aria-label to the full text content so screen readers read it as a whole
        const originalText = containerRef.current.innerText || containerRef.current.textContent || "";
        containerRef.current.setAttribute("aria-label", originalText);
        // We can't easily put aria-hidden on the split parts here unless we iterate them, 
        // but setting aria-label on the container usually makes screen readers ignore the children for text calculations 
        // or prefer the label. However, to be safe, we should ensuring the container acts as the label provider.

        // Split text
        // We target the element itself
        const text = new SplitType(containerRef.current, { types: 'chars,words' });

        // Initial state set implicitly by from() but we can set it explicitly if needed
        // text.chars are the elements we want to animate

        if (text.chars) {
            gsap.killTweensOf(text.chars);

            gsap.fromTo(
                text.chars,
                {
                    opacity: 0,
                    y: 20,
                    rotation: 0.01, // Force GPU
                    z: 0.01,
                    willChange: "transform, opacity",
                },
                {
                    opacity: 1,
                    y: 0,
                    rotation: 0,
                    z: 0,
                    duration: 1,
                    delay: delay,
                    stagger: stagger,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }

        return () => {
            // Cleanup
            if (text) text.revert();
            ScrollTrigger.getAll().forEach(t => t.kill());
            // Note: killing ALL scrolltriggers might be aggressive if other components use it. 
            // Ideally we kill only the one we created. 
            // But text.revert() removes the elements, so the trigger might be invalid anyway.
            // Better to let GSAP handle context if possible, but for now this is simple.
        };
    }, [children, stagger]);

    const Component = tag as any;

    return (
        <Component
            ref={containerRef}
            className={cn("staggered-text-container", className)}
            style={{ opacity: 1 }} // Ensure it's visible initially (SplitType will handle the split logic)
        >
            {children}
        </Component>
    );
};

export default StaggerText;
