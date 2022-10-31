import { getFromUrl, JDcontainer, WindowSize } from "@janda-com/front";
import React from "react";
import { useContext } from "react";
import { BackStepBar } from "../component/backstepBar/BackstepBar";
import { BreadColumn } from "../component/breadColumn/BreadColumn";
import BookLayout from "../component/layout/BookLayout";
import { CardHead } from "../component/modalHead/ModalHead";
import { AppContext } from "../context/context";
import { useBoardFindByKey } from "../hook/useBoard";
import { useBoardDocFindById } from "../hook/useBoardDoc";
import { BoardDocEditor } from "../page/board/components/BoardDocEditor";
import { BoardFacotry } from "../types/board";
import { boardKeys } from "../types/const";
import { TRouteChange } from "./BoardList";
import { useBoardRoute } from "../hook/useBoardRoute";

interface IProp {
    docId?: string;
    boardKey?: boardKeys;
    routerChange?: (nextRoute: TRouteChange) => void;
    layoutHide?: boolean;
}

export const BoardDocWrite: React.FC<IProp> = ({
    boardKey,
    docId,
    routerChange,
    layoutHide,
}) => {
    if (typeof window === "undefined") return null;
    if (!boardKey) {
        boardKey = getFromUrl("boardKey") as boardKeys;
    }
    if (!docId) docId = getFromUrl("docId") || "";
    const { s } = useContext(AppContext);
    const { handleToList, handleToView } = useBoardRoute({
        boardKey: boardKey as boardKeys,
        routerChange,
    });
    const { item: board } = useBoardFindByKey(boardKey);
    const { item: doc } = useBoardDocFindById(docId);

    const BoardFactory = new BoardFacotry(s);
    const targetBoard = BoardFactory.getBoard(boardKey as boardKeys);

    if (!board) return null;

    return (
        <BookLayout layoutHide={layoutHide}>
            <JDcontainer verticalPadding size={WindowSize.md}>
                <BreadColumn mb="huge" links={targetBoard.breadColumnsWrite} />
                <BackStepBar
                    mode="border"
                    mb
                    onClick={() => {
                        handleToList();
                    }}
                />
                <BoardDocEditor
                    factory={targetBoard}
                    head={<CardHead title={targetBoard.writeTitle} />}
                    board={board}
                    key={doc?._id}
                    boardDoc={doc}
                    onCreated={routerChange ? handleToView : undefined}
                    onDeleted={routerChange ? handleToList : undefined}
                    onUpdated={routerChange ? handleToList : undefined}
                />
            </JDcontainer>
        </BookLayout>
    );
};
export const BoardDocWriteWrap = () => {
    if (typeof window === "undefined") return null;
    return <BoardDocWrite />;
};

export default BoardDocWrite;
