import { isEmpty, JDalign } from "@janda-com/front";
import { useRouter } from "next/router";
import React from "react";
import { AppContext } from "../../context/context";
import { useProductList } from "../../hook/useProduct";
import { Locales } from "../../types/const";
import { groupProductMap } from "../../utils/categoryMap";
import { ProductViewCards } from "./ProductViewCards";
import { ProductViewsLineHeader } from "./ProductViewsLineHeader";

// 베스트 상품
// 코리아가이드 추천상품
//
// 상품전시
function ProductsGroupRenders() {
    const { groupsNonIndex, l } = React.useContext(AppContext);

    const evneryGroupProducts = groupsNonIndex?.flatMap(
        (group) => group.members
    );
    console.log(evneryGroupProducts);
    const { items: products } = useProductList({
        initialFilter: {
            _id__in: evneryGroupProducts,
        },
        fixingFilter: {
            _id__in: evneryGroupProducts,
        },
    });

    const gropsWithProducts = groupProductMap(products, groupsNonIndex || []);
    const filterd = gropsWithProducts.filter((gp) => !isEmpty(gp.products));
    const router = useRouter();
    const { locale } = useRouter();

    return (
        <div>
            {filterd.map((gp, index) => (
                <JDalign mb="largest" key={gp._id}>
                    <ProductViewsLineHeader
                        title={l(gp.label)}
                        description={l(gp.desc)}
                        onSeeMore={() => {
                            if (index == 0) {
                                router.push(
                                    `/product/popularTour?title=${gp.label[locale as Locales]}`
                                );
                            } else {
                                router.push(
                                    `/product/localTour?title=${gp.label[locale as Locales]}`
                                );
                            }
                        }}
                    />
                    <ProductViewCards products={gp.products} />
                </JDalign>
            ))}
        </div>
    );
};

export default React.memo(ProductsGroupRenders);