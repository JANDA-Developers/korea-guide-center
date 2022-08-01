import { Flex, JDalign, JDbutton, JDcontainer } from "@janda-com/front";
import React from "react";
import { useContext } from "react";
import { Empty } from "../../atom/Empty";
import { CardBtn } from "../../component/btns/ModalBtn";
import { OfferViewCard } from "../../component/offerViewCard/OfferViewCard";
import { PageHeader } from "../../component/pageHeader/PageHeader";
import Pagination from "../../component/pagination/Pagination";
import { AppContext } from "../../context/context";
import { useStartChat } from "../../hook/useChatRoom";
import { useOfferList } from "../../hook/useOffer";
import { useOfferManage } from "../../hook/useOfferManage";

interface IProp {}

export const GuideOffers: React.FC<IProp> = () => {
    const { me, isMaster } = useContext(AppContext);
    const { items, pageInfo, paginatorHook } = useOfferList({
        fixingFilter: {},
    });
    const { handleDelete, handleOfferSend } = useOfferManage();
    const { handleToChatRoomOrCreate } = useStartChat();

    return (
        <JDcontainer verticalPadding>
            <PageHeader
                pageName="맞춤투어"
                description={
                    "맞춤투어 리스트입니다. 마음에드는 제안을 찾아 여행자에게 연락해보세요."
                }
                title={"제안에 맞추어 여행하기"}
            />
            <JDalign mb>
                <Empty msg="맞춤제안이 없습니다" empty={items} />
                {items.map((item) => (
                    <OfferViewCard
                        mb
                        foot={
                            <Flex>
                                <CardBtn
                                    hide={!isMaster}
                                    onClick={() => {
                                        handleDelete(item._id);
                                    }}
                                    mr
                                    thema="error"
                                >
                                    삭제하기
                                </CardBtn>
                                <CardBtn
                                    onClick={() => {
                                        handleToChatRoomOrCreate(
                                            item.offerId,
                                            item.offerName
                                        );
                                    }}
                                    mr
                                    label="여행자와 대화하기"
                                />
                                <CardBtn
                                    onClick={() => {
                                        handleOfferSend(item._id);
                                    }}
                                    label="상품제안 보내기"
                                />
                            </Flex>
                        }
                        key={item._id + "offerViewCard"}
                        offer={item}
                    />
                ))}
            </JDalign>
            <Pagination
                totalPageCount={pageInfo?.totalPageCount || 0}
                {...paginatorHook}
            />
        </JDcontainer>
    );
};
