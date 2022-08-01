import { gql } from "@apollo/client";
import { F_FILE } from "./shared";

export const F_COMMENT = gql`
    fragment Fcomment on Comment {
        _id
        updatedAt
        createdAt
        content
        writerId
        writerName
        writerNickName
        targetId
        targetModel
        writerProfileImg {
            ...Ffile
        }
    }
    ${F_FILE}
`;
