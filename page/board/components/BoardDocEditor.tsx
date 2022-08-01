import { JDcard } from "@janda-com/front";
import { CardProps } from "@janda-com/front/dist/components/cards/Card";
import React from "react";
import { CardBtn } from "../../../component/btns/ModalBtn";
import { useBoardDocManage } from "../../../hook/useBoardDoc";
import { Fboard, FboardDoc } from "../../../types/api";
import { IBoardFacotry } from "../../../types/board";
import { BoardInputs } from "./components/BoardInputs";

interface IProp extends CardProps {
    board: Fboard;
    onDeleted?: (doc: FboardDoc) => void;
    onUpdated?: (doc: FboardDoc) => void;
    onCreated?: (doc: FboardDoc) => void;
    boardDoc?: FboardDoc;
    factory: IBoardFacotry;
}

export const BoardDocEditor: React.FC<IProp> = ({
    board,
    onCreated,
    onDeleted,
    onUpdated,
    boardDoc,
    factory,
    ...props
}) => {
    const boardDocManageHook = useBoardDocManage({
        board,
        onCreated,
        onDeleted,
        onUpdated,
        boardDoc,
    });

    const {
        handleCreateBoard,
        handleDelete,
        handleUpdateBoard,
        isCreate,
        setDocInput,
        attributes,
        docInput,
        setAttributes,
    } = boardDocManageHook;

    return (
        <JDcard
            mode="border"
            foot={
                <div>
                    <CardBtn
                        mr
                        thema="primary"
                        hide={!isCreate}
                        onClick={handleCreateBoard}
                        label="생성하기"
                    />
                    <CardBtn
                        mr
                        thema="primary"
                        hide={isCreate}
                        onClick={handleUpdateBoard}
                        label="수정하기"
                    />
                    <CardBtn
                        mr
                        thema="error"
                        hide={isCreate}
                        onClick={handleDelete}
                        label="삭제하기"
                    />
                </div>
            }
            {...props}
        >
            <div>
                {factory.editor?.(boardDocManageHook)}
                {/* // 각 보드타입에 들어가는 인풋들 추가로 여기 놓자. */}
                <BoardInputs
                    keys={board.fields as any[]}
                    docInput={docInput}
                    setDocInput={setDocInput}
                    attrs={attributes}
                    setAttrs={setAttributes}
                />
            </div>
        </JDcard>
    );
};
