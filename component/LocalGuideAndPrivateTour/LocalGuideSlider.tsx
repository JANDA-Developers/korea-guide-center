import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useWindowSize } from "usehooks-ts";
import LocalGuideSliderItems from "./LocalGuideSliderItems";
import LocalGuideSliderItem, {
    ILocalGuideSliderItem,
} from "./LocalGuideSliderItem";
import RightArrowIcon from "../../icons/RightArrowIcon";
import LeftArrowIcon from "../../icons/LeftArrowIcon";
import { useGlobalKoreaMap } from "../../hook/useKoreaMap";
import Section from "../MultiCarousel/Section";
import MultiGuideCarousel from "../MultiCarousel/MultiGuideCarousel";

export const localGuideData: ILocalGuideSliderItem[] = [
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
        imageUrl: "img/cities/Incheon.jpg",
        region: "Incheon",
    },
    {
        title: "GUIDES IN GWANGJU",
        desc: "광주 지역의 가이드",
        imageUrl: "img/cities/Gwangju.jpg",
        region: "Gwangju",
    },
    {
        title: "GUIDES IN DAEJEON",
        desc: "대전 지역의 가이드",
        imageUrl: "img/cities/Daejeon.jpg",
        region: "Daejeon",
    },
    {
        title: "GUIDES IN ULSAN",
        desc: "울산 지역의 가이드",
        imageUrl: "img/cities/Ulsan.jpg",
        region: "Ulsan",
    },
    {
        title: "GUIDES IN SEJONG",
        desc: "세종 지역의 가이드",
        imageUrl: "img/cities/Sejong.jpg",
        region: "Sejong",
    },
    {
        title: "GUIDES IN JEJU",
        desc: "제주 지역의 가이드",
        imageUrl: "img/cities/Jeju.jpg",
        region: "Jeju",
    },
    {
        title: "GUIDES IN GYEONSANGNAM-DO",
        desc: "경남 지역의 가이드",
        imageUrl: "img/cities/SouthGyeongsang.jpg",
        region: "SouthGyeongsang",
    },
    {
        title: "GUIDES IN GYEONSANGBUK-DO",
        desc: "경북 지역의 가이드",
        imageUrl: "img/cities/NorthGyeongsang.jpg",
        region: "NorthGyeongsang",
    },
    {
        title: "GUIDES IN JEOLLANAM-DO",
        desc: "전남 지역의 가이드",
        imageUrl: "img/cities/SouthJeolla.jpg",
        region: "SouthJeolla",
    },
    {
        title: "GUIDES IN JEOLLABUK-DO",
        desc: "전북 지역의 가이드",
        imageUrl: "img/cities/NorthJeolla.jpg",
        region: "NorthJeolla",
    },
    {
        title: "GUIDES IN CHUNGCHEONGNAM-DO",
        desc: "충남 지역의 가이드",
        imageUrl: "img/cities/SouthChungcheong.jpg",
        region: "SouthChungcheong",
    },
    {
        title: "GUIDES IN CHUNGCHEONGBUK-DO",
        desc: "충북 지역의 가이드",
        imageUrl: "img/cities/NorthChungcheong.jpg",
        region: "NorthChungcheong",
    },
    {
        title: "GUIDES IN GANGWON-DO",
        desc: "강원 지역의 가이드",
        imageUrl: "img/cities/Gangwon.jpg",
        region: "Gangwon",
    },
    {
        title: "GUIDES IN GYEONGGI-DO",
        desc: "경기 지역의 가이드",
        imageUrl: "img/cities/Gyeonggi.jpg",
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

    // koreaHook
    // selectedGlobalRegion : 현재 선택중인 지역
    // selectGlobalRegion : 지역 선택 함수
    const koreaHook = useGlobalKoreaMap();
    const { selectedGlobalRegion, onClick: selectGlobalRegion } = koreaHook;

    const ItemContainer = useRef<HTMLDivElement>(null);

    return (
        <>
            {width <= 1025 ? (
                <motion.div
                    ref={ItemContainer}
                    className="slider__ShortSliderContainer"
                >
                    <motion.div
                        drag="x"
                        dragConstraints={ItemContainer}
                        className="slider__ShortSliderContentArea"
                    >
                        {localGuideData.map((i) => (
                            <LocalGuideSliderItem
                                item={i}
                                region={selectedGlobalRegion}
                                onSelectRegion={selectGlobalRegion}
                                selectedRegion={i.region}
                            />
                        ))}
                    </motion.div>
                </motion.div>
            ) : (
                <Section>
                    <MultiGuideCarousel
                        items={localGuideData}
                        region={selectedGlobalRegion}
                        onSelectRegion={selectGlobalRegion}
                    />
                </Section>
            )}
        </>
    );
};

export default LocalGuideSlider;
