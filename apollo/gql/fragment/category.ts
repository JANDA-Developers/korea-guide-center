import { gql } from "@apollo/client";
import { F_LANGS } from "./shared";

export const F_CATEGORY = gql`
    fragment Fcategory on Category {
        _id
        updatedAt
        createdAt
        type
        label {
            ...Flangs
        }
        order
        hyper
    }
    ${F_LANGS}
`;
