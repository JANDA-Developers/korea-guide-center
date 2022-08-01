import { gql } from "@apollo/client";
import { F_FEE_POLICY } from "../homepage";
import { F_COLLECTION_DATA_INTERFACE, F_LANGS } from "./shared";

export const F_SETTLEMENT_HISTORY = gql`
    fragment FsettlementHistory on SettlementHistory {
        ...FcollectionDataInterface
        _id
        updatedAt
        createdAt
        guideName
        guideId
        guideNickName
        amt
        settlementedPrice
        settlementCompleteAt
        tourPeopleNum
        guideMemo
        masterMemo
        productCode
        productId
        tourId
        tourName {
            ...Flangs
        }
        appliedFeePolicy {
            ...Ffeepolicy
        }
        tourDate
        tourCode
    }
    ${F_FEE_POLICY}
    ${F_LANGS}
    ${F_COLLECTION_DATA_INTERFACE}
`;
