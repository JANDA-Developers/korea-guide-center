import { useState, useContext } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useWindowSize } from "usehooks-ts";

import { AppContext } from "../../context/context";
import { mapRegion, regionableData } from "../koreaMap/KoreaData";
import TourSliderItem, { IRegionSliderItem } from "./RegionSliderItem";

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
            products: 0,
            imageUrl: "img/cities/seoul.jpg",
        },
        {
            title: l(
                regionableData[mapRegion.busan as keyof typeof regionableData]
                    .title
            ),
            products: 0,
            imageUrl: "img/cities/busan.jpg",
        },
        {
            title: l(
                regionableData[mapRegion.daegu as keyof typeof regionableData]
                    .title
            ),
            products: 0,
            imageUrl: "img/cities/daegu.jpg",
        },
        {
            title: l(
                regionableData[mapRegion.Incheon as keyof typeof regionableData]
                    .title
            ),
            products: 0,
            imageUrl: "img/cities/incheon.jpg",
        },
        {
            title: l(
                regionableData[mapRegion.Gwangju as keyof typeof regionableData]
                    .title
            ),
            products: 0,
            imageUrl: "img/cities/gwangju.jpg",
        },
        {
            title: l(
                regionableData[mapRegion.Daejeon as keyof typeof regionableData]
                    .title
            ),
            products: 0,
            imageUrl: "img/cities/daejeon.jpg",
        },
        {
            title: l(
                regionableData[mapRegion.Ulsan as keyof typeof regionableData]
                    .title
            ),
            products: 0,
            imageUrl: "img/cities/ulsan.jpg",
        },
        {
            title: l(
                regionableData[mapRegion.Sejong as keyof typeof regionableData]
                    .title
            ),
            products: 0,
            imageUrl: "img/cities/sejong.jpg",
        },
        {
            title: l(
                regionableData[mapRegion.Jeju as keyof typeof regionableData]
                    .title
            ),
            products: 0,
            imageUrl: "img/cities/jeju.jpg",
        },
        {
            title: l(
                regionableData[
                    mapRegion.SouthGyeongsang as keyof typeof regionableData
                ].title
            ),
            products: 0,
            imageUrl: "img/cities/gyeongnam.jpg",
        },
        {
            title: l(
                regionableData[
                    mapRegion.NorthGyeongsang as keyof typeof regionableData
                ].title
            ),
            products: 0,
            imageUrl: "img/cities/gyeongbuk.jpg",
        },
        {
            title: l(
                regionableData[
                    mapRegion.SouthJeolla as keyof typeof regionableData
                ].title
            ),
            products: 0,
            imageUrl: "img/cities/jeonnam.jpg",
        },
        {
            title: l(
                regionableData[
                    mapRegion.NorthJeolla as keyof typeof regionableData
                ].title
            ),
            products: 0,
            imageUrl: "img/cities/jeonbuk.jpg",
        },
        {
            title: l(
                regionableData[
                    mapRegion.SouthChungcheong as keyof typeof regionableData
                ].title
            ),
            products: 0,
            imageUrl: "img/cities/chungnam.jpg",
        },
        {
            title: l(
                regionableData[
                    mapRegion.NorthChungcheong as keyof typeof regionableData
                ].title
            ),
            products: 0,
            imageUrl: "img/cities/chungbuk.jpg",
        },
        {
            title: l(
                regionableData[mapRegion.Gangwon as keyof typeof regionableData]
                    .title
            ),
            products: 0,
            imageUrl: "img/cities/gangwon.jpg",
        },
        {
            title: l(
                regionableData[
                    mapRegion.Gyeonggi as keyof typeof regionableData
                ].title
            ),
            products: 0,
            imageUrl: "img/cities/gyeonggi.jpg",
        },
        {
            title: "CUSTOM",
            products: 0,
            imageUrl: "img/cities/seoul.jpg",
        },
        {
            title: "MICE",
            products: 0,
            imageUrl: "img/cities/seoul.jpg",
        },
        {
            title: "DRIVING",
            products: 0,
            imageUrl: "img/cities/seoul.jpg",
        },
        {
            title: "MEDICAL",
            products: 0,
            imageUrl: "img/cities/seoul.jpg",
        },
        {
            title: "LOCAL FESTIVAL",
            products: 0,
            imageUrl: "img/cities/seoul.jpg",
        },
    ];

    const rowVariants = {
        hidden: (isBack: boolean) => ({
            x: isBack ? -width : width,
        }),
        visible: {
            x: 0,
        },
        exit: (isBack: boolean) => ({ x: isBack ? width : -width }),
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
    return (
        <>
            <div className="slider__ShortSliderContainer">
                <div className="slider__ShortSliderLeftArrowContainer">
                    <button
                        className="slider__ShortSliderLeftArrow"
                        onClick={onClickPrev}
                        style={{
                            display: index === 0 ? "none" : "block",
                        }}
                    >
                        <svg
                            width="40"
                            height="40"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
                </div>
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
                        <div className="slider__ShortSliderEmptyBox" />
                        <TourSliderItem
                            item={regionData}
                            offset={offset}
                            index={index}
                        />
                        <div className="slider__ShortSliderEmptyBox" />
                    </motion.div>
                </AnimatePresence>
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
                        <svg
                            width="40"
                            height="40"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div style={{ width: "100%", height: "23rem" }}></div>
        </>
    );
};

export default RegionSlider;
