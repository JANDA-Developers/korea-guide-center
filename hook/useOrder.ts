import { getRefetch, toast } from "@janda-com/front";
import { ORDER_UPDATE } from "../apollo/gql/common";
import {
    OrderAbleTarget,
    orderUpdate,
    orderUpdateVariables,
} from "../types/api";
import { generateMutationHook } from "../utils/query";
export const useOrderUpdate = generateMutationHook<
    orderUpdate,
    orderUpdateVariables
>(ORDER_UPDATE, { ...getRefetch() });

interface OrderItemInteface {
    _id: string;
    order: number | null;
    [key: string]: any;
}

export const userOrderManage = (
    targets: OrderItemInteface[],
    model: OrderAbleTarget
) => {
    const [updateMU] = useOrderUpdate({
        skipMessage: true,
        onCompleteSucess: () => {
            toast.success("순서 변경이 완료되었습니다");
        },
    });

    const handleOrderExchange = (currentIndex: number, nextIndex: number) => {
        const currentTarget = targets[currentIndex];
        const replaceTarget = targets[nextIndex];
        if (replaceTarget) {
            targets.splice(currentIndex, 1, replaceTarget);
            targets.splice(nextIndex, 1, currentTarget);
        }

        updateMU({
            variables: {
                inputs: targets.map((tg, index) => ({
                    id: tg._id,
                    order: index,
                })),
                target: model,
            },
        });
    };

    return { handleOrderExchange, updateMU };
};
