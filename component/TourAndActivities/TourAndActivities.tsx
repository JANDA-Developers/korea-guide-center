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

const TourAndActivities = () => {
    return (
        <>
            <div>
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
            </div>
            <RegionSlider />
            <TourSlider
                queryParam={{
                    initialSort: [_ProductSort.rating__desc],
                }}
            />
        </>
    );
};

export default TourAndActivities;
