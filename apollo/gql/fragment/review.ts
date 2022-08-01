import { gql } from "@apollo/client";
import { F_COMMENT } from "./comment";
import { F_FILE, F_LANGS } from "./shared";

export const F_REVIEW = gql`
    fragment Freview on Review {
        _id
        updatedAt
        createdAt
        title
        contents
        images {
            ...Ffile
        }
        rating
        type
        reviewerId
        reviewerName
        reviewerProfileImg {
            ...Ffile
        }
        reviewerNickName
        tourTitle {
            ...Flangs
        }
        recentComment {
            ...Fcomment
        }
        commentCount
        productCode
        guideName
        guideId
        guideNickName
        tourCode
        tourStart
        tourId
    }
    ${F_COMMENT}
    ${F_LANGS}
    ${F_FILE}
`;
