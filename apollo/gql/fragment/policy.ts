import { gql } from "@apollo/client";
import { F_COLLECTION_DATA_INTERFACE } from "./shared";

export const F_POLICY = gql`
    fragment Fpolicy on Policy {
        ...FcollectionDataInterface
        target
        name
        content
        require
        order
        version
    }
    ${F_COLLECTION_DATA_INTERFACE}
`;
