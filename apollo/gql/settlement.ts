import { gql } from "@apollo/client";
import { F_PAGEINFO, F_USERERROR } from "./fragment/fragments";
import { F_SETTLEMENT_HISTORY } from "./fragment/settlement";

export const SETTLEMENT_CREATE = gql`
    mutation settlementCreate(
        $input: SettlementHistoryInput!
        $tourId: ObjectId!
    ) {
        SettlementCreate(input: $input, tourId: $tourId) {
            ok
            error {
                ...FuserError
            }
            data {
                ...FsettlementHistory
            }
        }
    }
    ${F_USERERROR}
    ${F_SETTLEMENT_HISTORY}
`;

export const SETTLEMENT_COMPLETE = gql`
    mutation settlementComplete(
        $settlementId: ObjectId!
        $input: SettlementHistoryInput!
    ) {
        SettlementComplete(input: $input, settlementId: $settlementId) {
            ok
            error {
                ...FuserError
            }
            data {
                ...FsettlementHistory
            }
        }
    }
    ${F_USERERROR}
    ${F_SETTLEMENT_HISTORY}
`;

export const SETTLEMENT_DELETE = gql`
    mutation settlementDelete($settlementId: ObjectId!) {
        SettlementDelete(settlementId: $settlementId) {
            ok
            error {
                ...FuserError
            }
            data {
                ...FsettlementHistory
            }
        }
    }
    ${F_USERERROR}
    ${F_SETTLEMENT_HISTORY}
`;

export const SETTLEMENT_HISTORY_LIST = gql`
    query settlementList(
        $sort: [_SettlementHistorySort!]
        $filter: _SettlementHistoryFilter
        $pagingInput: OffsetPagingInput!
    ) {
        SettlementList(
            sort: $sort
            filter: $filter
            pagingInput: $pagingInput
        ) {
            pageInfo {
                ...FoffsetPagingInfo
            }
            items {
                ...FsettlementHistory
            }
        }
    }
    ${F_PAGEINFO}
    ${F_SETTLEMENT_HISTORY}
`;
