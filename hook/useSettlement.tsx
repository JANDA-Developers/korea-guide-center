import { Bold, getRefetch, Large, toast } from "@janda-com/front";
import { useContext } from "react";
import {
    SETTLEMENT_COMPLETE,
    SETTLEMENT_CREATE,
    SETTLEMENT_DELETE,
    SETTLEMENT_HISTORY_LIST,
} from "../apollo/gql/settlement";
import { TOUR_LIST } from "../apollo/gql/tour";
import { Red } from "../atom/shortCut/Short";
import { JDicon } from "../component/icons/Icons";
import { AppContext } from "../context/context";
import {
    settlementCreate,
    settlementCreateVariables,
    settlementList_SettlementList_items,
    settlementList,
    settlementListVariables,
    _SettlementHistoryFilter,
    _SettlementHistorySort,
    settlementComplete,
    settlementCompleteVariables,
    settlementDelete,
    settlementDeleteVariables,
    Ftour,
    Ffeepolicy,
    FeeType,
    FsettlementHistory,
    Paymethod,
} from "../types/api";
import { generateListQueryHook, generateMutationHook } from "../utils/query";

export const useSettlementList = generateListQueryHook<
    _SettlementHistoryFilter,
    _SettlementHistorySort,
    settlementList,
    settlementListVariables,
    settlementList_SettlementList_items
>(SETTLEMENT_HISTORY_LIST, {
    initialSort: [_SettlementHistorySort.createdAt__desc],
});

export const useSettlementCreate = generateMutationHook<
    settlementCreate,
    settlementCreateVariables
>(SETTLEMENT_CREATE, { ...getRefetch(SETTLEMENT_HISTORY_LIST, TOUR_LIST) });

export const useSettlementComplete = generateMutationHook<
    settlementComplete,
    settlementCompleteVariables
>(SETTLEMENT_COMPLETE, { ...getRefetch(SETTLEMENT_HISTORY_LIST) });

export const useSettlementDelete = generateMutationHook<
    settlementDelete,
    settlementDeleteVariables
>(SETTLEMENT_DELETE, { ...getRefetch(SETTLEMENT_HISTORY_LIST) });

export const useSettlementManage = () => {
    const { confirmModalHook, homepage, promptModalHook } =
        useContext(AppContext);

    const [settlementCreate] = useSettlementCreate({
        onCompleteSucess: () => {
            toast("정산이 요청 되었습니다");
        },
        skipMessage: true,
    });
    const [settlementComplete] = useSettlementComplete({
        onCompleteSucess: () => {
            toast("정산이 완료 되었습니다");
        },
        skipMessage: true,
    });
    const [settlementDelete] = useSettlementDelete({
        onCompleteSucess: () => {
            toast("정산이 요청이 삭제되었습니다");
        },
        skipMessage: true,
    });

    const handleCreate = (tour: Ftour) => {
        const { totalPaidAmt, code } = tour;
        promptModalHook.openModal({
            title: "정말로 정산 신청을 진행 하시겠습니까?",
            content: (
                <Large>
                    투어[{code}]의 정산금액은{" "}
                    {
                        <Bold>
                            {minusFee(
                                totalPaidAmt || 0,
                                homepage?.feePolicies || []
                            )}
                            원
                        </Bold>
                    }{" "}
                    입니다.
                </Large>
            ),
            inputProps: {
                label: "정산신청 특이사항을 남겨주세요.",
            },
            callBack: (guideMemo) => {
                promptModalHook.closeModal();
                settlementCreate({
                    variables: {
                        input: {
                            amt:
                                (tour.totalPaidAmt || 0) -
                                (tour.totalRefundPrice || 0),
                            guideMemo,
                        },
                        tourId: tour._id,
                    },
                });
            },
        });
    };

    const handleComplete = (settlement: FsettlementHistory) => {
        promptModalHook.openModal({
            title: "정말로 정산을 완료 하시겠습니까?",
            content: (
                <Red>
                    <JDicon icon="triWarn" /> 정산이 완료되면 삭제하실 수
                    없습니다.
                </Red>
            ),
            inputProps: {
                label: "정산완료 특이사항을 남겨주세요.",
            },
            callBack: (masterMemo) => {
                promptModalHook.closeModal();
                settlementComplete({
                    variables: {
                        input: {
                            masterMemo,
                        },
                        settlementId: settlement._id,
                    },
                });
            },
        });
    };

    const handleDelete = (settlement: FsettlementHistory) => {
        confirmModalHook.openModal({
            title: "정말로 정산신청을 삭제 하시겠습니까?",
            content: (
                <Red>
                    <JDicon icon="triWarn" /> 정산 신청이 삭제되면, 다시 신청
                    가능합니다.
                </Red>
            ),
            onContinue: () => {
                settlementDelete({
                    variables: {
                        settlementId: settlement._id,
                    },
                });
            },
        });
    };

    return {
        settlementCreate,
        settlementComplete,
        settlementDelete,
        handleDelete,
        handleComplete,
        handleCreate,
    };
};

export const minusFee = (amt: number, policies: Ffeepolicy[]): number => {
    let original = amt;
    let resultMinus = 0;

    policies.forEach((policy) => {
        if (policy.type === FeeType.DEFAULT) {
            resultMinus += policy.fee || 0;
        } else {
            const { feePercent, feePercentUnder } = policy;
            const feeDigitNumber =
                ((feePercent || 0) + (feePercentUnder || 0) / 100) / 100;
            resultMinus += Math.floor(original * feeDigitNumber);
        }
    });

    const total = original - resultMinus;
    return total > 0 ? total : 0;
};
