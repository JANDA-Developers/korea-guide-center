import { productList_ProductList_items } from "../../types/api";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { Paths } from "../../pages/index[depre]";
import { motion } from "framer-motion";

interface ITourSliderItemProps {
    products: productList_ProductList_items[];
    offset: number;
    index: number;
}

const TourSliderItem = ({ products, offset, index }: ITourSliderItemProps) => {
    const { l, s } = useContext(AppContext);
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
        <>
            {products
                .slice(offset * index, offset * index + offset)
                .map((i, index) => {
                    return (
                        <motion.div
                            className="slider__LongSliderItems"
                            variants={SliderVariants}
                            whileHover="hover"
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
                                    {l(i.title)}
                                </h6>
                                <p>
                                    {l(i.shortDecsription).length >= 40
                                        ? l(i.shortDecsription).slice(0, 40) +
                                          "..."
                                        : l(i.shortDecsription)}
                                </p>
                            </div>
                            <div className="slider__TourSliderItemPriceAndBooking">
                                <h6 className="slider__TourSliderItemPrice">
                                    {priceToString(i.priceAdult!)}
                                </h6>
                                <button className="slider__TourSliderItemBookingButton">
                                    <span>정보 & 예약하기</span>
                                </button>
                            </div>
                        </motion.div>
                    );
                })}
        </>
    );
};

export default TourSliderItem;
