// HorizonGrider 복사본입니다.

import { Flex, isEmpty, JDalign } from "@janda-com/front";
import classNames from "classnames";
import { PropsWithChildren, useLayoutEffect, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import GuideIntro from "../horizenGrider/GuideIndtro";
import { IHorizenGriderProp } from "../horizenGrider/HorizenGrider";
import { AnimationOnScroll } from "../scrollAnimation/ScrollAnimation";

const RegionGuidesBodyHorizonGrider = <_, T>({
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
                    {items.map((item) => (
                        <GuideIntro item={item}></GuideIntro>
                    ))}
                    {/* <JDalign
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
                    /> */}
                </Flex>
            </AnimationOnScroll>
        </div>
    );
};

export default RegionGuidesBodyHorizonGrider;
