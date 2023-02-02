import React, { useContext } from "react";
import NewestTourTabItem from "./NewestTourTabItem";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });
import { NewsProductList } from "../../../productViewCard/ProductViewCards";
import { AppContext } from "../../../../context/context";
import { useProductList } from "../../../../hook/useProduct";
import { isEmpty, JDicon } from "@janda-com/front";
import { useRouter } from "next/router";
import { searchPageQueryGenerate } from "../../../../pages/cities/search";
import { _ProductSort } from "../../../../types/api";

const options = {
    margin: 40,
    items: 4,
    dots: false,
    nav: true,
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
            margin: 200,
        },
        300: {
            items: 2,
            margin: 250,
        },
        400: {
            items: 2,
            margin: 200,
        },
        560: {
            items: 2,
            margin: -100,
        },
        600: {
            items: 2,
            margin: 5,
        },
        688: {
            items: 2,
            margin: -100,
        },
        700: {
            items: 2,
            margin: -200,
        },
        800: {
            items: 3,
            margin: 20,
        },
        1024: {
            items: 3,
            margin: -100,
        },
        1280: {
            items: 4,
            margin: -50,
        },
        1400: {
            items: 4,
        },
    },
};

// id는 임시임 나중에 코리아 가이드에 적용할 때 신경 쓸 것
const NewestTourTab = () => {
    const router = useRouter();
    const { s, l, commonProductFilter } = useContext(AppContext);

    const { items: products } = useProductList({
        fixingFilter: commonProductFilter,
        initialViewCount: 20,
        ...NewsProductList.queryParam,
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
                        _id={item._id}
                        title={item?.title!}
                        thumbNailUrl={item.thumbNail?.uri!}
                        description={item.shortDecsription!}
                        price={item.priceAdult!}
                        category={l(item.category?.label!)}
                        regionLabel={l(item.region?.label!)}
                    />
                );
            })}
            <div
                className="private-custom"
                style={{
                    cursor: "pointer",
                }}
                onClick={() => {
                    router.push(
                        searchPageQueryGenerate({
                            sort: [
                                _ProductSort.rating__desc,
                                _ProductSort.createdAt__desc,
                            ],
                        })
                    );
                }}
            >
                <div className="content">
                    <div className="title">
                        투어 더보기 <JDicon size="normal" icon="arrowRight" />
                    </div>
                </div>
            </div>
        </OwlCarousel>
    );
};

export default React.memo(NewestTourTab);
