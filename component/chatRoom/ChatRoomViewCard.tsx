import {
    Flex,
    IJDalignProp,
    JDavatar,
    Mr,
    Small,
    Tiny,
} from "@janda-com/front";
import { TElements } from "@janda-com/front/dist/types/interface";
import { useRouter } from "next/router";
import React from "react";
import { useContext } from "react";
import { Empty } from "../../atom/Empty";
import { AppContext } from "../../context/context";
import { useChatRoomList } from "../../hook/useChatRoom";
import { ListInitOptions } from "../../hook/useListQuery";
import { Paths } from "../../pages/index[depre]";
import {
    chatRoomList,
    chatRoomListVariables,
    FchatRoom,
    _ChatRoomFilter,
    _ChatRoomSort,
} from "../../types/api";
import { DEFAULT_PROFILE_IMG } from "../../types/const";
import { cutStr } from "../../utils/cutStr";
import { getDateDiffText } from "../../utils/getDateDiffText";
import { genrateOption } from "../../utils/query";

interface IProp extends IJDalignProp {
    chatRoom: FchatRoom;
    Controller?: () => TElements;
}

export const getRelativeChatRoom = (chatRoom?: FchatRoom) => {
    if (!chatRoom) return {};
    const { me, isMaster } = useContext(AppContext);
    const {
        targetNicekName,
        targetId,
        openerId,
        targetName,
        openerName,
        openerNickname,
        targetProfileImage,
        openerImg,
    } = chatRoom;

    const opnerIsMe = me?._id === chatRoom.openerId;
    const targetIsMe = chatRoom.targetId === me?._id;
    const bothIsNotMe = opnerIsMe || targetIsMe;
    const notBoth = !opnerIsMe && !targetIsMe;
    const canSendChat = isMaster || !notBoth;
    let chatRoomTitle = chatRoom.title;

    let opponentId = openerId;
    if (opnerIsMe) {
        chatRoomTitle = targetNicekName || targetName;
        opponentId = targetId;
    } else if (bothIsNotMe) {
        chatRoomTitle = openerNickname || openerName;
    }
    // const opponentImg = targetIsMe ?

    return {
        opponentId,
        opnerIsMe,
        targetIsMe,
        bothIsNotMe,
        chatRoomTitle,
        notBoth,
        canSendChat,
    };
};

export const ChatRoomViewCard: React.FC<IProp> = ({
    chatRoom,
    children,
    ...props
}) => {
    const router = useRouter();
    const { me } = useContext(AppContext);
    const {
        title,
        lastChatTime,
        lastChatMessage,
        openerImg,
        targetProfileImage,
    } = chatRoom;
    const { opnerIsMe, bothIsNotMe, targetIsMe, chatRoomTitle } =
        getRelativeChatRoom(chatRoom);

    const toChatRoom = (chatRoom: FchatRoom) => () => {
        window.open(Paths.chatRoom + "/" + chatRoom._id);
    };

    return (
        <Flex
            onClick={toChatRoom(chatRoom)}
            between
            oneone
            className="ChatRoomViewCard"
            vCenter
            {...props}
        >
            <div className="ChatRoomViewCard__profileZone" style={{ flex: 0 }}>
                <Flex mr vCenter>
                    <Flex mr>
                        <JDavatar
                            className="ChatRoomViewCard__avatar"
                            img={openerImg?.uri || DEFAULT_PROFILE_IMG}
                        />{" "}
                        <JDavatar
                            className="ChatRoomViewCard__avatar"
                            img={targetProfileImage?.uri || DEFAULT_PROFILE_IMG}
                        />{" "}
                    </Flex>
                </Flex>
            </div>
            <div>
                <Small mb="tiny" weight={600}>
                    {chatRoomTitle}
                </Small>
                {cutStr(lastChatMessage || "", 20)}
            </div>
            <Tiny style={{ flex: 0, whiteSpace: "nowrap" }} color="grey3">
                {getDateDiffText(lastChatTime || new Date())} <Mr />
                <Flex text="right">{children}</Flex>
            </Tiny>
        </Flex>
    );
};

interface IProductViewCardsWithApi extends Omit<IProp, "chatRoom"> {
    queryParam?: Partial<ListInitOptions<_ChatRoomFilter, _ChatRoomSort>>;
    queryControl?: genrateOption<chatRoomList, chatRoomListVariables>;
}

export const ChatRoomViewCards: React.FC<IProductViewCardsWithApi> = ({
    queryControl,
    queryParam,
}) => {
    const { items: chatRooms } = useChatRoomList(
        {
            initialViewCount: 8,
            ...queryParam,
            fixingFilter: {
                ...queryParam?.fixingFilter,
            },
        },
        queryControl
    );

    return (
        <div>
            <Empty msg="참여한 대화목록이 없습니다" empty={chatRooms} />
            {chatRooms.map((chatRoom) => (
                <ChatRoomViewCard
                    mb="small"
                    key={chatRoom._id + "offerViewCard"}
                    chatRoom={chatRoom}
                />
            ))}
        </div>
    );
};
