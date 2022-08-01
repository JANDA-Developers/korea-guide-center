import { gql } from "@apollo/client";
import { F_CHATROOM } from "./fragment/chatRoom";
import { F_PAGEINFO, F_USERERROR } from "./fragment/shared";

export const CHATROOM_UPDATE = gql`
    mutation chatRoomUpdate($input: ChatRoomInput!, $ChatRoomId: ObjectId!) {
        ChatRoomUpdate(ChatRoomId: $ChatRoomId, input: $input) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const CHATROOM_CREATE = gql`
    mutation chatRoomCreate(
        $input: ChatRoomInput!
        $targetUserIds: [ObjectId!]!
    ) {
        ChatRoomCreate(input: $input, targetUserIds: $targetUserIds) {
            ok
            error {
                ...FuserError
            }
            data {
                ...FchatRoom
            }
        }
    }
    ${F_CHATROOM}
    ${F_USERERROR}
`;

export const CHATROOM_DELETE = gql`
    mutation chatRoomDelete($ChatRoomId: ObjectId!) {
        ChatRoomDelete(ChatRoomId: $ChatRoomId) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const CHATROOM_LIST = gql`
    query chatRoomList(
        $sort: [_ChatRoomSort!]
        $filter: _ChatRoomFilter
        $pagingInput: OffsetPagingInput!
    ) {
        ChatRoomList(sort: $sort, pagingInput: $pagingInput, filter: $filter) {
            pageInfo {
                ...FoffsetPagingInfo
            }
            items {
                ...FchatRoom
            }
        }
    }
    ${F_PAGEINFO}
    ${F_CHATROOM}
`;

export const CHAT_CREATE = gql`
    mutation chatCreate($input: ChatInput!, $chatRoomId: ObjectId!) {
        ChatCreate(input: $input, chatRoomId: $chatRoomId) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const CHAT_DELETE = gql`
    mutation chatDelete($ChatRoomId: ObjectId!, $ChatId: ObjectId!) {
        ChatDelete(ChatId: $ChatId, ChatRoomId: $ChatRoomId) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const CHATROOM_FIND_BY_ID = gql`
    query chatRoomFindById($chatRoomId: ObjectId!) {
        ChatRoomFindById(ChatRoomId: $chatRoomId) {
            ...FchatRoom
        }
    }
    ${F_CHATROOM}
`;

export const CHATROOM_FIND_BY_TARGET_ID = gql`
    query chatRoomFindByTargetId($targetId: ObjectId!) {
        ChatRoomFindByTargetId(targetId: $targetId) {
            ...FchatRoom
        }
    }
    ${F_CHATROOM}
`;
