import { useProductList } from "../../hook/useProduct";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { IProductViewCard } from "../productViewCard/ProductViewCard";
import {
    Fproduct,
    productList,
    productListVariables,
    productList_ProductList_items,
    _ProductFilter,
    _ProductSort,
} from "../../types/api";
import { TElements } from "../../types/interface";
import { ListInitOptions } from "../../hook/useListQuery";
import { genrateOption } from "../../utils/query";

interface IProp extends Partial<IProductViewCard> {
    align?: 1 | 2 | 3 | 4 | "auto" | "wrap";
    wrap?: boolean;
    products: productList_ProductList_items[];
    onClickProduct?: (product: Fproduct) => void;
    empty?: TElements;
}

interface IProductViewCardsWithApi extends Omit<IProp, "products"> {
    queryParam?: Partial<ListInitOptions<_ProductFilter, _ProductSort>>;
    queryControl?: genrateOption<productList, productListVariables>;
    Head?: TElements;
}

const PopularTour: React.FC<IProductViewCardsWithApi> = ({
    queryControl,
    queryParam,
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

    console.log(products);

    return <div></div>;
};

export default PopularTour;
