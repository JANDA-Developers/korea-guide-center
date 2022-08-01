import { useModal } from "@janda-com/front";
import { IGlobalInputModalInfo } from "../component/GlobalInput/GlobalInputModal";

export type TUseGlobalModal = ReturnType<typeof useGlobalModal>;
export const useGlobalModal = (
    defaultValue?: boolean | undefined,
    defaultInfo?: IGlobalInputModalInfo | undefined
) => {
    const globalModalHook = useModal<IGlobalInputModalInfo>(
        defaultValue,
        defaultInfo
    );
    return {
        ...globalModalHook,
        key: globalModalHook.isOpen ? "opend" : "closed",
    };
};
