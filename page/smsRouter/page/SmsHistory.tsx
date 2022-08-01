import {
    JDcard,
    JDcontainer,
    JDpageHeader,
    Mb,
    useModal,
    WindowSize,
} from "@janda-com/front";
import React from "react";
import { useHistory } from "react-router-dom";
import { useNotificationHistory } from "../../../hook/useNotification";
import { SmsHistoryTable } from "../components/SmsHistoryTable";
import {
    ISmsHistoryModalInfo,
    SmsHistoryDetailModal,
} from "../components/HistoryDetailModal";
import JDsearchBar from "../../../atom/SearchBar";
import Pagination from "../../../component/pagination/Pagination";
import { F_PAGEINFO } from "../../../apollo/gql/fragment/shared";
import { PageHeader } from "../../../component/pageHeader/PageHeader";
import { notificationHistory_NotificationHistory_items } from "../../../types/api";

interface IProps {}

type IDetailRouteProp = { itemId?: string };

export const SmsHistoryList: React.FC<IProps> = () => {
    const history = useHistory();
    const notificationHistoryHook = useNotificationHistory();
    const {
        items: notificationHistories,
        paginatorHook,
        setFilter,
        filter,
        pageInfo,
    } = notificationHistoryHook;
    const modalHook = useModal<ISmsHistoryModalInfo>();

    return (
        <div>
            <JDcontainer verticalPadding size={WindowSize.full}>
                <PageHeader
                    pageName="알림 히스토리"
                    title="발신 히스토리"
                    description={
                        <div>
                            SMS 사용 히스토리를 확인 하실 수 있습니다.
                            <div>
                                발신 사용요금은 지급금액(카드결제 금액)에서
                                차감되며, 지급할 금액이 모자라거나 없을 겨우에는
                                별도로 고지서를 보내드립니다.
                            </div>
                        </div>
                    }
                />
                {/* <ItemRadio handleSelectItem={handleSelectItem} itemIdFilter={itemIdFilter} /> */}
                <JDsearchBar
                    searchOps={[
                        {
                            label: "발신자 번호",
                            value: "sender__eq",
                        },
                        {
                            label: "휴대폰번호",
                            value: "OR",
                        },
                    ]}
                    listHook={notificationHistoryHook}
                />
                <Mb />
                <JDcard mb head="발신리스트">
                    <SmsHistoryTable
                        handleView={(history) => {
                            modalHook.openModal({
                                history:
                                    history as notificationHistory_NotificationHistory_items,
                            });
                        }}
                        histories={notificationHistories}
                    />
                </JDcard>
                <Pagination
                    {...paginatorHook}
                    totalPageCount={pageInfo.totalPageCount}
                />
            </JDcontainer>
            <SmsHistoryDetailModal modalHook={modalHook} />
        </div>
    );
};

export default SmsHistoryList;
