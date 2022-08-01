import { getRefetch, toast } from "@janda-com/front";
import { useContext } from "react";
import { AVAIL_PRODUCT_DATE_LIST, PRODUCT_LIST } from "../apollo/gql/product";
import {
    TOUR_CREATE,
    TOUR_UPDATE,
    TOUR_DELETE,
    TOUR_FIND_BY_ID,
    TOUR_LIST,
    TOUR_CANCEL,
    REPRESENTIVE_TOUR_CHANGE,
} from "../apollo/gql/tour";
import { ME } from "../apollo/gql/user";
import { AppContext } from "../context/context";
import {
    tourCreate,
    tourCreateVariables,
    tourUpdate,
    tourUpdateVariables,
    tourList_TourList_items,
    tourDelete,
    tourDeleteVariables,
    tourFindById,
    tourFindByIdVariables,
    tourFindById_TourFindById,
    tourList,
    tourListVariables,
    _TourFilter,
    _TourSort,
    tourCancel,
    tourCancelVariables,
    Ftour,
    availDateProductList,
    availDateProductListVariables,
    representiveTourChange,
    representiveTourChangeVariables,
} from "../types/api";
import { completeMsg } from "../utils/onCompletedMessage";
import {
    generateFindQuery,
    generateListQueryHook,
    generateMutationHook,
    generateQueryHook,
} from "../utils/query";

export const useTourFindById = generateFindQuery<
    tourFindById,
    tourFindByIdVariables,
    tourFindById_TourFindById
>("TourId", TOUR_FIND_BY_ID);
export const useTourList = generateListQueryHook<
    _TourFilter,
    _TourSort,
    tourList,
    tourListVariables,
    tourList_TourList_items
>(TOUR_LIST, { initialSort: [_TourSort.createdAt__desc] });
export const useTourCreate = generateMutationHook<
    tourCreate,
    tourCreateVariables
>(TOUR_CREATE, { ...getRefetch(TOUR_LIST, ME) });
export const useTourDelete = generateMutationHook<
    tourDelete,
    tourDeleteVariables
>(TOUR_DELETE, { ...getRefetch(TOUR_LIST) });
export const useTourUpdate = generateMutationHook<
    tourUpdate,
    tourUpdateVariables
>(TOUR_UPDATE, { ...getRefetch(TOUR_LIST) });
export const useTourCancel = generateMutationHook<
    tourCancel,
    tourCancelVariables
>(TOUR_CANCEL, { ...getRefetch(TOUR_LIST) });
export const useTourRpresentiveChange = generateMutationHook<
    representiveTourChange,
    representiveTourChangeVariables
>(REPRESENTIVE_TOUR_CHANGE, { ...getRefetch(TOUR_LIST, PRODUCT_LIST) });

export const useTourManage = () => {
    const { promptModalHook } = useContext(AppContext);
    const [tourCancelMu] = useTourCancel({
        onCompleteSucess: () => {
            toast.success("투어가 성공적으로 취소 되었습니다");
            promptModalHook.closeModal();
        },
    });

    const handleTourCancel = (tour: Ftour) => {
        promptModalHook.openModal({
            title: "투어취소 사유를 입력해주세요.",
            messageLabel: "취소사유(100자이하)",
            callBack: (message: string) => {
                tourCancelMu({
                    variables: {
                        TourId: tour._id,
                        reason: message,
                    },
                });
            },
        });
    };

    return { handleTourCancel };
};

export const useAvailDateProductList = generateQueryHook<
    availDateProductList,
    Date[],
    availDateProductListVariables
>(AVAIL_PRODUCT_DATE_LIST);
