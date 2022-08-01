import { Flex, IJDalignProp, isEmpty, JDalign } from "@janda-com/front";
import classNames from "classnames";
import React, { PropsWithChildren, useLayoutEffect, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { TElements } from "../../types/interface";
import { AnimationOnScroll } from "../scrollAnimation/ScrollAnimation";
import GuideIntro from "./GuideIndtro";

export interface IHorizenGriderProp<T> {
    align?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | "auto" | "wrap";
    wrap?: boolean;
    items: T[];
    empty?: TElements;
    itemRedner: (item: T, props: IJDalignProp) => TElements;
}

export const HorizenGrider = <_, T>({
    align,
    items,
    wrap,
    empty,
    itemRedner,
}: PropsWithChildren<IHorizenGriderProp<T>>) => {
    const [_align, _setAlign] = useState<number | null>(null);
    const { ref, width, height } = useResizeDetector();
    const Align = _align || align;
    const noItem = isEmpty(items);
    const className = classNames("ProductViewCards", undefined, {
        "ProductViewCards--1": Align === 1,
        "ProductViewCards--2": Align === 2,
        "ProductViewCards--3": Align === 3,
        "ProductViewCards--4": Align === 4,
        "ProductViewCards--5": Align === 5,
        "ProductViewCards--wrap": Align === "wrap",
        "ProductViewCards--empty": noItem,
    });

    useLayoutEffect(() => {
        if (align === "auto" || align === "wrap") {
            if (width) {
                if (width < 450) {
                    _setAlign(2);
                } else if (width < 850) _setAlign(3);
                else {
                    _setAlign(wrap ? 5 : 4);
                }
            }
        }
    }, [width]);

    return (
        <div ref={ref}>
            <AnimationOnScroll animateOnce animateIn="animate__fadeIn">
                <Flex oneone className={className} wrap={wrap}>
                    {noItem && (
                        <div className="ProductViewCards__empty">{empty}</div>
                    )}
                    {items.map((item) =>
                        itemRedner(item, {
                            className: "ProductViewCards__card",
                            mr: true,
                            mb: true,
                        })
                    )}
                    <JDalign
                        mr
                        className="ProductViewCards__card ProductViewCards__card--placeholder"
                    />
                    <JDalign
                        mr
                        className="ProductViewCards__card ProductViewCards__card--placeholder"
                    />
                    <JDalign
                        mr
                        className="ProductViewCards__card ProductViewCards__card--placeholder"
                    />
                </Flex>
            </AnimationOnScroll>
        </div>
    );
};

export const HorizenGrider2 = <_, T>({
    align,
    items,
    wrap,
    empty,
    itemRedner,
}: PropsWithChildren<IHorizenGriderProp<T>>) => {
    const [_align, _setAlign] = useState<number | null>(null);
    const { ref, width, height } = useResizeDetector();
    const Align = _align || align;
    const noItem = isEmpty(items);
    const className = classNames("ProductViewCards", undefined, {
        "ProductViewCards--1": Align === 1,
        "ProductViewCards--2": Align === 2,
        "ProductViewCards--3": Align === 3,
        "ProductViewCards--4": Align === 4,
        "ProductViewCards--5": Align === 5,
        "ProductViewCards--wrap": Align === "wrap",
        "ProductViewCards--empty": noItem,
    });

    useLayoutEffect(() => {
        if (align === "auto" || align === "wrap") {
            if (width) {
                if (width < 450) {
                    _setAlign(2);
                } else if (width < 850) _setAlign(3);
                else {
                    _setAlign(wrap ? 5 : 4);
                }
            }
        }
    }, [width]);

    return (
        <div ref={ref}>
            <AnimationOnScroll animateOnce animateIn="animate__fadeIn">
                <Flex
                    style={{ flexDirection: "column" }}
                    oneone
                    className={className}
                    wrap={wrap}
                >
                    {noItem && (
                        <div className="ProductViewCards__empty">{empty}</div>
                    )}

                    {items.map((item) => console.log(item))}

                    {items.map((item) => (
                        <GuideIntro item={item}></GuideIntro>
                    ))}

                    <JDalign
                        mr
                        className="ProductViewCards__card ProductViewCards__card--placeholder"
                    />
                    <JDalign
                        mr
                        className="ProductViewCards__card ProductViewCards__card--placeholder"
                    />
                    <JDalign
                        mr
                        className="ProductViewCards__card ProductViewCards__card--placeholder"
                    />
                </Flex>
            </AnimationOnScroll>
        </div>
    );
};
