import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useWindowSize } from "usehooks-ts";
import { ITourSliderItem } from "./TourSliderItem";
import TourSliderItem from "./TourSliderItem";

// scss/page/index.scss 파일에서 css 작업함

const data: ITourSliderItem[] = [
    {
        title: "서울 투어",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..",
        imageUrl: "img/cities/seoul.jpg",
        price: 300000,
    },
    {
        title: "부산 투어",
        desc: "놀러오세요.",
        imageUrl: "img/cities/busan.jpg",
        price: 300000,
    },
    {
        title: "대구 투어",
        desc: "놀러오세요.",
        imageUrl: "img/cities/daegu.jpg",
        price: 300000,
    },
    {
        title: "인천 투어",
        desc: "놀러오세요.",
        imageUrl: "img/cities/incheon.jpg",
        price: 300000,
    },
    {
        title: "광주 투어",
        desc: "놀러오세요.",
        imageUrl: "img/cities/gwangju.jpg",
        price: 300000,
    },
    {
        title: "대전 투어",
        desc: "놀러오세요.",
        imageUrl: "img/cities/daejeon.jpg",
        price: 300000,
    },
    {
        title: "울산 투어",
        desc: "놀러오세요.",
        imageUrl: "img/cities/ulsan.jpg",
        price: 300000,
    },
    {
        title: "제주 투어",
        desc: "놀러오세요",
        imageUrl: "img/cities/jeju.jpg",
        price: 300000,
    },
];

const offset = 4;

const TourSlider = () => {
    const { width } = useWindowSize();

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
        const maxIndex = Math.ceil(data.length / offset) - 1;
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
            <h1
                style={{
                    textAlign: "center",
                    marginBottom: "50px",
                    fontWeight: "bold",
                }}
            >
                <span
                    style={{
                        color: "#d0242b",
                    }}
                >
                    Tour
                </span>{" "}
                Item
            </h1>
            <div className="slider__LongSliderContainer">
                <div className="slider__LongSliderLeftArrowContainer">
                    <button
                        className="slider__LongSliderLeftArrow"
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
                        className="slider__LongSliderRow"
                        custom={back}
                        key={index}
                        variants={rowVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ type: "tween", duration: 0.5 }}
                    >
                        <div className="slider__LongSliderEmptyBox" />
                        <TourSliderItem
                            item={data}
                            offset={offset}
                            index={index}
                        />
                        <div className="slider__LongSliderEmptyBox" />
                    </motion.div>
                </AnimatePresence>
                <div className="slider__LongSliderRightArrowContainer">
                    <button
                        onClick={onClickNext}
                        className="slider__LongSliderRightArrow"
                        style={{
                            display:
                                index === Math.ceil(data.length / offset) - 1
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
            <div style={{ width: "100%", height: "35rem" }}></div>
        </>
    );
};

export default TourSlider;
