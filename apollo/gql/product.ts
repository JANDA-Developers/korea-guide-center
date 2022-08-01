import { gql } from "@apollo/client";
import { F_PRODUCT } from "./fragment/product";
import { F_PAGEINFO, F_USERERROR } from "./fragment/shared";

export const PRODUCT_UPDATE = gql`
    mutation productUpdate($input: ProductInput!, $ProductId: ObjectId!) {
        ProductUpdate(ProductId: $ProductId, input: $input) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const PRODUCT_CREATE = gql`
    mutation productCreate($input: ProductInput!) {
        ProductCreate(input: $input) {
            ok
            error {
                ...FuserError
            }
            data {
                ...Fproduct
            }
        }
    }
    ${F_PRODUCT}
    ${F_USERERROR}
`;

export const AVAIL_PRODUCT_DATE_LIST = gql`
    query availDateProductList($filter: _ProductFilter) {
        AvailDateProductList(filter: $filter)
    }
`;

export const PRODUCT_DELETE = gql`
    mutation productDelete($productId: ObjectId!) {
        ProductDelete(ProductId: $productId) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const PRODUCT_LIST = gql`
    query productList(
        $sort: [_ProductSort!]
        $filter: _ProductFilter
        $pagingInput: OffsetPagingInput!
    ) {
        ProductList(sort: $sort, pagingInput: $pagingInput, filter: $filter) {
            pageInfo {
                ...FoffsetPagingInfo
            }
            items {
                ...Fproduct
            }
        }
    }
    ${F_PAGEINFO}
    ${F_PRODUCT}
`;

export const PRODUCT_FIND_BY_ID = gql`
    query productFindById($productId: ObjectId!) {
        ProductFindById(ProductId: $productId) {
            ...Fproduct
        }
    }
    ${F_PRODUCT}
`;
