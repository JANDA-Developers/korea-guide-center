import React, { useContext } from "react";
import NewestTourTabItem from "./NewestTourTabItem";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });
import { NewsProductList } from "../../../productViewCard/ProductViewCards";
import { AppContext } from "../../../../context/context";
import { useProductList } from "../../../../hook/useProduct";
import { isEmpty } from "@janda-com/front";

const options = {
    stageOuterClass: "owl-stage-outer owl-height",
    responsiveClass: true,
    items: 4,
    dots: false,
    nav: true,
    navText: [
        `<span><svg width="100px" height="100px" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
  </svg></span>`,
        `<span><svg width="100px" height="100px" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
  </svg></span>`,
    ],
    responsive: {
        0: {
            items: 1,
            margin: -100,
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

// id는 임시임 나중에 코리아 가이드에 적용할 때 신경 쓸 것
const NewestTourTab = () => {
    const { s, l, commonProductFilter } = useContext(AppContext);

    const { items: products } = useProductList({
        initialViewCount: 8,
        ...NewsProductList.queryParam,
        fixingFilter: {
            ...NewsProductList.queryParam?.fixingFilter,
            ...commonProductFilter,
        },
    });

    if (isEmpty(products)) return null;
    return (
        <OwlCarousel
            id="tab-AllTours"
            className="owl-theme owl-tours owl-opacify active"
            {...options}
        >
            {products.map((item, index) => {
                return (
                    <NewestTourTabItem
                        key={item._id!}
                        title={item?.title!}
                        thumbNailUrl={item.thumbNail?.uri!}
                        description={item.shortDecsription!}
                        price={item.priceAdult!}
                    />
                );
            })}
        </OwlCarousel>
    );
};

export default React.memo(NewestTourTab);
