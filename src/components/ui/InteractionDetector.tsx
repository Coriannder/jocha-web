"use client";

import { useEffect } from "react";

/**
 * InteractionDetector
 * 
 * Detects whether the user is currently using a touch screen or a mouse.
 * Adds 'is-touching' class to <html> when touch is detected, and removes it 
 * when mouse movement is detected.
 */
export default function InteractionDetector() {
    useEffect(() => {
        let lastTouchTime = 0;

        const handleTouchStart = () => {
            lastTouchTime = Date.now();
            document.documentElement.classList.add("is-touching");
            document.documentElement.classList.remove("has-mouse");
        };

        const handleMouseMove = () => {
            // Only remove is-touching if it's been more than 500ms since the last touch
            // This prevents mousemove events triggered by the touch itself from toggling it back
            if (Date.now() - lastTouchTime > 1000) {
                document.documentElement.classList.remove("is-touching");
                document.documentElement.classList.add("has-mouse");
            }
        };

        const handleMouseDown = () => {
             if (Date.now() - lastTouchTime > 1000) {
                document.documentElement.classList.remove("is-touching");
                document.documentElement.classList.add("has-mouse");
            }
        };

        // Add initial class based on device capability, though it will be refined by interaction
        if (window.matchMedia("(hover: hover)").matches) {
            document.documentElement.classList.add("has-mouse");
        }

        window.addEventListener("touchstart", handleTouchStart, { passive: true });
        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        window.addEventListener("mousedown", handleMouseDown, { passive: true });

        return () => {
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
        };
    }, []);

    return null;
}
