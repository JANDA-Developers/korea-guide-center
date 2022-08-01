import { gql } from "@apollo/client";
import { F_USERERROR } from "./fragment/shared";

export const ORDER_UPDATE = gql`
    mutation orderUpdate(
        $inputs: [OrderUpdateInput!]!
        $target: OrderAbleTarget!
    ) {
        OrderUpdate(inputs: $inputs, target: $target) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;
