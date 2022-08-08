import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useWindowSize } from "usehooks-ts";
import LocalGuideSliderItems from "./LocalGuideSliderItems";
import { ILocalGuideSliderItem } from "./LocalGuideSliderItem";
import RightArrowIcon from "../../icons/RightArrowIcon";
import LeftArrowIcon from "../../icons/LeftArrowIcon";

const localGuideData: ILocalGuideSliderItem[] = [
    {
        title: "GUIDES IN SEOUL",
        desc: "서울 지역의 가이드",
        imageUrl: "img/cities/seoul.jpg",
        region: "seoul",
    },
    {
        title: "GUIDES IN BUSAN",
        desc: "부산 지역의 가이드",
        imageUrl: "img/cities/busan.jpg",
        region: "busan",
    },
    {
        title: "GUIDES IN DAEGU",
        desc: "대구 지역의 가이드",
        imageUrl: "img/cities/daegu.jpg",
        region: "daegu",
    },
    {
        title: "GUIDES IN INCHEON",
        desc: "인천 지역의 가이드",
        imageUrl: "img/cities/incheon.jpg",
        region: "Incheon",
    },
    {
        title: "GUIDES IN GWANGJU",
        desc: "광주 지역의 가이드",
        imageUrl: "img/cities/gwangju.jpg",
        region: "Gwangju",
    },
    {
        title: "GUIDES IN DAEJEON",
        desc: "대전 지역의 가이드",
        imageUrl: "img/cities/daejeon.jpg",
        region: "Daejeon",
    },
    {
        title: "GUIDES IN ULSAN",
        desc: "울산 지역의 가이드",
        imageUrl: "img/cities/ulsan.jpg",
        region: "Ulsan",
    },
    {
        title: "GUIDES IN SEJONG",
        desc: "세종 지역의 가이드",
        imageUrl: "img/cities/sejong.jpg",
        region: "Sejong",
    },
    {
        title: "GUIDES IN JEJU",
        desc: "제주 지역의 가이드",
        imageUrl: "img/cities/jeju.jpg",
        region: "Jeju",
    },
    {
        title: "GUIDES IN GYEONSANGNAM-DO",
        desc: "경남 지역의 가이드",
        imageUrl: "img/cities/gyeongnam.jpg",
        region: "SouthGyeongsang",
    },
    {
        title: "GUIDES IN GYEONSANGBUK-DO",
        desc: "경북 지역의 가이드",
        imageUrl: "img/cities/gyeongbuk.jpg",
        region: "NorthGyeongsang",
    },
    {
        title: "GUIDES IN JEOLLANAM-DO",
        desc: "전남 지역의 가이드",
        imageUrl: "img/cities/jeonnam.jpg",
        region: "SouthJeolla",
    },
    {
        title: "GUIDES IN JEOLLABUK-DO",
        desc: "전북 지역의 가이드",
        imageUrl: "img/cities/jeonbuk.jpg",
        region: "NorthJeolla",
    },
    {
        title: "GUIDES IN CHUNGCHEONGNAM-DO",
        desc: "충남 지역의 가이드",
        imageUrl: "img/cities/chungnam.jpg",
        region: "SouthChungcheong",
    },
    {
        title: "GUIDES IN CHUNGCHEONGBUK-DO",
        desc: "충북 지역의 가이드",
        imageUrl: "img/cities/chungbuk.jpg",
        region: "NorthChungcheong",
    },
    {
        title: "GUIDES IN GANGWON-DO",
        desc: "강원 지역의 가이드",
        imageUrl: "img/cities/gangwon.jpg",
        region: "Gangwon",
    },
    {
        title: "GUIDES IN GYEONGGI-DO",
        desc: "경기 지역의 가이드",
        imageUrl: "img/cities/gyeonggi.jpg",
        region: "Gyeonggi",
    },
];

const offset = 4;

const LocalGuideSlider = () => {
    const { width } = useWindowSize();
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
        <div className="slider__sliderContainer">
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
            <div className="slider__ShortSliderContainer">
                <div className="slider__ShortSliderContentArea">
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
                            <LocalGuideSliderItems
                                items={localGuideData}
                                offset={offset}
                                index={index}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
            <div className="slider__ShortSliderRightArrowContainer">
                <button
                    onClick={onClickNext}
                    className="slider__ShortSliderRightArrow"
                    style={{
                        display:
                            index ===
                            Math.ceil(localGuideData.length / offset) - 1
                                ? "none"
                                : "block",
                    }}
                >
                    <RightArrowIcon />
                </button>
            </div>
        </div>
    );
};

export default LocalGuideSlider;
