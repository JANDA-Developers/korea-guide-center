import { JDtooltip, s4, ReactTooltip } from "@janda-com/front";
import { TElements } from "@janda-com/front/dist/types/interface";
import React, { HTMLAttributes, useEffect, useMemo } from "react";
import { TooltipProps } from "react-tooltip";

interface IProp extends HTMLAttributes<any> {
    Tag?: keyof JSX.IntrinsicElements;
    message?: TElements;
    tooltipProps?: TooltipProps;
}

export const Tip: React.FC<IProp> = ({
    Tag = "div",
    children,
    message,
    tooltipProps,
    ...props
}) => {
    const newId = useMemo(() => s4(), []);

    const tooltipObj = {
        "data-tip": "tooltip",
        "data-for": `Tip${newId}`,
    };

    if (!message) return <Tag {...props}>{children}</Tag>;

    useEffect(() => {
        ReactTooltip.rebuild();
    }, []);

    return (
        <Tag {...tooltipObj} {...props}>
            {children}
            <JDtooltip
                {...tooltipProps}
                type="dark"
                effect="solid"
                id={`Tip${newId}`}
            >
                <span>{message}</span>
            </JDtooltip>
        </Tag>
    );
};
