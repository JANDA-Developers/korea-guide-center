import { Flex, isEmpty, JDalign } from "@janda-com/front";
import { TElements } from "@janda-com/front/dist/types/interface";
import classNames from "classnames";
import dynamic from "next/dynamic";
import React, { useContext, useLayoutEffect, useState } from "react";
import { OwlCarouselProps } from "react-owl-carousel";
import { useResizeDetector } from "react-resize-detector";
import { AppContext } from "../../context/context";
import { ListInitOptions } from "../../hook/useListQuery";
import { useProductList } from "../../hook/useProduct";
import { useS4 } from "../../hook/useUniqkey";
import {
    Fproduct,
    productList,
    productListVariables,
    productList_ProductList_items,
    ProductStatus,
    _ProductFilter,
    _ProductSort,
} from "../../types/api";
import { genrateOption } from "../../utils/query";

import { AnimationOnScroll } from "../scrollAnimation/ScrollAnimation";
import TourCardItem from "../TourCard/TourCardItem";
import {
    IProductViewCard,
    ProductViewCard,
    ProductViewCard2,
} from "./ProductViewCard";
import { IProductViewCardsWithApiProps } from "./ProductViewCardsWithApi";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

interface IProductViewCardsWithApi extends Omit<IProp, "products"> {
    queryParam?: Partial<ListInitOptions<_ProductFilter, _ProductSort>>;
    queryControl?: genrateOption<productList, productListVariables>;
    Head?: TElements;
}

interface IProp extends Partial<IProductViewCard> {
    align?: 1 | 2 | 3 | 4 | "auto" | "wrap";
    wrap?: boolean;
    products: productList_ProductList_items[];
    onClickProduct?: (product: Fproduct) => void;
    empty?: TElements;
}

export interface IProductViewCardsProp extends Partial<IProductViewCard> {
    products: productList_ProductList_items[];
    onClickProduct?: (product: Fproduct) => void;
    align?: string;
    empty?: TElements;
    width?: number;
    margin?: number;
    count?: number;
    setPaddingZero?: boolean;
    setMarginZero?: boolean;
}

export const ProductViewCards: React.FunctionComponent<IProp> = ({
    products,
    empty = null,
    onClickProduct,
    wrap,
    // width = 310,
    // margin = 30,
    // count = 4,
    setMarginZero,
    setPaddingZero,
    align = "auto",
    ...props
}) => {
    const uniqKey = useS4();

    const toursRef = React.useRef<HTMLDivElement>(null);

    const [_align, _setAlign] = useState<number | null>(null);
    const { ref, width, height } = useResizeDetector();
    const Align = _align || align;

    const className = classNames("ProductViewCards", undefined, {
        "ProductViewCards--1": Align === 1,
        "ProductViewCards--2": Align === 2,
        "ProductViewCards--3": Align === 3,
        "ProductViewCards--4": Align === 4,
        "ProductViewCards--wrap": Align === "wrap",
        "ProductViewCards--empty": isEmpty(products),
    });

    // const maxWidth = React.useMemo(
    //     () =>
    //         toursRef.current?.clientWidth ??
    //         window?.innerWidth ??
    //         width + margin,
    //     [toursRef.current, width, margin]
    // );

    // const calcItemCount = React.useCallback(() => {
    //     return Math.min(
    //         Math.max(Math.ceil(maxWidth / (width + margin)), 1),
    //         count
    //     );
    // }, [maxWidth, products.length, count, margin, width]);

    // const [itemCount, setItemCount] = useState<number>(calcItemCount());

    // React.useCallback(() => {
    //     setItemCount(calcItemCount());
    // }, [width]);

    // React.useEffect(() => {
    //     const handleResize = () => {
    //         setItemCount(calcItemCount());
    //     };
    //     window?.addEventListener("resize", handleResize);
    //     return () => {
    //         window?.removeEventListener("resize", handleResize);
    //     };
    // }, [calcItemCount]);

    const options = React.useMemo<Partial<OwlCarouselProps>>(() => {
        return {
            stageOuterClass: "owl-stage-outer owl-height",
            loadedClass: "min-zero",
            responsiveClass: true,
            items: 4,
            dots: false,
            nav: false,
            navText: [
                `<span><svg width="50px" height="100px" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
          </svg></span>`,
                `<span><svg width="50px" height="100px" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
          </svg></span>`,
            ],
            responsive: {
                0: {
                    items: 2,
                    margin: 10,
                },
                300: {
                    items: 2,
                    margin: 10,
                },
                400: {
                    items: 2,
                    margin: 10,
                },
                560: {
                    items: 2,
                },
                800: {
                    items: 3,
                },
                1200: {
                    items: 4,
                },
            },
        };
    }, []);

    // 카드
    return (
        <div
            ref={toursRef}
            className="bloc-slider-tours grouped-tours"
            // style={{
            //     padding: `${setPaddingZero && "0px"}`,
            // }}
        >
            <AnimationOnScroll
                animateOnce
                animateIn="animate__fadeIn"
                // className="content-wrapper bloc-medium"
                // style={{
                //     margin: `${setMarginZero && "0px"}`,
                // }}
            >
                <Flex oneone className={className} wrap={wrap}>
                    {isEmpty(products) && (
                        <div className="ProductViewCards__empty">{empty}</div>
                    )}
                    <OwlCarousel
                        id="tab-AllTours"
                        className="owl-theme owl-tours owl-opacify active"
                        {...options}
                    >
                        {products.map((product) => (
                            <ProductViewCard
                                onClick={() => {
                                    onClickProduct?.(product);
                                }}
                                key={product._id + uniqKey}
                                className="ProductViewCards__card"
                                mr
                                {...props}
                                product={product}
                            />
                        ))}
                    </OwlCarousel>
                </Flex>
            </AnimationOnScroll>
        </div>
    );
};

