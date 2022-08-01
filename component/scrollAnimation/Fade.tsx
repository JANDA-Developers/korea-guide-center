import React, { useEffect, useState } from "react";
import { IDiv } from "../../types/interface";

interface IProp extends IDiv {
    show: boolean;
    animation?: "fade" | "roate" | "vertical";
    duration?: number;
    strip?: boolean;
}

const Fade: React.FC<IProp> = ({
    show,
    children,
    animation = "fade",
    duration = 1,
    strip,
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
        outAnimation = "";
    }

    if (animation === "roate") {
        inAmiation = "JDfadeIn";
        outAnimation = "";
    }

    if (animation === "vertical") {
        inAmiation = "JDfadeIn";
        outAnimation = "";
    }

    if (strip) return <>{children}</>;
    return (
        (shouldRender && (
            <div
                {...props}
                style={{
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

export default Fade;
