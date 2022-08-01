import { getRefetch } from "@janda-com/front";
import { useRouter } from "next/router";
import { useContext } from "react";
import {
    CHATROOM_CREATE,
    CHATROOM_UPDATE,
    CHATROOM_DELETE,
    CHATROOM_FIND_BY_ID,
    CHATROOM_LIST,
    CHAT_CREATE,
    CHATROOM_FIND_BY_TARGET_ID,
} from "../apollo/gql/chat";
import { ME } from "../apollo/gql/user";
import { AppContext } from "../context/context";
import { Paths } from "../pages/index[depre]";
import {
    chatRoomCreate,
    chatRoomCreateVariables,
    chatRoomUpdate,
    chatRoomUpdateVariables,
    chatRoomList_ChatRoomList_items,
    chatRoomDelete,
    chatRoomDeleteVariables,
    chatRoomFindById,
    chatRoomFindByIdVariables,
    chatRoomFindById_ChatRoomFindById,
    chatRoomList,
    chatRoomListVariables,
    _ChatRoomFilter,
    _ChatRoomSort,
    chatCreate,
    chatCreateVariables,
    chatDelete,
    chatDeleteVariables,
    chatRoomFindByTargetIdVariables,
    chatRoomFindByTargetId,
    chatRoomFindByTargetId_ChatRoomFindByTargetId,
} from "../types/api";
import {
    generateFindQuery,
    generateListQueryHook,
    generateMutationHook,
} from "../utils/query";

export const useChatRoomFindById = generateFindQuery<
    chatRoomFindById,
    chatRoomFindByIdVariables,
    chatRoomFindById_ChatRoomFindById
>("chatRoomId", CHATROOM_FIND_BY_ID);
export const useChatRoomFindByTargetId = generateFindQuery<
    chatRoomFindByTargetId,
    chatRoomFindByTargetIdVariables,
    chatRoomFindByTargetId_ChatRoomFindByTargetId
>("targetId", CHATROOM_FIND_BY_TARGET_ID);
export const useChatRoomList = generateListQueryHook<
    _ChatRoomFilter,
    _ChatRoomSort,
    chatRoomList,
    chatRoomListVariables,
    chatRoomList_ChatRoomList_items
>(CHATROOM_LIST, { initialSort: [_ChatRoomSort.lastChatTime__desc] });
export const useChatRoomCreate = generateMutationHook<
    chatRoomCreate,
    chatRoomCreateVariables
>(CHATROOM_CREATE, { ...getRefetch(CHATROOM_LIST, ME) });
export const useChatRoomDelete = generateMutationHook<
    chatRoomDelete,
    chatRoomDeleteVariables
>(CHATROOM_DELETE, { ...getRefetch(CHATROOM_LIST) });
export const useChatRoomUpdate = generateMutationHook<
    chatRoomUpdate,
    chatRoomUpdateVariables
>(CHATROOM_UPDATE, { ...getRefetch(CHATROOM_LIST) });

export const useChatCreate = generateMutationHook<
    chatCreate,
    chatCreateVariables
>(CHAT_CREATE, { ...getRefetch(CHATROOM_FIND_BY_ID) });
export const useChatDelete = generateMutationHook<
    chatDelete,
    chatDeleteVariables
>(CHATROOM_DELETE, { ...getRefetch(CHATROOM_LIST) });

export const useStartChat = (guideId?: string, guideNickName?: string) => {
    const router = useRouter();
    const { loginAnd, me } = useContext(AppContext);

    // const { getData } = useChatRoomFindByTargetId(undefined, {
    //     onCompleted: ({ ChatRoomFindByTargetId }) => {
    //         if (ChatRoomFindByTargetId?._id) {
    //             router.push(Paths.chatRoom + "/" + ChatRoomFindByTargetId._id);
    //         }
    //     },
    // });

    const [chatRoomCreate] = useChatRoomCreate({
        awaitRefetchQueries: true,
        onCompleted: ({ ChatRoomCreate }) => {
            if (ChatRoomCreate.data?._id)
                router.push(Paths.chatRoom + "/" + ChatRoomCreate.data?._id);
        },
    });

    const handleToChatRoomOrCreate = (
        targetId: string = guideId || "",
        targetNickName: string = guideNickName || ""
    ) => {
        if (targetId === me?._id) {
            alert("자신과는 채팅을 만드실 수 없습니다");
            return;
        }
        loginAnd(() => {
            chatRoomCreate({
                variables: {
                    input: {
                        title: `${me?.name},${targetNickName}`,
                    },
                    targetUserIds: [targetId],
                },
            });
        });
    };

    return { handleToChatRoomOrCreate };
};
