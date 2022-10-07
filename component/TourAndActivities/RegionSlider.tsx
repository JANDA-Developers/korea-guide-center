import { useState, useContext, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useWindowSize } from "usehooks-ts";

import { AppContext } from "../../context/context";
import { mapRegion, regionableData } from "../koreaMap/KoreaData";
import TourSliderItem, { IRegionSliderItem } from "./RegionSliderItem";
import RightArrowIcon from "../../icons/RightArrowIcon";
import LeftArrowIcon from "../../icons/LeftArrowIcon";

// scss/page/index.scss 파일에서 css 작업함

const offset = 4;

const RegionSlider = () => {
    const { width } = useWindowSize();
    const { s, l } = useContext(AppContext);

    const regionData: IRegionSliderItem[] = [
        {
            title: l(
                regionableData[mapRegion.seoul as keyof typeof regionableData]
                    .title
            ),
            queryTitle: "서울",
            products: 0,
            imageUrl: "img/cities/seoul.jpg",
        },
        {
            title: l(
                regionableData[mapRegion.busan as keyof typeof regionableData]
                    .title
            ),
            queryTitle: "부산",
            products: 0,
            imageUrl: "img/cities/busan.jpg",
        },
        {
            title: l(
                regionableData[mapRegion.daegu as keyof typeof regionableData]
                    .title
            ),
            queryTitle: "대구",
            products: 0,
            imageUrl: "img/cities/daegu.jpg",
        },
        {
            title: l(
                regionableData[mapRegion.Incheon as keyof typeof regionableData]
                    .title
            ),
            queryTitle: "인천",
            products: 0,
            imageUrl: "img/cities/Incheon.jpg",
        },
        {
            title: l(
                regionableData[mapRegion.Gwangju as keyof typeof regionableData]
                    .title
            ),
            queryTitle: "광주",
            products: 0,
            imageUrl: "img/cities/Gwangju.jpg",
        },
        {
            title: l(
                regionableData[mapRegion.Daejeon as keyof typeof regionableData]
                    .title
            ),
            queryTitle: "대전",
            products: 0,
            imageUrl: "img/cities/Daejeon.jpg",
        },
        {
            title: l(
                regionableData[mapRegion.Ulsan as keyof typeof regionableData]
                    .title
            ),
            queryTitle: "울산",
            products: 0,
            imageUrl: "img/cities/Ulsan.jpg",
        },
        {
            title: l(
                regionableData[mapRegion.Sejong as keyof typeof regionableData]
                    .title
            ),
            queryTitle: "세종",
            products: 0,
            imageUrl: "img/cities/Sejong.jpg",
        },
        {
            title: l(
                regionableData[mapRegion.Jeju as keyof typeof regionableData]
                    .title
            ),
            queryTitle: "제주",
            products: 0,
            imageUrl: "img/cities/Jeju.jpg",
        },
        {
            title: l(
                regionableData[
                    mapRegion.SouthGyeongsang as keyof typeof regionableData
                ].title
            ),
            queryTitle: "경남",
            products: 0,
            imageUrl: "img/cities/SouthGyeongsang.jpg",
        },
        {
            title: l(
                regionableData[
                    mapRegion.NorthGyeongsang as keyof typeof regionableData
                ].title
            ),
            queryTitle: "경북",
            products: 0,
            imageUrl: "img/cities/NorthGyeongsang.jpg",
        },
        {
            title: l(
                regionableData[
                    mapRegion.SouthJeolla as keyof typeof regionableData
                ].title
            ),
            queryTitle: "전남",
            products: 0,
            imageUrl: "img/cities/SouthJeolla.jpg",
        },
        {
            title: l(
                regionableData[
                    mapRegion.NorthJeolla as keyof typeof regionableData
                ].title
            ),
            queryTitle: "전북",
            products: 0,
            imageUrl: "img/cities/NorthJeolla.jpg",
        },
        {
            title: l(
                regionableData[
                    mapRegion.SouthChungcheong as keyof typeof regionableData
                ].title
            ),
            queryTitle: "충남",
            products: 0,
            imageUrl: "img/cities/SouthChungcheong.jpg",
        },
        {
            title: l(
                regionableData[
                    mapRegion.NorthChungcheong as keyof typeof regionableData
                ].title
            ),
            queryTitle: "충북",
            products: 0,
            imageUrl: "img/cities/NorthChungcheong.jpg",
        },
        {
            title: l(
                regionableData[mapRegion.Gangwon as keyof typeof regionableData]
                    .title
            ),
            queryTitle: "강원",
            products: 0,
            imageUrl: "img/cities/Gangwon.jpg",
        },
        {
            title: l(
                regionableData[
                    mapRegion.Gyeonggi as keyof typeof regionableData
                ].title
            ),
            queryTitle: "경기",
            products: 0,
            imageUrl: "img/cities/Gyeonggi.jpg",
        },
        {
            title: l(
                regionableData[mapRegion.dmz as keyof typeof regionableData]
                    .title
            ),
            queryTitle: "dmz",
            products: 0,
            imageUrl: "img/cities/seoul.jpg",
        },
        {
            title: s("ServicesCustom"),
            queryTitle: "Custom",
            products: 0,
            imageUrl: "img/cities/seoul.jpg",
        },
        {
            title: s("ServicesMICE"),
            queryTitle: "MICE",
            products: 0,
            imageUrl: "img/cities/seoul.jpg",
        },
        {
            title: s("ServicesDriving"),
            queryTitle: "DRIVING",
            products: 0,
            imageUrl: "img/cities/seoul.jpg",
        },
        {
            title: s("ServicesWellness"),
            queryTitle: "의료관광",
            products: 0,
            imageUrl: "img/cities/seoul.jpg",
        },
        {
            title: s("ServicesLocalFestival"),
            queryTitle: "축제",
            products: 0,
            imageUrl: "img/cities/seoul.jpg",
        },
        {
            title: s("ServicesTranlate"),
            queryTitle: "통역",
            products: 0,
            imageUrl: "img/cities/seoul.jpg",
        },
        {
            title: s("ServicesBarrierFree"),
            queryTitle: "Barrier-Free",
            products: 0,
            imageUrl: "img/cities/seoul.jpg",
        },
        {
            title: s("ServicesVIP"),
            queryTitle: "VIP의전",
            products: 0,
            imageUrl: "img/cities/seoul.jpg",
        },
        {
            title: s("ServicesRealEstate"),
            queryTitle: "부동산",
            products: 0,
            imageUrl: "img/cities/seoul.jpg",
        },
        {
            title: s("ServicesStudyingAbroad"),
            queryTitle: "유학",
            products: 0,
            imageUrl: "img/cities/seoul.jpg",
        },
        {
            title: s("ServicesLongStay"),
            queryTitle: "장기체류",
            products: 0,
            imageUrl: "img/cities/seoul.jpg",
        },
        {
            title: s("ServicesCook"),
            queryTitle: "요리",
            products: 0,
            imageUrl: "img/cities/seoul.jpg",
        },
    ];

    let w = width * 0.75;
    const rowVariants = {
        hidden: (isBack: boolean) => ({
            x: isBack ? -w : w,
        }),
        visible: {
            x: 0,
        },
        exit: (isBack: boolean) => ({ x: isBack ? w : -w }),
    };

    const onClickNext = () => {
        if (leaving) return;
        setLeaving(true);
        setBack(false);
        const maxIndex = Math.ceil(regionData.length / offset) - 1;
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

    const ItemContainer = useRef<HTMLDivElement>(null);

    return (
        <div className="slider__sliderContainer">
            {width <= 1025 ? null : (
                <div className="slider__ShortSliderLeftArrowContainer">
                    <button
                        className="slider__ShortSliderLeftArrow"
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
                className="slider__ShortSliderContainer"
            >
                {width <= 1025 ? (
                    <motion.div
                        drag="x"
                        dragConstraints={ItemContainer}
                        className="slider__ShortSliderContentArea"
                    >
                        {regionData.map((i) => (
                            <div className="slider__ShortSliderItems">
                                <img
                                    src={`${i.imageUrl}`}
                                    className="region__bgImage"
                                />
                                <div className="region__contents">
                                    <h5 className="region__RegionSliderItemTitle">
                                        {i.title}
                                    </h5>
                                    <button
                                        className="region__RegionDetailButton"
                                        onClick={() => {
                                            location.href = `/cities/search?title=${i.queryTitle}`;
                                        }}
                                    >
                                        {s("LookAround")}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                ) : (
                    <motion.div className="slider__ShortSliderContentArea">
                        <AnimatePresence
                            initial={false}
                            custom={back}
                            onExitComplete={toggleLeaving}
                        >
                            <motion.div
                                className="slider__ShortSliderRow"
                                custom={back}
                                key={index}
                                variants={rowVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ type: "tween", duration: 0.5 }}
                            >
                                <TourSliderItem
                                    item={regionData}
                                    offset={offset}
                                    index={index}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                )}
            </motion.div>
            {width <= 1025 ? null : (
                <div className="slider__ShortSliderRightArrowContainer">
                    <button
                        onClick={onClickNext}
                        className="slider__ShortSliderRightArrow"
                        style={{
                            display:
                                index ===
                                Math.ceil(regionData.length / offset) - 1
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

export default RegionSlider;
