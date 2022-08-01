import {
    isEmpty,
    JDcard,
    JDcontainer,
    JDdoubleInputRange,
} from "@janda-com/front";
import React, { useContext } from "react";
// import { DobuleInputRangeFilter } from "../../atom/DobuleInputRangeFilter";
import JDsearchBar from "../../atom/SearchBar";
import { CardBtn } from "../../component/btns/ModalBtn";
import { ChatRoomViewCard } from "../../component/chatRoom/ChatRoomViewCard";
import { AppContext } from "../../context/context";
import { useChatRoomDelete, useChatRoomList } from "../../hook/useChatRoom";
import { FchatRoom } from "../../types/api";
import { TElements } from "../../types/interface";

interface IProp {
    Empty: TElements;
}

export const MyChatRooms: React.FC<IProp> = ({ Empty }) => {
    const { me, isMaster } = useContext(AppContext);
    const [deleteMu] = useChatRoomDelete();
    const chatRoomListHook = useChatRoomList({
        fixingFilter: {
            participantes__in: [me?._id],
        },
    });
    const { items: chatRooms } = chatRoomListHook;

    return (
        <div>
            {isEmpty(chatRooms) && Empty}
            {chatRooms.map((chatRoom) => (
                <ChatRoomViewCard
                    key={chatRoom._id + "offerViewCard"}
                    chatRoom={chatRoom}
                ></ChatRoomViewCard>
            ))}
        </div>
    );
};
