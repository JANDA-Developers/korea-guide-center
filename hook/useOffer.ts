import { getRefetch } from "@janda-com/front";
import {
    OFFER_CREATE,
    OFFER_UPDATE,
    OFFER_DELETE,
    OFFER_FIND_BY_ID,
    OFFER_LIST,
    OFFER_SEND,
} from "../apollo/gql/offer";
import { ME } from "../apollo/gql/user";
import {
    offerCreate,
    offerCreateVariables,
    offerUpdate,
    offerUpdateVariables,
    offerList_OfferList_items,
    offerDelete,
    offerDeleteVariables,
    offerFindById,
    offerFindByIdVariables,
    offerFindById_OfferFindById,
    offerList,
    offerListVariables,
    _OfferFilter,
    _OfferSort,
    offerSend,
    offerSendVariables,
} from "../types/api";
import {
    generateFindQuery,
    generateListQueryHook,
    generateMutationHook,
} from "../utils/query";

export const useOfferFindById = generateFindQuery<
    offerFindById,
    offerFindByIdVariables,
    offerFindById_OfferFindById
>("OfferId", OFFER_FIND_BY_ID);
export const useOfferList = generateListQueryHook<
    _OfferFilter,
    _OfferSort,
    offerList,
    offerListVariables,
    offerList_OfferList_items
>(OFFER_LIST, { initialSort: [_OfferSort.createdAt__desc] });
export const useOfferCreate = generateMutationHook<
    offerCreate,
    offerCreateVariables
>(OFFER_CREATE, { ...getRefetch(OFFER_LIST, ME) });
export const useOfferDelete = generateMutationHook<
    offerDelete,
    offerDeleteVariables
>(OFFER_DELETE, { ...getRefetch(OFFER_LIST) });
export const useOfferUpdate = generateMutationHook<
    offerUpdate,
    offerUpdateVariables
>(OFFER_UPDATE, { ...getRefetch(OFFER_LIST) });
export const useOfferSend = generateMutationHook<offerSend, offerSendVariables>(
    OFFER_SEND
);
