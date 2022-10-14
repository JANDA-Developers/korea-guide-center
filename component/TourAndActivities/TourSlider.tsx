import { useProductList } from "../../hook/useProduct";
import { AppContext } from "../../context/context";
import { IProductViewCard } from "../productViewCard/ProductViewCard";
import { useState, useContext, useRef } from "react";
import {
    Fproduct,
    productList,
    productListVariables,
    productList_ProductList_items,
    _ProductFilter,
    _ProductSort,
} from "../../types/api";
import { motion } from "framer-motion";
import { useWindowSize } from "usehooks-ts";
import { TElements } from "../../types/interface";
import { ListInitOptions } from "../../hook/useListQuery";
import { genrateOption } from "../../utils/query";
import { Paths } from "../../pages/index[depre]";
import Section from "../MultiCarousel/Section";
import MultiTourCarousel from "../MultiCarousel/MuiltTourCarousel";
import { isEmpty } from "@janda-com/front";

interface IProp extends Partial<IProductViewCard> {
    align?: 1 | 2 | 3 | 4 | "auto" | "wrap";
    wrap?: boolean;
    products: productList_ProductList_items[];
    onClickProduct?: (product: Fproduct) => void;
    empty?: TElements;
}

interface IProductViewCardsWithApi extends Omit<IProp, "products"> {
    queryParam?: Partial<ListInitOptions<_ProductFilter, _ProductSort>>;
    queryControl?: genrateOption<productList, productListVariables>;
    Head?: TElements;
}

// scss/page/index.scss 파일에서 css 작업함

const offset = 4;

const TourSlider: React.FC<IProductViewCardsWithApi> = ({
    queryControl,
    queryParam,
    Head,
    ...props
}) => {
    const { s, l } = useContext(AppContext);
    const priceToString = (price: number) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    const { commonProductFilter } = useContext(AppContext);

    const { items: products } = useProductList(
        {
            initialViewCount: 8,
            ...queryParam,
            fixingFilter: {
                ...queryParam?.fixingFilter,
                ...commonProductFilter,
            },
        },
        queryControl
    );

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
        const maxIndex = Math.ceil(products.length / offset) - 1;
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

    const SliderVariants = {
        hover: {
            y: -5,
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            cursor: "pointer",
        },
    };

    const ItemContainer = useRef<HTMLDivElement>(null);

    if (isEmpty(products)) return null;
    return (
        <>
            {width <= 1025 ? (
                <motion.div
                    ref={ItemContainer}
                    className="slider__LongSliderContainer"
                >
                    <motion.div
                        drag="x"
                        dragConstraints={ItemContainer}
                        className="slider__LongSliderContentArea"
                    >
                        {products.map((i) => (
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
                                        {l(i.title).length >= 14
                                            ? l(i.title).slice(0, 12) + "..."
                                            : l(i.title)}
                                    </h6>
                                    <p>
                                        {l(i.shortDecsription).length >= 30
                                            ? l(i.shortDecsription).slice(
                                                  0,
                                                  30
                                              ) + "..."
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
                        ))}
                    </motion.div>
                </motion.div>
            ) : (
                <Section>
                    <MultiTourCarousel items={products} />
                </Section>
            )}
        </>
    );
};

export default TourSlider;
