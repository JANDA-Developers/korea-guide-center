import { useContext, useRef, useState } from "react";
import { AppContext } from "../../context/context";
import { useWindowSize } from "usehooks-ts";
import { mapRegion, mapRegionArr, regionableData } from "../koreaMap/KoreaData";
import { motion, AnimatePresence } from "framer-motion";
import RightArrowIcon from "../../icons/RightArrowIcon";
import LeftArrowIcon from "../../icons/LeftArrowIcon";
import { ILocalGuideSliderItem } from "../LocalGuideAndPrivateTour/LocalGuideSliderItem";

interface IProp {
    region: mapRegion;
    onSelectRegion: (region: mapRegion) => void;
    items: ILocalGuideSliderItem[];
}

const offset = 6;

export const SelectRegionSector: React.FC<IProp> = ({
    region,
    onSelectRegion,
}) => {
    // const [viewMoreText, setViewMoreText] = useState(false);
    const { l } = useContext(AppContext);
    const { width } = useWindowSize();
    let w = width * 0.8;

    const rowVariants = {
        hidden: (isBack: boolean) => ({
            x: isBack ? -w : w,
        }),
        visible: {
            x: 0,
        },
        exit: (isBack: boolean) => ({ x: isBack ? w : -w }),
    };

    const SliderVariants = {
        hover: {
            boxShadow: "rgba(0, 0, 0, 0.8) 0px 2px 2px",
            cursor: "pointer",
        },
    };

    const onClickNext = () => {
        if (leaving) return;
        setLeaving(true);
        setBack(false);
        const maxIndex = Math.ceil(mapRegionArr.length / offset) - 1;
        setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    };

    const onClickPrev = () => {
        if (leaving) return;
        if (index !== 0) {
            setLeaving(true);
            setBack(true);
        }
        setIndex((prev) => (prev === 0 ? 0 : prev - 1));
    };
    const [index, setIndex] = useState(0);
    const [leaving, setLeaving] = useState(false);
    const [back, setBack] = useState(false);

    const toggleLeaving = () => setLeaving(false);

    const handleSelectRegion = (region: mapRegion) => () => {
        onSelectRegion(region);
    };

    const ItemContainer = useRef<HTMLDivElement>(null);

    return (
        <div className="locationalGuide__sliderContainer">
            {width <= 1368 ? null : (
                <div className="locationalGuide__sliderLeftArrowContainer">
                    <button
                        className="locationalGuide__sliderLeftArrow"
                        onClick={onClickPrev}
                        style={{
                            display: index === 0 ? "none" : "block",
                        }}
                    >
                        <LeftArrowIcon />
                    </button>
                </div>
            )}
            <motion.div
                ref={ItemContainer}
                className="locationalGuide__regionSliderContainer"
            >
                {width <= 1368 ? (
                    <motion.div
                        drag="x"
                        dragConstraints={ItemContainer}
                        className="locationalGuide__regionSliderContentArea"
                    >
                        {mapRegionArr.map((_region) => {
                            const target =
                                regionableData[
                                    _region as keyof typeof regionableData
                                ];
                            const isSelected = region === _region;
                            return (
                                <motion.div
                                    variants={SliderVariants}
                                    whileHover="hover"
                                    className="locationalGuide__regionSelectButton"
                                    onClick={handleSelectRegion(_region)}
                                    style={{
                                        backgroundColor: isSelected
                                            ? undefined
                                            : "transparent",
                                    }}
                                >
                                    <span>{l(target.title)}</span>
                                    <img
                                        className="locationalGuide__regionSelectButtonBg"
                                        src={`/img/cities/${_region}.jpg`}
                                    />
                                </motion.div>
                            );
                        })}
                    </motion.div>
                ) : (
                    <motion.div className="locationalGuide__regionSliderContentArea">
                        <AnimatePresence
                            initial={false}
                            custom={back}
                            onExitComplete={toggleLeaving}
                        >
                            <motion.div
                                className="locationalGuide__regionSelectButtonContainer"
                                custom={back}
                                key={index}
                                variants={rowVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ type: "tween", duration: 0.5 }}
                            >
                                {mapRegionArr
                                    .slice(
                                        offset * index,
                                        offset * index + offset
                                    )
                                    .map((_region) => {
                                        const target =
                                            regionableData[
                                                _region as keyof typeof regionableData
                                            ];
                                        const isSelected = region === _region;
                                        return (
                                            <motion.div
                                                variants={SliderVariants}
                                                whileHover="hover"
                                                className="locationalGuide__regionSelectButton"
                                                onClick={handleSelectRegion(
                                                    _region
                                                )}
                                                style={{
                                                    backgroundColor: isSelected
                                                        ? undefined
                                                        : "transparent",
                                                }}
                                            >
                                                <span>{l(target.title)}</span>
                                                <img
                                                    className="locationalGuide__regionSelectButtonBg"
                                                    src={`/img/cities/${_region}.jpg`}
                                                />
                                            </motion.div>
                                        );
                                    })}
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                )}
            </motion.div>
            {width <= 1368 ? null : (
                <div className="locationalGuide__sliderRightArrowContainer">
                    <button
                        className="locationalGuide__sliderRightArrow"
                        onClick={onClickNext}
                        style={{
                            display:
                                index ===
                                Math.ceil(mapRegionArr.length / offset) - 1
                                    ? "none"
                                    : "block",
                        }}
                    >
                        <RightArrowIcon />
                    </button>
                </div>
            )}
        </div>
    );
};
