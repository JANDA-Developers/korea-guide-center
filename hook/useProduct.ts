import { getRefetch } from "@janda-com/front";
import {
    PRODUCT_CREATE,
    PRODUCT_UPDATE,
    PRODUCT_DELETE,
    PRODUCT_FIND_BY_ID,
    PRODUCT_LIST,
} from "../apollo/gql/product";
import { ME } from "../apollo/gql/user";
import {
    productCreate,
    productCreateVariables,
    productUpdate,
    productUpdateVariables,
    productList_ProductList_items,
    productDelete,
    productDeleteVariables,
    productFindById,
    productFindByIdVariables,
    productFindById_ProductFindById,
    productList,
    productListVariables,
    _ProductFilter,
    _ProductSort,
} from "../types/api";
import {
    generateFindQuery,
    generateListQueryHook,
    generateMutationHook,
} from "../utils/query";

export const useProductFindById = generateFindQuery<
    productFindById,
    productFindByIdVariables,
    productFindById_ProductFindById
>("productId", PRODUCT_FIND_BY_ID);
export const useProductList = generateListQueryHook<
    _ProductFilter,
    _ProductSort,
    productList,
    productListVariables,
    productList_ProductList_items
>(PRODUCT_LIST, { initialSort: [_ProductSort.createdAt__desc] });
export const useProductCreate = generateMutationHook<
    productCreate,
    productCreateVariables
>(PRODUCT_CREATE, { ...getRefetch(PRODUCT_LIST, PRODUCT_FIND_BY_ID) });
export const useProductDelete = generateMutationHook<
    productDelete,
    productDeleteVariables
>(PRODUCT_DELETE, { ...getRefetch(PRODUCT_LIST) });
export const useProductUpdate = generateMutationHook<
    productUpdate,
    productUpdateVariables
>(PRODUCT_UPDATE, { ...getRefetch(PRODUCT_LIST, PRODUCT_FIND_BY_ID) });
