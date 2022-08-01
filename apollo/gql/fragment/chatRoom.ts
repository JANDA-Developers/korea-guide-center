import { gql } from "@apollo/client";
import { F_FILE } from "./shared";

export const F_CHAT = gql`
    fragment Fchat on Chat {
        _id
        updatedAt
        createdAt
        message
        files {
            ...Ffile
        }
        name
        profileImg
        nickName
        userId
        chatRoomId
    }
    ${F_FILE}
`;

export const F_CHATROOM = gql`
    fragment FchatRoom on ChatRoom {
        _id
        lastChatTime
        lastChatMessage
        updatedAt
        createdAt
        title
        contents
        openerId
        openerName
        openerNickname
        targetRole
        targetNicekName
        targetName
        targetId
        targetProfileImage {
            ...Ffile
        }
        openerImg {
            ...Ffile
        }
        chatRoomBg {
            ...Ffile
        }
        chats {
            ...Fchat
        }
    }
    ${F_CHAT}
    ${F_FILE}
`;
