import { getRefetch } from "@janda-com/front";
import {
    MODAL_CREATE,
    MODAL_UPDATE,
    MODAL_DELETE,
    MODAL_FIND_BY_ID,
    MODAL_FIND_BY_STORE_ID,
    SERVICE_MODAL_FIND,
    MODAL_LIST,
    MODAL_FIND_BY_PATH,
} from "../apollo/gql/modal";
import { ME } from "../apollo/gql/user";
import {
    modalCreate,
    modalCreateVariables,
    modalUpdate,
    modalUpdateVariables,
    modalDelete,
    modalDeleteVariables,
    modalFindById,
    modalFindByIdVariables,
    modalFindById_ModalFindById,
    modalFindByStoreId,
    modalFindByStoreIdVariables,
    serviceModalFind,
    serviceModalFind_ServiceModalFind,
    _ModalFilter,
    _ModalSort,
    modalList,
    modalList_ModalList_items,
    modalListVariables,
    modalFindByPath,
    modalFindByPathVariables,
    modalFindByPath_ModalFindByPath,
} from "../types/api";
import {
    generateFindQuery,
    generateListQueryHook,
    generateMutationHook,
    generateQueryHook,
} from "../utils/query";

export const useModalFindById = generateFindQuery<
    modalFindById,
    modalFindByIdVariables,
    modalFindById_ModalFindById
>("modalId", MODAL_FIND_BY_ID);

export const useModalFindByPath = generateFindQuery<
    modalFindByPath,
    modalFindByPathVariables,
    modalFindByPath_ModalFindByPath
>("path", MODAL_FIND_BY_PATH, { nextFetchPolicy: "cache-first" });
export const useModalFindByStoreId = generateFindQuery<
    modalFindByStoreId,
    modalFindByStoreIdVariables,
    modalFindById_ModalFindById
>("storeId", MODAL_FIND_BY_STORE_ID);
export const useServiceModalFind = generateQueryHook<
    serviceModalFind,
    serviceModalFind_ServiceModalFind,
    undefined
>(SERVICE_MODAL_FIND);
export const useModalCreate = generateMutationHook<
    modalCreate,
    modalCreateVariables
>(MODAL_CREATE, {
    ...getRefetch(MODAL_FIND_BY_ID, MODAL_FIND_BY_STORE_ID, MODAL_LIST),
});
export const useModalDelete = generateMutationHook<
    modalDelete,
    modalDeleteVariables
>(MODAL_DELETE, {
    ...getRefetch(MODAL_FIND_BY_ID, MODAL_FIND_BY_STORE_ID, MODAL_LIST),
});
export const useModalUpdate = generateMutationHook<
    modalUpdate,
    modalUpdateVariables
>(MODAL_UPDATE, {
    ...getRefetch(MODAL_FIND_BY_ID, MODAL_FIND_BY_STORE_ID, MODAL_LIST),
});
export const useModalList = generateListQueryHook<
    _ModalFilter,
    _ModalSort,
    modalList,
    modalListVariables,
    modalList_ModalList_items
>(MODAL_LIST);
