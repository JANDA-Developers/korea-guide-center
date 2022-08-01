import { gql } from "@apollo/client";
import { F_COLLECTION_DATA_INTERFACE } from "./shared";

export const F_BASE_TRANSACTION = gql`
    fragment FbaseTransaction on BaseTransaction {
        ...FcollectionDataInterface
        status
        type
        paymethod
        price
        currency
        message
    }
    ${F_COLLECTION_DATA_INTERFACE}
`;
