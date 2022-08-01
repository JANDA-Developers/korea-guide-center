import { getRefetch } from "@janda-com/front";
import { PRODUCT_FIND_BY_ID } from "../apollo/gql/product";
import {
    REVIEW_CREATE,
    REVIEW_UPDATE,
    REVIEW_DELETE,
    REVIEW_FIND_BY_ID,
    REVIEW_LIST,
} from "../apollo/gql/review";
import { ME } from "../apollo/gql/user";
import {
    reviewCreate,
    reviewCreateVariables,
    reviewUpdate,
    reviewUpdateVariables,
    reviewList_ReviewList_items,
    reviewDelete,
    reviewDeleteVariables,
    reviewFindById,
    reviewFindByIdVariables,
    reviewFindById_ReviewFindById,
    reviewList,
    reviewListVariables,
    _ReviewFilter,
    _ReviewSort,
} from "../types/api";
import {
    generateFindQuery,
    generateListQueryHook,
    generateMutationHook,
} from "../utils/query";

export const useReviewFindById = generateFindQuery<
    reviewFindById,
    reviewFindByIdVariables,
    reviewFindById_ReviewFindById
>("reviewId", REVIEW_FIND_BY_ID);
export const useReviewList = generateListQueryHook<
    _ReviewFilter,
    _ReviewSort,
    reviewList,
    reviewListVariables,
    reviewList_ReviewList_items
>(REVIEW_LIST, { initialSort: [_ReviewSort.createdAt__desc] });
export const useReviewCreate = generateMutationHook<
    reviewCreate,
    reviewCreateVariables
>(REVIEW_CREATE, { ...getRefetch(REVIEW_LIST, ME, PRODUCT_FIND_BY_ID) });
export const useReviewDelete = generateMutationHook<
    reviewDelete,
    reviewDeleteVariables
>(REVIEW_DELETE, { ...getRefetch(REVIEW_LIST) });
export const useReviewUpdate = generateMutationHook<
    reviewUpdate,
    reviewUpdateVariables
>(REVIEW_UPDATE, { ...getRefetch(REVIEW_LIST) });
