import { isEmpty } from "@janda-com/front";
import React from "react";
import { AppContext } from "../../context/context";
import { ListInitOptions } from "../../hook/useListQuery";
import { useProductList } from "../../hook/useProduct";
import {
    productList,
    productListVariables,
    _ProductFilter,
    _ProductSort,
} from "../../types/api";
import { TElements } from "../../types/interface";
import { genrateOption } from "../../utils/query";
import {
    IProductViewCardsProp,
    ProductViewCards,
    ProductViewCardsForMorePage,
} from "./ProductViewCards";

export interface IProductViewCardsWithApiProps
    extends Omit<IProductViewCardsProp, "products"> {
    queryParam?: Partial<ListInitOptions<_ProductFilter, _ProductSort>>;
    queryControl?: genrateOption<productList, productListVariables>;
    Head?: TElements;
}

export const ProductViewCardsWithApi =
    React.memo<IProductViewCardsWithApiProps>(
        ({ queryControl, queryParam, Head, ...props }) => {
            // queryParam 받아서 그 쿼리에 맞는 데이터를 출력
            const { commonProductFilter } = React.useContext(AppContext);
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
                    <ProductViewCards
                        {...props}
                        products={products}
                        wrap
                        align={4}
                    />
                </div>
            );
        }
    );

export const ProductViewCardsWithApiForMorePage =
    React.memo<IProductViewCardsWithApiProps>(
        ({ queryControl, queryParam, Head, ...props }) => {
            // queryParam 받아서 그 쿼리에 맞는 데이터를 출력
            const { commonProductFilter } = React.useContext(AppContext);
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
                    <ProductViewCardsForMorePage
                        {...props}
                        products={products}
                    />
                </div>
            );
        }
    );
