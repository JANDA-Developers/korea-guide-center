import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useWindowSize } from "usehooks-ts";
import LocalGuideSliderItem, {
    ILocalGuideSliderItem,
} from "./LocalGuideSliderItem";

const localGuideData: ILocalGuideSliderItem[] = [
    {
        title: "GUIDES IN SEOUL",
        desc: "서울 지역의 가이드",
        imageUrl: "img/cities/seoul.jpg",
    },
    {
        title: "GUIDES IN BUSAN",
        desc: "부산 지역의 가이드",
        imageUrl: "img/cities/busan.jpg",
    },
    {
        title: "GUIDES IN DAEGU",
        desc: "대구 지역의 가이드",
        imageUrl: "img/cities/daegu.jpg",
    },
    {
        title: "GUIDES IN INCHEON",
        desc: "인천 지역의 가이드",
        imageUrl: "img/cities/incheon.jpg",
    },
    {
        title: "GUIDES IN GWANGJU",
        desc: "광주 지역의 가이드",
        imageUrl: "img/cities/gwangju.jpg",
    },
    {
        title: "GUIDES IN DAEJEON",
        desc: "대전 지역의 가이드",
        imageUrl: "img/cities/daejeon.jpg",
    },
    {
        title: "GUIDES IN ULSAN",
        desc: "울산 지역의 가이드",
        imageUrl: "img/cities/ulsan.jpg",
    },
    {
        title: "GUIDES IN SEJONG",
        desc: "세종 지역의 가이드",
        imageUrl: "img/cities/sejong.jpg",
    },
    {
        title: "GUIDES IN JEJU",
        desc: "제주 지역의 가이드",
        imageUrl: "img/cities/jeju.jpg",
    },
    {
        title: "GUIDES IN GYEONSANGNAM-DO",
        desc: "경남 지역의 가이드",
        imageUrl: "img/cities/gyeongnam.jpg",
    },
    {
        title: "GUIDES IN GYEONSANGBUK-DO",
        desc: "경북 지역의 가이드",
        imageUrl: "img/cities/gyeongbuk.jpg",
    },
    {
        title: "GUIDES IN JEOLLANAM-DO",
        desc: "전남 지역의 가이드",
        imageUrl: "img/cities/jeonnam.jpg",
    },
    {
        title: "GUIDES IN JEOLLABUK-DO",
        desc: "전북 지역의 가이드",
        imageUrl: "img/cities/jeonbuk.jpg",
    },
    {
        title: "GUIDES IN CHUNGCHEONGNAM-DO",
        desc: "충남 지역의 가이드",
        imageUrl: "img/cities/chungnam.jpg",
    },
    {
        title: "GUIDES IN CHUNGCHEONGBUK-DO",
        desc: "충북 지역의 가이드",
        imageUrl: "img/cities/chungbuk.jpg",
    },
    {
        title: "GUIDES IN GANGWON-DO",
        desc: "강원 지역의 가이드",
        imageUrl: "img/cities/gangwon.jpg",
    },
    {
        title: "GUIDES IN GYEONGGI-DO",
        desc: "경기 지역의 가이드",
        imageUrl: "img/cities/gyeonggi.jpg",
    },
];

const offset = 4;

const LocalGuideSlider = () => {
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
        const maxIndex = Math.ceil(localGuideData.length / offset) - 1;
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
                        <LocalGuideSliderItem
                            item={localGuideData}
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

export default LocalGuideSlider;
