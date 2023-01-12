import { Flex, isEmpty, JDalign } from "@janda-com/front";
import { TElements } from "@janda-com/front/dist/types/interface";
import classNames from "classnames";
import { useRouter } from "next/router";
import React, { useLayoutEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useResizeDetector } from "react-resize-detector";
import { Empty } from "../../atom/Empty";
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
import { Locales, MapRegionKr } from "../../types/const";
import { groupProductMap } from "../../utils/categoryMap";
import { genrateOption } from "../../utils/query";
import { mapRegion } from "../koreaMap/KoreaData";
import { AnimationOnScroll } from "../scrollAnimation/ScrollAnimation";
import {
    IProductViewCard,
    ProductViewCard,
    ProductViewCard2,
} from "./ProductViewCard";
import { ProductViewsLineHeader } from "./ProductViewsLineHeader";

interface IProp extends Partial<IProductViewCard> {
    align?: 1 | 2 | 3 | 4 | "auto" | "wrap";
    wrap?: boolean;
    products: productList_ProductList_items[];
    onClickProduct?: (product: Fproduct) => void;
    empty?: TElements;
}

export const ProductViewCards: React.FC<IProp> = ({
    products,
    align = "auto",
    wrap,
    empty = null,
    onClickProduct,
    ...props
}) => {
    console.log(products);
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
                <Flex
                    oneone
                    className={className}
                    wrap={wrap}
                    style={{ flexDirection: "column" }}
                >
                    {isEmpty(products) && (
                        <div className="ProductViewCards__empty">{empty}</div>
                    )}
                    {products.map((product) => (
                        <ProductViewCard2
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

interface IProductViewCardsWithApi extends Omit<IProp, "products"> {
    queryParam?: Partial<ListInitOptions<_ProductFilter, _ProductSort>>;
    queryControl?: genrateOption<productList, productListVariables>;
    Head?: TElements;
}

//
export const ProductViewCardsWithApi: React.FC<IProductViewCardsWithApi> = ({
    queryControl,
    queryParam,
    Head,
    ...props
}) => {
    // queryParam 받아서 그 쿼리에 맞는 데이터를 출력
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

    if (isEmpty(products)) return null;
    return (
        <div>
            {Head}
            <ProductViewCards {...props} products={products} />
        </div>
    );
};
//

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

export const PopularProductList: IProductViewCardsWithApi = {
    queryParam: {
        initialSort: [_ProductSort.reviewCount__desc],
        fixingFilter: {
            status__eq: ProductStatus.OPEN,
        },
    },
};

export const BestProductList: IProductViewCardsWithApi = {
    queryParam: {
        initialSort: [_ProductSort.rating__desc, _ProductSort.createdAt__desc],
        fixingFilter: {
            status__eq: ProductStatus.OPEN,
        },
    },
};

export const KPOPBestProductList: IProductViewCardsWithApi = {
    queryParam: {
        initialSort: [
            _ProductSort.rating__desc,
            _ProductSort.reviewCount__desc,
        ],
    },
};

export const regionIn = (regionId: string): _ProductFilter => ({
    region__id__eq: regionId,
});

export const NewsProductList: IProductViewCardsWithApi = {
    queryParam: {
        initialSort: [_ProductSort.createdAt__desc],
    },
};

// 베스트 상품
// 코리아가이드 추천상품
//

export const ProductsGroupRenders: React.FC = () => {
    const { groupsNonIndex, l } = useContext(AppContext);

    const evneryGroupProducts = groupsNonIndex?.flatMap(
        (group) => group.members
    );
    const { items: products } = useProductList({
        fixingFilter: {
            _id__in: evneryGroupProducts,
        },
    });

    const gropsWithProducts = groupProductMap(products, groupsNonIndex || []);
    const filterd = gropsWithProducts.filter((gp) => !isEmpty(gp.products));

    return (
        <div>
            {filterd.map((gp) => (
                <JDalign mb="largest" key={gp._id}>
                    <ProductViewsLineHeader
                        title={l(gp.label)}
                        description={l(gp.desc)}
                    />
                    <ProductViewCards products={gp.products} />
                </JDalign>
            ))}
        </div>
    );
};

interface IHyperProductGroupProp {
    hyper: string;
}

export const HyperRegionByProductViewCarsGroup: React.FC<
    IHyperProductGroupProp
> = ({ hyper }) => {
    const { locale } = useRouter();
    const { groups, l, commonProductFilter, s } = useContext(AppContext);
    const { items: products } = useProductList({
        fixingFilter: {
            region_hyper__eq: hyper,
            ...commonProductFilter,
        },
    });

    const isKr = locale === Locales.ko;

    const gropsWithProducts = groupProductMap(products, groups || []);

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
