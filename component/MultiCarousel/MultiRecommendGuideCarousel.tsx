import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { Paths } from "../../pages/index[depre]";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        paritialVisibilityGutter: 60,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        paritialVisibilityGutter: 50,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        paritialVisibilityGutter: 30,
    },
};

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const MultiRecommendGuideCarousel = ({ deviceType, items }: any) => {
    const router = useRouter();
    const { s, l } = useContext(AppContext);

    const SliderVariants = {
        hover: {
            y: -5,
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            cursor: "pointer",
        },
    };

    return (
        <Carousel
            ssr
            partialVisbile
            deviceType={deviceType}
            responsive={responsive}
            itemClass="w-72 h-[32.875rem] mr-4 cursor-pointer p-2 !important"
        >
            {items.map((i: any) => {
                return (
                    <motion.div
                        className="slider__LongSliderItems w-72 h-[31.875rem] !important"
                        variants={SliderVariants}
                        whileHover="hover"
                        onClick={() => {
                            router.push(Paths.profile + "/" + i._id);
                        }}
                    >
                        <div
                            className="slider__GuideSliderItemImage"
                            style={{
                                backgroundImage: `url(${i.profileMediumImage?.uri})`,
                            }}
                        />
                        <div className="slider__GuideBadgeAndNameContainer">
                            <div className="slider__GuideBadge">{i.role}</div>
                            <span className="slider__GuideName">{i.name}</span>
                        </div>
                        <hr />
                        <div className="slider__GuideDesc">
                            {l(i.introduce).length > 90
                                ? l(i.introduce).slice(0, 90) + "..."
                                : l(i.introduce)}
                        </div>
                        <div className="slider__GuideCategoryContainer">
                            {i.guideCategory
                                ?.slice(0, 4)
                                .map((item: any, index: any) => {
                                    return (
                                        <span className="slider__GuideCategoryText">
                                            {l(item.label)}
                                            {index === 3 ? null : " · "}
                                        </span>
                                    );
                                })}
                        </div>
                    </motion.div>
                );
            })}
        </Carousel>
    );
};

export default MultiRecommendGuideCarousel;
