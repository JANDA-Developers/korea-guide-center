import { gql } from "@apollo/client";

export const F_SNS = gql`
    fragment Fsns on SNS {
        facebook
        insta
        twitter
        youtube
        line
    }
`;
