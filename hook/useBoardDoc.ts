import { getRefetch } from "@janda-com/front";
import { useRouter } from "next/router";
import { useState } from "react";
import {
    BOARDDOC_FIND_BY_ID,
    BOARDDOC_CREATE,
    BOARDDOC_DELETE,
    BOARDDOC_LIST,
    BOARDDOC_UPDATE,
} from "../apollo/gql/boardDoc";
import { ME } from "../apollo/gql/user";
import { Paths } from "../pages/index[depre]";
import {
    boardDocCreate,
    boardDocCreateVariables,
    boardDocUpdate,
    boardDocUpdateVariables,
    boardDocDelete,
    boardDocDeleteVariables,
    boardDocFindById,
    boardDocFindByIdVariables,
    boardDocList,
    boardDocListVariables,
    _BoardFilter,
    _BoardSort,
    boardDocFindById_BoardDocFindById,
    boardDocList_BoardDocList_items,
    _BoardDocFilter,
    _BoardDocSort,
    Fboard,
    FboardDoc,
    BoardDocInput,
} from "../types/api";
import { omits } from "../utils/omits";
import { completeMsg } from "../utils/onCompletedMessage";
import {
    generateFindQuery,
    generateListQueryHook,
    generateMutationHook,
} from "../utils/query";
import { useCopy } from "./useCopy";

export const useBoardDocFindById = generateFindQuery<
    boardDocFindById,
    boardDocFindByIdVariables,
    boardDocFindById_BoardDocFindById
>("boardDocId", BOARDDOC_FIND_BY_ID);
export const useBoardDocList = generateListQueryHook<
    _BoardDocFilter,
    _BoardDocSort,
    boardDocList,
    boardDocListVariables,
    boardDocList_BoardDocList_items
>(BOARDDOC_LIST, { initialSort: [_BoardDocSort.createdAt__desc] });
export const useBoardDocCreate = generateMutationHook<
    boardDocCreate,
    boardDocCreateVariables
>(BOARDDOC_CREATE, { ...getRefetch(BOARDDOC_LIST, ME) });
export const useBoardDocDelete = generateMutationHook<
    boardDocDelete,
    boardDocDeleteVariables
>(BOARDDOC_DELETE, { ...getRefetch(BOARDDOC_LIST, ME) });
export const useBoardDocUpdate = generateMutationHook<
    boardDocUpdate,
    boardDocUpdateVariables
>(BOARDDOC_UPDATE, { ...getRefetch(BOARDDOC_LIST) });

export default "";

interface IuseBoardDocManageConfig {
    onCreated?: (boarDoc: FboardDoc) => void;
    onUpdated?: (boarDoc: FboardDoc) => void;
    onDeleted?: (boarDoc: FboardDoc) => void;
    board: Fboard;
    boardDoc?: FboardDoc;
}

export type TUseBoardDocManage = ReturnType<typeof useBoardDocManage>;
export const useBoardDocManage = ({
    board,
    onCreated,
    onDeleted,
    onUpdated,
    boardDoc,
}: IuseBoardDocManageConfig) => {
    const router = useRouter();
    const [attributes, setAttributes] = useCopy(board.inputs);
    const isCreate = !boardDoc;
    const [docInput, setDocInput] = useState<BoardDocInput>({
        title: boardDoc?.title || "",
        contents: boardDoc?.contents || "",
        tags: boardDoc?.tags || [],
        attrs: boardDoc?.attrs || board.inputs,
        isOpen: boardDoc?.isOpen || false,
        type: boardDoc?.type || "",
    });

    const [createBoard] = useBoardDocCreate({
        onCompleted: ({ BoardDocCreate }) => {
            if (completeMsg(BoardDocCreate, "글쓰기가 완료 되었습니다")) {
                if (onCreated) {
                    onCreated(BoardDocCreate.data!);
                    return;
                }
                router.push(
                    Paths.boardView +
                        `?boardKey=${BoardDocCreate.data?.boardKey}&docId=${BoardDocCreate.data?._id}`
                );
            }
        },
    });
    const [updateBoard] = useBoardDocUpdate({
        onCompleted: ({ BoardDocUpdate }) => {
            if (completeMsg(BoardDocUpdate, "업데이트 완료")) {
                if (onUpdated) {
                    onUpdated(BoardDocUpdate.data!);
                    return;
                }
                router.push(
                    Paths.boardView +
                        `?boardKey=${BoardDocUpdate.data?.boardKey}&docId=${BoardDocUpdate.data?._id}`
                );
            }
        },
    });
    const [deleteBoard] = useBoardDocDelete({
        onCompleted: ({ BoardDocDelete }) => {
            if (completeMsg(BoardDocDelete, "삭제 완료")) {
                if (onDeleted) {
                    onDeleted(BoardDocDelete.data!);
                    return;
                }
                router.push(
                    Paths.boardList +
                        `?boardKey=${BoardDocDelete.data?.boardKey}`
                );
            }
        },
    });

    const handleCreateBoard = () => {
        createBoard({
            variables: {
                boardKey: board.key,
                input: {
                    ...omits(docInput),
                    attrs: omits(attributes),
                },
            },
        });
    };

    const handleUpdateBoard = () => {
        updateBoard({
            variables: {
                boardDocId: boardDoc!._id,
                input: {
                    ...(omits(docInput) as any),
                    attrs: omits(attributes),
                },
            },
        });
    };

    const handleDelete = () => {
        deleteBoard({
            variables: {
                boardDocId: boardDoc!._id,
            },
        });
    };

    return {
        boardDoc,
        board,
        handleDelete,
        handleUpdateBoard,
        handleCreateBoard,
        isCreate,
        setDocInput,
        docInput,
        attributes,
        setAttributes,
    };
};
