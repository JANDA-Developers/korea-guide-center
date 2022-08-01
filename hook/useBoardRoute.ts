import { useRouter } from "next/router";
import { TRouteChange } from "../pages/BoardList";
import { Paths } from "../pages/index[depre]";
import { FboardDoc } from "../types/api";
import { boardKeys } from "../types/const";

interface IUseBoardRouteProp {
    routerChange?: (nextRoute: TRouteChange) => void;
    boardKey?: boardKeys;
}

export const useBoardRoute = ({
    boardKey,
    routerChange,
}: IUseBoardRouteProp) => {
    const router = useRouter();

    const handleToWrite = (doc?: FboardDoc) => {
        if (routerChange) {
            const routeProp: TRouteChange = {
                to: "write",
                boardKey: boardKey as boardKeys,
                docId: doc?._id,
            };

            routerChange(routeProp);
            return;
        }
        router.push(
            Paths.boardWrite +
                "/?boardKey=" +
                boardKey +
                "&docId=" +
                (doc?._id || "")
        );
    };

    const handleToList = (doc?: FboardDoc) => {
        if (routerChange) {
            const routeProp: TRouteChange = {
                to: "list",
                boardKey: boardKey as boardKeys,
                docId: doc?._id,
            };

            routerChange(routeProp);
            return;
        }
        router.push(
            Paths.boardList +
                "/?boardKey=" +
                boardKey +
                "&docId=" +
                (doc?._id || "")
        );
    };

    const handleToView = (doc: FboardDoc) => {
        const routeProp: TRouteChange = {
            to: "view",
            boardKey: boardKey as boardKeys,
            docId: doc._id,
        };
        if (routerChange) {
            routerChange(routeProp);
            return;
        }
        router.push(
            Paths.boardView +
                "/?boardKey=" +
                routeProp.boardKey +
                "&docId=" +
                (routeProp.docId || "")
        );
    };

    return { routerChange, handleToWrite, handleToView, handleToList };
};
