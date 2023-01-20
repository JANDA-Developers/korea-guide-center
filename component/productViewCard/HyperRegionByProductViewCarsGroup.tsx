import { JDalign } from "@janda-com/front";
import { useRouter } from "next/router";
import React from "react";
import { Empty } from "../../atom/Empty";
import { AppContext } from "../../context/context";
import { useProductList } from "../../hook/useProduct";
import { Locales, MapRegionKr } from "../../types/const";
import { mapRegion } from "../koreaMap/KoreaData";
import { ProductViewCards } from "./ProductViewCards";
import { ProductViewsLineHeader } from "./ProductViewsLineHeader";

interface IHyperProductGroupProp {
    hyper: string;
}

function HyperRegionByProductViewCarsGroupReact({ hyper }: IHyperProductGroupProp) {
    const { locale } = useRouter();
    const { commonProductFilter, s } = React.useContext(AppContext);
    const { items: products } = useProductList({
        fixingFilter: {
            region_hyper__eq: hyper,
            ...commonProductFilter,
        },
    });

    const isKr = locale === Locales.ko;

    return (
        <JDalign mb>
            <ProductViewsLineHeader
                title={
                    (isKr ? MapRegionKr[hyper as mapRegion] : hyper) +
                    " " +
                    s("regionLineTitle")
                }
                description={s("regionLineDesc")}
            />
            <ProductViewCards
                empty={<Empty msg={s("noProductInArea")} />}
                products={products}
            />
        </JDalign>
    );
};

export default React.memo(HyperRegionByProductViewCarsGroupReact);  