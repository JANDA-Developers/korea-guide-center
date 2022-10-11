import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { Paths } from "../../pages/index[depre]";
import { motion } from "framer-motion";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
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
const MultiTourCarousel = ({ deviceType, items }: any) => {
    const { s, l } = useContext(AppContext);
    const priceToString = (price: number) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

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
            itemClass="px-2"
            containerClass="w-10/12 py-4"
        >
            {items.map((i: any) => {
                return (
                    <motion.div
                        variants={SliderVariants}
                        whileHover="hover"
                        className="slider__LongSliderItems"
                        onClick={() => {
                            location.href =
                                Paths.productDetailView + "/" + i._id;
                        }}
                    >
                        <div
                            className="slider__TourSliderItemImage"
                            style={{
                                backgroundImage: `url(${i.thumbNail?.uri})`,
                            }}
                        />
                        <div className="slider__TourSliderItemTextAndDesc">
                            <h6 className="slider__TourSliderItemTitle">
                                {l(i.title).length >= 14
                                    ? l(i.title).slice(0, 12) + "..."
                                    : l(i.title)}
                            </h6>
                            <p>
                                {l(i.shortDecsription).length >= 40
                                    ? l(i.shortDecsription).slice(0, 40) + "..."
                                    : l(i.shortDecsription)}
                            </p>
                        </div>
                        <div className="slider__TourSliderItemPriceAndBooking">
                            <h6 className="slider__TourSliderItemPrice">
                                {priceToString(i.priceAdult!)}
                            </h6>
                            <button className="slider__TourSliderItemBookingButton">
                                <span>{s("AboutAndSchedule")}</span>
                            </button>
                        </div>
                    </motion.div>
                );
            })}
        </Carousel>
    );
};

export default MultiTourCarousel;
