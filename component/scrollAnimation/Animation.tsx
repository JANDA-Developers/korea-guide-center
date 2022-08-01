import React, { useEffect, useState } from "react";
import { IDiv } from "../../types/interface";

interface IProp extends IDiv {
    show: boolean;
    animation?: "fade" | "roate" | "vertical" | string;
    duration?: number;
    strip?: boolean;
    animationDelay?: any;
}

export const Animation: React.FC<IProp> = ({
    show,
    children,
    animation = "fade",
    duration = 1,
    strip,
    animationDelay,
    ...props
}) => {
    const [shouldRender, setRender] = useState(show);

    useEffect(() => {
        if (show) setRender(true);
    }, [show]);

    const onAnimationEnd = () => {
        if (!show) setRender(false);
    };

    let inAmiation;
    let outAnimation;

    if (animation === "fade") {
        inAmiation = "JDfadeIn";
        outAnimation = "JDfadeOut";
    }

    if (animation === "roate") {
        inAmiation = "rotateIn";
        outAnimation = "JDrotateOut";
    }

    if (animation === "vertical") {
        inAmiation = "JDfadeInDown";
        outAnimation = "JDfadeOutUp";
    }

    if (!inAmiation) {
        inAmiation = animation;
    }

    if (strip) return <>{children}</>;
    return (
        (shouldRender && (
            <div
                {...props}
                style={{
                    animationDelay: animationDelay,
                    animation: `${
                        show ? inAmiation : outAnimation
                    } ${duration}s`,
                    ...props.style,
                }}
                onAnimationEnd={onAnimationEnd}
            >
                {children}
            </div>
        )) ||
        null
    );
};

export default Animation;
