import { useProductList } from "../../hook/useProduct";
import { AppContext } from "../../context/context";
import { IProductViewCard } from "../productViewCard/ProductViewCard";
import { useState, useContext } from "react";
import {
    Fproduct,
    productList,
    productListVariables,
    productList_ProductList_items,
    _ProductFilter,
    _ProductSort,
} from "../../types/api";
import { motion, AnimatePresence } from "framer-motion";
import { useWindowSize } from "usehooks-ts";
import TourSliderItem from "./TourSliderItem";
import { TElements } from "../../types/interface";
import { ListInitOptions } from "../../hook/useListQuery";
import { genrateOption } from "../../utils/query";

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
}) => {
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

    console.log(products);

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
    return (
        <>
            <h1
                style={{
                    textAlign: "center",
                    fontWeight: "bold",
                }}
            >
                <span
                    style={{
                        color: "#d0242b",
                    }}
                >
                    Popular
                </span>{" "}
                Tour
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
                            products={products}
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
                                index ===
                                Math.ceil(products.length / offset) - 1
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