export const ProductViewCardsForMorePage: React.FunctionComponent<
    IProductViewCardsProp
> = ({
    products,
    empty = null,
    onClickProduct,
    margin = 30,
    count = 4,
    setMarginZero,
    setPaddingZero,
    align = "auto",
    ...props
}) => {
    const uniqKey = useS4();

    const toursRef = React.useRef<HTMLDivElement>(null);

    return (
        <div
            ref={toursRef}
            className="bloc-slider-tours grouped-tours"
            style={{
                padding: `${setPaddingZero && "0px"}`,
            }}
        >
            <AnimationOnScroll
                animateOnce
                animateIn="animate__fadeIn"
                className="content-wrapper bloc-medium"
                style={{
                    margin: `${setMarginZero && "0px"}`,
                }}
            >
                <div
                    id="tab-AllTours"
                    className="owl-theme owl-tours owl-opacify active"
                    style={{
                        overflow: "hidden",
                    }}
                >
                    <div className="owl-stage-outer owl-height">
                        <div className="owl-stage">
                            {isEmpty(products) && (
                                <div className="ProductViewCards__empty">
                                    {empty}
                                </div>
                            )}
                            {products.map((product) => (
                                <div className="owl-item active">
                                    <TourCardItem
                                        onClick={() => {
                                            onClickProduct?.(product);
                                        }}
                                        key={product._id + uniqKey}
                                        {...props}
                                        product={product}
                                        setMarginRight="10px"
                                        setPaddingVertical="30px 0"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>{" "}
                //
            </AnimationOnScroll>
        </div>
    );
};

export const ProductViewCards2: React.FC<IProp> = ({
    products,
    align = "auto",
    wrap,
    empty = null,
    onClickProduct,
    ...props
}) => {
    const uniqKey = useS4();
    const [_align, _setAlign] = useState<number | null>(null);
    const { ref, width, height } = useResizeDetector();
    const Align = _align || align;
    const className = classNames("ProductViewCards", undefined, {
        "ProductViewCards--1": Align === 1,
        "ProductViewCards--2": Align === 2,
        "ProductViewCards--3": Align === 3,
        "ProductViewCards--4": Align === 4,
        "ProductViewCards--wrap": Align === "wrap",
        "ProductViewCards--empty": isEmpty(products),
    });

    useLayoutEffect(() => {
        if (align === "auto" || align === "wrap") {
            if (width) {
                if (width < 400) {
                    _setAlign(2);
                } else if (width < 850) _setAlign(3);
                else {
                    _setAlign(4);
                }
            }
        }
    }, [width]);

    return (
        <div ref={ref}>
            <AnimationOnScroll animateOnce animateIn="animate__fadeIn">
                <Flex oneone className={className} wrap={wrap}>
                    {isEmpty(products) && (
                        <div className="ProductViewCards__empty">{empty}</div>
                    )}
                    {products.map((product) => (
                        <ProductViewCard
                            mb={wrap ? "normal" : undefined}
                            onClick={() => {
                                onClickProduct?.(product);
                            }}
                            key={product._id + uniqKey}
                            className="ProductViewCards__card"
                            mr
                            {...props}
                            product={product}
                        />
                    ))}
                    <JDalign
                        mr
                        className="ProductViewCards__card ProductViewCards__card--placeholder"
                    />
                    <JDalign
                        mr
                        className="ProductViewCards__card ProductViewCards__card--placeholder"
                    />
                    <JDalign
                        mr
                        className="ProductViewCards__card ProductViewCards__card--placeholder"
                    />
                </Flex>
            </AnimationOnScroll>
        </div>
    );
};

export const ProductViewCardsWithApi2: React.FC<IProductViewCardsWithApi> = ({
    queryControl,
    queryParam,
    Head,
    ...props
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

    if (isEmpty(products)) return null;
    return (
        <div>
            {Head}
            <ProductViewCards2 {...props} products={products} />
        </div>
    );
};

export const BestProductList: IProductViewCardsWithApiProps = {
    queryParam: {
        initialSort: [_ProductSort.rating__desc, _ProductSort.createdAt__desc],
        fixingFilter: {
            status__eq: ProductStatus.OPEN,
        },
    },
};

export const NewsProductList: IProductViewCardsWithApiProps = {
    queryParam: {
        initialSort: [_ProductSort.createdAt__desc],
    },
};
