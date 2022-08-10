import React from "react";
import TourSlider from "./TourSlider";
import RegionSlider from "./RegionSlider";
import {
    BestProductList,
    NewsProductList,
    ProductsGroupRenders,
    ProductViewCardsWithApi,
} from "../../component/productViewCard/ProductViewCards";
import {
    Fproduct,
    productList,
    productListVariables,
    productList_ProductList_items,
    _ProductFilter,
    _ProductSort,
} from "../../types/api";
import { JDcontainer, WindowSize } from "@janda-com/front";

const TourAndActivities = () => {
    const containerSize = WindowSize.full;
    return (
        <JDcontainer size={containerSize}>
            <div
                style={{
                    marginBottom: "50px",
                }}
            >
                <h1 className="tour__sectionTitle">
                    <span
                        style={{
                            color: "#D0242B",
                        }}
                    >
                        Tour&nbsp;
                    </span>
                    &&nbsp;
                    <span
                        style={{
                            color: "#D0242B",
                        }}
                    >
                        Activities
                    </span>
                </h1>
                <RegionSlider />
            </div>
            <div
                style={{
                    marginBottom: "50px",
                }}
            >
                <h1 className="tour__sectionTitle">
                    <span
                        style={{
                            color: "#d0242b",
                        }}
                    >
                        Popular
                    </span>{" "}
                    Tour
                </h1>
                <TourSlider
                    queryParam={{
                        initialSort: [_ProductSort.rating__desc],
                    }}
                />
            </div>
        </JDcontainer>
    );
};

export default TourAndActivities;
