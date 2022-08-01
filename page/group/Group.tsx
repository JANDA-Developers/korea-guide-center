import {
    Flex,
    isLast,
    JDalign,
    JDcard,
    JDcontainer,
    useModal,
} from "@janda-com/front";
import React from "react";
import { CardHeadButton } from "../../atom/CardHeadButtn";
import DotButton from "../../component/dotButton/DotButton";
import { JDicon } from "../../component/icons/Icons";
import { PageHeader } from "../../component/pageHeader/PageHeader";
import { useGroupList } from "../../hook/useGroup";
import { useOrderUpdate, userOrderManage } from "../../hook/useOrder";
import { OrderAbleTarget } from "../../types/api";
import {
    GroupEditModal,
    IGroupEditModalInfo,
} from "./components/GroupEditModal";
import { GroupGroup } from "./components/GroupGroup";

interface IProp {}

export const Group: React.FC<IProp> = () => {
    const [orderUpdate] = useOrderUpdate();
    const { items: groups } = useGroupList();
    const groupEditModal = useModal<IGroupEditModalInfo>();
    const { handleOrderExchange } = userOrderManage(
        groups,
        OrderAbleTarget.GROUP
    );

    return (
        <JDcontainer verticalPadding>
            <PageHeader
                title="상품전시"
                pageName="상품 전시 목록 만들기"
                description="추가하기를 누르시면 상품 전시 라인이 추가됩니다"
            />
            {groups.map((group, index) => (
                <JDcard
                    mb
                    head={
                        <Flex between>
                            {group.label.ko || ""}
                            <Flex vCenter>
                                {index !== 0 && (
                                    <JDicon
                                        hover
                                        onClick={() => {
                                            handleOrderExchange(
                                                index,
                                                index - 1
                                            );
                                        }}
                                        mr="small"
                                        icon="circleArrowUp"
                                    />
                                )}
                                {!isLast(index, groups) && (
                                    <JDicon
                                        hover
                                        onClick={() => {
                                            handleOrderExchange(
                                                index,
                                                index + 1
                                            );
                                        }}
                                        mr="small"
                                        icon="circleArrowDown"
                                    />
                                )}
                                <CardHeadButton
                                    onClick={() => {
                                        groupEditModal.openModal({
                                            group,
                                        });
                                    }}
                                >
                                    그룹정보수정
                                </CardHeadButton>
                            </Flex>
                        </Flex>
                    }
                >
                    <GroupGroup group={group} key={group._id} />
                </JDcard>
            ))}
            <DotButton
                onClick={() => {
                    groupEditModal.openModal();
                }}
            >
                추가하기
            </DotButton>
            <GroupEditModal
                key={groupEditModal.info?.group?._id}
                modalHook={groupEditModal}
            />
        </JDcontainer>
    );
};
