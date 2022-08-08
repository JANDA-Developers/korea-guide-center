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
import RightArrowIcon from "../../icons/RightArrowIcon";
import LeftArrowIcon from "../../icons/LeftArrowIcon";

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
    return (
        <div className="slider__sliderContainer">
            <div className="slider__LongSliderLeftArrowContainer">
                <button
                    className="slider__LongSliderLeftArrow"
                    onClick={onClickPrev}
                    style={{
                        display: index === 0 ? "none" : "block",
                    }}
                >
                    <LeftArrowIcon />
                </button>
            </div>
            <div className="slider__LongSliderContainer">
                <div className="slider__LongSliderContentArea">
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
                            <TourSliderItem
                                products={products}
                                offset={offset}
                                index={index}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
            <div className="slider__LongSliderRightArrowContainer">
                <button
                    onClick={onClickNext}
                    className="slider__LongSliderRightArrow"
                    style={{
                        display:
                            index === Math.ceil(products.length / offset) - 1
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

export default TourSlider;
