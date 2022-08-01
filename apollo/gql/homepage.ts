import { gql } from "@apollo/client";
import {
    F_COLLECTION_DATA_INTERFACE,
    F_FILE,
    F_USERERROR,
} from "./fragment/shared";

export const F_FEE_POLICY = gql`
    fragment Ffeepolicy on FeePolicy {
        ...FcollectionDataInterface
        feeName
        feeDescription
        type
        feePercent
        feePercentUnder
        targetPayMethods
        fee
    }
    ${F_COLLECTION_DATA_INTERFACE}
`;

export const HOMEPAGE_MANAGE = gql`
    mutation homepageManage($input: HomepageInput!) {
        HomepageManage(input: $input) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;
