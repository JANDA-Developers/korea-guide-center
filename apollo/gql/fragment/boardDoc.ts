import { gql } from "@apollo/client";
import { F_COMMENT } from "./comment";
import { F_ATTRIBUTE, F_COLLECTION_DATA_INTERFACE, F_FILE } from "./shared";

export const F_BOARD_DOC = gql`
    fragment FboardDoc on BoardDoc {
        ...FcollectionDataInterface
        title
        contents
        authorName
        authorRole
        isNotice
        attrs {
            ...Fattribute
        }
        lang
        type
        isOpen
        authorEmail
        authorId
        summary
        subTitle
        keyWards
        attachFiles {
            ...Ffile
        }
        thumb {
            ...Ffile
        }
        viewCount
        likeCount
        slug
        tags {
            key
            value
        }
        recentComment {
            ...Fcomment
        }
        commentCount
        boardKey
        _boardId
        boardName
    }
    ${F_COMMENT}
    ${F_COLLECTION_DATA_INTERFACE}
    ${F_ATTRIBUTE}
    ${F_FILE}
`;
