import {
    Bold,
    Flex,
    getFromUrl,
    JDbutton,
    JDcontainer,
    WindowSize,
} from "@janda-com/front";
import React, { useContext, useEffect } from "react";
import { useBoardDocList } from "../hook/useBoardDoc";
import { ListInitOptions } from "../hook/useListQuery";
import {
    boardDocList,
    boardDocListVariables,
    _BoardFilter,
    _BoardSort,
} from "../types/api";
import { genrateOption } from "../utils/query";
import { useBoardFindByKey } from "../hook/useBoard";
import { AppContext } from "../context/context";
import Pagination from "../component/pagination/Pagination";
import BookLayout from "../component/layout/BookLayout";
import { useRouter } from "next/router";
import { BreadColumn } from "../component/breadColumn/BreadColumn";
import { BoardFacotry, IBoardFacotry } from "../types/board";
import { boardKeys } from "../types/const";
import { BoardDocLines } from "../page/board/components/components/BoardDocLines";
import { BoardListHeader } from "../page/board/components/BoardListHeader";
import { useBoardRoute } from "../hook/useBoardRoute";

export const getBoardSummary = (BoardFacotry: IBoardFacotry) => {
    const { isMaster, me } = useContext(AppContext);

    const hasWritePermission =
        !!isMaster ||
        (me?.role
            ? BoardFacotry.writePermission?.includes(me?.role)
            : undefined);

    return { hasWritePermission };
};

export type TRouteChange = {
    to: "write" | "view" | "list";
    boardKey?: boardKeys;
    docId?: string;
};

interface IProp {
    withOutCatFilter?: boolean;
    layoutHide?: boolean;
    boardKey?: boardKeys;
    routerChange?: (nextRoute: TRouteChange) => void;
    listInitOption?: ListInitOptions<_BoardFilter, _BoardSort>;
    listOption?: genrateOption<boardDocList, boardDocListVariables>;
}

type IDetailRouteProp = {
    boardKey: string;
};

export const BoardDocList: React.FC<IProp> = ({
    boardKey,
    withOutCatFilter,
    listInitOption,
    layoutHide,
    listOption,
    routerChange,
}) => {
    if (!boardKey) {
        boardKey = getFromUrl("boardKey") as boardKeys;
    }

    const { handleToView, handleToWrite } = useBoardRoute({
        boardKey: boardKey as boardKeys,
        routerChange,
    });

    const context = useContext(AppContext);
    const { s, isLogin, loginAnd } = context;
    const router = useRouter();
    const BoardFactory = new BoardFacotry(s);
    const targetBoard = BoardFactory.getBoard(boardKey as boardKeys);

    const { item: board, loading } = useBoardFindByKey(boardKey);

    const { items, paginatorHook, setFilter, pageInfo, getLoading } =
        useBoardDocList(
            {
                fixingFilter: {
                    boardKey__eq: boardKey,
                    ...targetBoard.getFixingFilter?.(context),
                },
            },
            listOption
        );

    useEffect(() => {
        setFilter({
            boardKey__eq: boardKey,
        });
    }, [boardKey]);

    const { hasWritePermission } = getBoardSummary(targetBoard);

    if (loading || getLoading) return null;
    return (
        <BookLayout layoutHide={layoutHide}>
            <JDcontainer verticalPadding size={WindowSize.md}>
                {!withOutCatFilter && (
                    <BoardListHeader
                        currentboardKey={boardKey as boardKeys}
                        mb="huge"
                    />
                )}
                <BreadColumn mb="huge" links={targetBoard.breadColumnsList} />
                <Bold mb>{targetBoard.listTitle}</Bold>
                <BoardDocLines
                    withName={targetBoard.withName}
                    ContentRender={targetBoard.ContentRender}
                    items={items}
                    handleView={handleToView}
                />
                <Pagination
                    mb="huge"
                    totalPageCount={pageInfo.totalPageCount}
                    {...paginatorHook}
                />

                <Flex vCenter center>
                    <JDbutton
                        hide={isLogin && !hasWritePermission}
                        br="square"
                        mb
                        mode="border"
                        size="small"
                        onClick={() => {
                            loginAnd(() => {
                                handleToWrite();
                            });
                        }}
                        label={s("write")}
                    />
                </Flex>
            </JDcontainer>
        </BookLayout>
    );
};

export const BoardDocListWrap = () => {
    if (typeof window === "undefined") return null;
    const boardKey = getFromUrl("boardKey");

    return <BoardDocList key={boardKey} />;
};

export default BoardDocListWrap;
