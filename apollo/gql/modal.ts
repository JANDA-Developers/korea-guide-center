import { gql } from "@apollo/client";
import {
    F_COLLECTION_DATA_INTERFACE,
    F_FILE,
    F_PAGEINFO,
    F_USER,
    F_USERERROR,
} from "../gql/fragment/fragments";

export const F_MODAL = gql`
    fragment Fmodal on Modal {
        ...FcollectionDataInterface
        serviceModal
        storeId
        path
        style
        images {
            ...Ffile
        }
    }
    ${F_FILE}
    ${F_COLLECTION_DATA_INTERFACE}
`;

export const MODAL_UPDATE = gql`
    mutation modalUpdate($input: ModalInput!, $modalId: ObjectId!) {
        ModalUpdate(modalId: $modalId, input: $input) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const MODAL_CREATE = gql`
    mutation modalCreate($input: ModalInput!) {
        ModalCreate(input: $input) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const MODAL_DELETE = gql`
    mutation modalDelete($modalId: ObjectId!) {
        ModalDelete(modalId: $modalId) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const MODAL_FIND_BY_ID = gql`
    query modalFindById($modalId: ObjectId!) {
        ModalFindById(modalId: $modalId) {
            ...Fmodal
        }
    }
    ${F_MODAL}
`;

export const MODAL_FIND_BY_PATH = gql`
    query modalFindByPath($path: String!) {
        ModalFindByPath(path: $path) {
            ...Fmodal
        }
    }
    ${F_MODAL}
`;

export const MODAL_FIND_BY_STORE_ID = gql`
    query modalFindByStoreId($storeId: ObjectId!) {
        ModalFindByStoreId(storeId: $storeId) {
            ...Fmodal
        }
    }
    ${F_MODAL}
`;

export const MODAL_LIST = gql`
    query modalList(
        $sort: [_ModalSort!]
        $filter: _ModalFilter
        $pagingInput: OffsetPagingInput!
    ) {
        ModalList(sort: $sort, pagingInput: $pagingInput, filter: $filter) {
            pageInfo {
                ...FoffsetPagingInfo
            }
            items {
                ...Fmodal
            }
        }
    }
    ${F_FILE}
    ${F_MODAL}
    ${F_PAGEINFO}
`;

export const SERVICE_MODAL_FIND = gql`
    query serviceModalFind {
        ServiceModalFind {
            ...Fmodal
        }
    }
    ${F_MODAL}
`;
