import { Bold, JDcard, JDcontainer, Mb } from "@janda-com/front";
import React, { useContext } from "react";
import { Empty } from "../../atom/Empty";
import JDsearchBar from "../../atom/SearchBar";
import { CardBtn } from "../../component/btns/ModalBtn";
import { ChatRoomViewCard } from "../../component/chatRoom/ChatRoomViewCard";
import { PageHeader } from "../../component/pageHeader/PageHeader";
import Pagination from "../../component/pagination/Pagination";
import { AppContext } from "../../context/context";
import { useChatRoomDelete, useChatRoomList } from "../../hook/useChatRoom";
import { FchatRoom, _ChatRoomFilter, _ReviewFilter } from "../../types/api";

interface IProp {}

export const GuideChatRoomList: React.FC<IProp> = () => {
    const { myId, ownerFilter, deleteSure, isMaster } = useContext(AppContext);
    const [deleteMu] = useChatRoomDelete();
    const onwerFilter = ownerFilter<_ChatRoomFilter>({
        participantes__in: [myId],
    });

    const chatRoomListHook = useChatRoomList({
        fixingFilter: {
            ...onwerFilter,
        },
    });

    const { items: chatRooms, paginatorHook, pageInfo } = chatRoomListHook;

    const handleClick = (chatRoom: FchatRoom) => {
        deleteSure(() => {
            deleteMu({
                variables: {
                    ChatRoomId: chatRoom._id,
                },
            });
        }, "정말로 채팅을 삭제하십니까?");
    };

    return (
        <JDcontainer verticalPadding>
            <PageHeader
                pageName="채팅"
                title={"구매자와의 대화목록."}
                description={
                    "채팅방에 개인 연락처를 나기면 제제사유가 될 수 있습니다"
                }
            />
            <JDcard mb>
                <JDsearchBar
                    listHook={chatRoomListHook}
                    searchOps={[
                        {
                            label: "이름으로 검색",
                            value: "title__contains",
                        },
                        {
                            label: "생성일 검색",
                            value: "createdAt__gte",
                            type: "dateRange",
                        },
                    ]}
                    mb
                />
            </JDcard>
            <Empty msg="대화목록이 없습니다" empty={chatRooms} />
            {chatRooms.map((chatRoom) => (
                <ChatRoomViewCard
                    key={chatRoom._id + "offerViewCard"}
                    chatRoom={chatRoom}
                >
                    <Bold
                        hover
                        size="small"
                        hide={!isMaster}
                        onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            handleClick(chatRoom);
                        }}
                        color="error"
                    >
                        삭제하기
                    </Bold>
                </ChatRoomViewCard>
            ))}
            <Mb />
            <Pagination
                {...paginatorHook}
                totalPageCount={pageInfo?.totalPageCount || 0}
            />
        </JDcontainer>
    );
};
