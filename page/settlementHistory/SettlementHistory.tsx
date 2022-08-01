import { Flex, JDcard, JDcontainer, WindowSize } from "@janda-com/front";
import React from "react";
import { useContext } from "react";
import { CardBtn, TableBtn } from "../../component/btns/ModalBtn";
import { PageHeader } from "../../component/pageHeader/PageHeader";
import { AppContext } from "../../context/context";
import { useFeepolicy } from "../../hook/useFeepolicy";
import { useHomepageManage } from "../../hook/useHomepage";
import {
    useSettlementList,
    useSettlementManage,
} from "../../hook/useSettlement";
import { SettlementStatus, _SettlementHistoryFilter } from "../../types/api";
import { omitsAuto } from "../../utils/omit";
import { SeettlementTable } from "./components/SettlementTable";

interface IProp {
    role: "request" | "completed";
}

export const SettlementHistory: React.FC<IProp> = ({ role }) => {
    const isRequestList = role === "request";
    const { homepage, isMaster, me } = useContext(AppContext);
    const [updateHomepage] = useHomepageManage();
    const { feePolicies: defaultPolicies } = homepage || {};
    const { feePolicies, setFeePolicies } = useFeepolicy(defaultPolicies || []);

    const onwerFilter: _SettlementHistoryFilter = isMaster
        ? {}
        : {
              guideId__eq: me?._id,
          };

    const { items } = useSettlementList({
        fixingFilter: {
            ...onwerFilter,
            status__eq: isRequestList
                ? SettlementStatus.REQUEST
                : SettlementStatus.COMPLETED,
        },
    });
    const { handleComplete, handleCreate, handleDelete } =
        useSettlementManage();

    const handleSave = () => {
        updateHomepage({
            variables: {
                input: {
                    feePolicies: omitsAuto(feePolicies),
                },
            },
        });
    };

    return (
        <JDcontainer size={WindowSize.full} verticalPadding>
            <PageHeader
                title={isRequestList ? "정산 요청목록" : "정산 히스토리"}
                pageName={
                    isRequestList
                        ? "정산 요청기록 목록입니다"
                        : "정산내용 기록입니다"
                }
                description="정산기록중 이상이 잇는경우 코리아가이드로 전화문의 바랍니다"
            />
            <JDcard>
                <SeettlementTable
                    tableFor={role}
                    Controller={(settlementHistory) => {
                        return (
                            <div>
                                <div>
                                    <TableBtn
                                        thema="primary"
                                        onClick={() => {
                                            handleComplete(settlementHistory);
                                        }}
                                    >
                                        정산완료
                                    </TableBtn>
                                </div>
                                <div>
                                    <TableBtn
                                        thema="error"
                                        onClick={() => {
                                            handleDelete(settlementHistory);
                                        }}
                                    >
                                        삭제하기
                                    </TableBtn>
                                </div>
                            </div>
                        );
                    }}
                    settlementhistorys={items}
                />
            </JDcard>
        </JDcontainer>
    );
};
