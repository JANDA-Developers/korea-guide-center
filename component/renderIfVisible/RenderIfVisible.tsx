import React, { useState, useRef, useEffect } from "react";

const isServer = typeof window === "undefined";

type Props = {
    /** An estimate of the element's height */
    defaultHeight?: number;
    /** How far outside the viewport in pixels should elements be considered visible?  */
    visibleOffset?: number;
    root?: HTMLElement | null;
    children: React.ReactNode;
};

const RenderIfVisible = ({
    defaultHeight = 300,
    visibleOffset = 1000,
    root = null,
    children,
}: Props) => {
    const [isVisible, setIsVisible] = useState<boolean>(isServer);
    const placeholderHeight = useRef<number>(defaultHeight);
    const intersectionRef = useRef<HTMLDivElement>(null);

    // Set visibility with intersection observer
    useEffect(() => {
        if (intersectionRef.current) {
            const observer = new IntersectionObserver(
                (entries) => {
                    if (
                        typeof window !== undefined &&
                        window.requestIdleCallback
                    ) {
                        window.requestIdleCallback(
                            () => {
                                if (isVisible) return;
                                if (!entries[0].isIntersecting) return;
                                return setIsVisible(true);
                            },
                            {
                                timeout: 600,
                            }
                        );
                    } else {
                        if (isVisible) return;
                        if (!entries[0].isIntersecting) return;
                        setIsVisible(true);
                    }
                },
                {
                    root,
                    rootMargin: `${visibleOffset}px 0px ${visibleOffset}px 0px`,
                }
            );
            observer.observe(intersectionRef.current);
            return () => {
                if (intersectionRef.current) {
                    observer.unobserve(intersectionRef.current);
                }
            };
        }
        return () => {};
    }, [intersectionRef]);

    // Set true height for placeholder element after render.
    useEffect(() => {
        if (intersectionRef.current && isVisible) {
            placeholderHeight.current = intersectionRef.current.offsetHeight;
        }
    }, [isVisible, intersectionRef]);

    return (
        <div ref={intersectionRef}>
            {isVisible ? (
                <>{children}</>
            ) : (
                <div style={{ height: placeholderHeight.current }} />
            )}
        </div>
    );
};

export default RenderIfVisible;
