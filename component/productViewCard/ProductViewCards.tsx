import { isEmpty, JDalign } from "@janda-com/front";
import { TElements } from "@janda-com/front/dist/types/interface";
import dynamic from "next/dynamic";
import React, { useLayoutEffect } from "react";
import { useState } from "react";
import { OwlCarouselProps } from "react-owl-carousel";
import { useResizeDetector } from "react-resize-detector";
import { useS4 } from "../../hook/useUniqkey";
import {
    Fproduct,
    productList_ProductList_items,
    ProductStatus,
    _ProductFilter,
    _ProductSort,
} from "../../types/api";
import { AnimationOnScroll } from "../scrollAnimation/ScrollAnimation";
import TourCardItem from "../TourCard/TourCardItem";
import {
    IProductViewCard,
} from "./ProductViewCard";
import { IProductViewCardsWithApiProps } from "./ProductViewCardsWithApi";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

export interface IProductViewCardsProp extends Partial<IProductViewCard> {
    products: productList_ProductList_items[];
    onClickProduct?: (product: Fproduct) => void;
    empty?: TElements;
    width?: number;
    margin?: number;
    count?: number;
}

export const ProductViewCards: React.FunctionComponent<IProductViewCardsProp> = ({
    products,
    empty = null,
    onClickProduct,
    width = 310,
    margin = 30,
    count = 4,
    ...props
}) => {
    const uniqKey = useS4();

    const toursRef = React.useRef<HTMLDivElement>(null);

    const maxWidth = React.useMemo(
        () => toursRef.current?.clientWidth ?? window?.innerWidth ?? (width + margin),
        [toursRef.current, width, margin]
    );

    const calcItemCount = React.useCallback(() => {
        return Math.min(Math.max(Math.ceil(maxWidth / (width + margin)), 1), count);
    }, [maxWidth, products.length, count, margin, width]);

    const [itemCount, setItemCount] = useState<number>(calcItemCount());

    React.useCallback(() => {
        setItemCount(calcItemCount());
    }, [width]);

    React.useEffect(() => {
        const handleResize = () => {
            setItemCount(calcItemCount());
        }
        window?.addEventListener("resize", handleResize);
        return () => {
            window?.removeEventListener("resize", handleResize);
        }
    }, [calcItemCount]);

    const options = React.useMemo<Partial<OwlCarouselProps>>(() => {
        return ({
            margin: margin,
            items: itemCount,
            dots: false,
            nav: true,
            width: width,
            navText: [
                `<span><svg width="50px" height="100px" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
          </svg></span>`,
                `<span><svg width="50px" height="100px" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
          </svg></span>`,
            ],
        })
    }, [width, itemCount])


    // 카드
    return (
        <div ref={toursRef} className="bloc-slider-tours grouped-tours">
            <AnimationOnScroll
                animateOnce
                animateIn="animate__fadeIn"
                className="content-wrapper bloc-medium"
            >
                <OwlCarousel
                    id="tab-AllTours"
                    className="owl-theme owl-tours owl-opacify active"
                    {...options}
                >
                    {isEmpty(products) && (
                        <div className="ProductViewCards__empty">{empty}</div>
                    )}
                    {products.map((product) => (
                        <TourCardItem
                            onClick={() => {
                                onClickProduct?.(product);
                            }}
                            key={product._id + uniqKey}
                            {...props}
                            product={product}
                        />
                    ))}
                </OwlCarousel>
            </AnimationOnScroll>
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