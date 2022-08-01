import {
    Flex,
    getFromUrl,
    JDalign,
    JDbutton,
    JDcard,
    JDcontainer,
    JDdocHeader,
    JDhorizen,
    JDtypho,
    WindowSize,
} from "@janda-com/front";
import React from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { BackStepBar } from "../component/backstepBar/BackstepBar";
import { BreadColumn } from "../component/breadColumn/BreadColumn";
import { CommentViewer } from "../component/commentView/CommentView";
import BookLayout from "../component/layout/BookLayout";
import { AppContext } from "../context/context";
import { useBoardDocDelete, useBoardDocFindById } from "../hook/useBoardDoc";
import { useCommentManage } from "../hook/useComment";
import { CommentTarget, FboardDoc } from "../types/api";
import { BoardFacotry, IBoardFacotry } from "../types/board";
import { boardKeys } from "../types/const";
import { yyyymmddHHmm } from "../utils/dateFormat";
import { TRouteChange } from "./BoardList";
import { useBoardRoute } from "../hook/useBoardRoute";

export const getBoardDocSummary = (
    boardFactory: IBoardFacotry,
    boardDoc: FboardDoc
) => {
    const { hasAnswer } = boardFactory;
    const { me, isMaster } = useContext(AppContext);
    const { authorId } = boardDoc;
    const isMyBoardDoc = me?._id === authorId;
    const editable = isMaster || isMyBoardDoc;
    const answerAble = hasAnswer && isMaster;
    const deleteAb = isMyBoardDoc || isMaster;

    const hasWritePermission =
        !!isMaster ||
        (me?.role
            ? boardFactory.writePermission?.includes(me?.role)
            : undefined);

    return { answerAble, editable, deleteAb, hasWritePermission };
};

interface IProp {
    docId?: string;
    boardKey?: boardKeys;
    routerChange?: (nextRoute: TRouteChange) => void;
    layoutHide?: boolean;
}

export const BoardDocView: React.FC<IProp> = ({
    docId,
    boardKey,
    routerChange,
    layoutHide,
}) => {
    if (typeof window === "undefined") return null;
    if (!boardKey) {
        boardKey = getFromUrl("boardKey") as boardKeys;
    }
    if (!docId) docId = getFromUrl("docId") || "";

    const history = useHistory();
    const { handleToList, handleToWrite } = useBoardRoute({
        boardKey: boardKey as boardKeys,
        routerChange,
    });
    const [deleteMu] = useBoardDocDelete({
        onCompleteSucess: () => {
            history.go(-1);
        },
    });
    const { handleCreate: handleCommentWrite } = useCommentManage();
    const { s } = useContext(AppContext);
    const { item: doc } = useBoardDocFindById(docId);

    if (!doc) return null;
    const { title } = doc;

    const BoardFactory = new BoardFacotry(s);
    const targetBoard = BoardFactory.getBoard(boardKey as boardKeys);

    const { answerAble, editable, deleteAb } = getBoardDocSummary(
        targetBoard,
        doc
    );

    const handleDelete = () => {
        deleteMu({
            variables: {
                boardDocId: doc._id,
            },
        });
    };

    return (
        <BookLayout layoutHide={layoutHide}>
            <JDcontainer verticalPadding size={WindowSize.md}>
                <BreadColumn mb="huge" links={targetBoard.breadColumnsView} />
                <JDcard mb="huge" mode="border">
                    <div>
                        <JDdocHeader>{title}</JDdocHeader>
                        <JDtypho
                            size="tiny"
                            mb="largest"
                            flex={{ between: true, column: true }}
                            color="grey2"
                        >
                            {yyyymmddHHmm(doc.createdAt)}{" "}
                            {/* <JDtypho color="grey2">글쓴이 {doc.authorName}</JDtypho>{" "} */}
                        </JDtypho>
                        <div
                            className="ck-content"
                            dangerouslySetInnerHTML={{
                                __html: doc.contents,
                            }}
                        />
                    </div>
                </JDcard>
                <Flex end>
                    <JDbutton
                        onClick={() => {
                            handleToList(doc);
                        }}
                        size="large"
                        mode="flat"
                        thema="primary"
                    >
                        목록
                    </JDbutton>
                </Flex>
                <JDalign mb="huge">
                    {doc.recentComment.map((rc) => (
                        <div key={rc._id}>
                            <JDhorizen margin={3} />
                            <CommentViewer comment={rc} />
                        </div>
                    ))}
                </JDalign>
                <Flex>
                    <JDbutton
                        hide={!editable}
                        br="square"
                        mr
                        mode="border"
                        onClick={() => {
                            handleToWrite(doc);
                        }}
                    >
                        수정하기
                    </JDbutton>
                    <JDbutton
                        mr
                        hide={!answerAble}
                        br="square"
                        mode="border"
                        onClick={() => {
                            handleCommentWrite({
                                target: CommentTarget.BOARD,
                                targetId: doc._id,
                            });
                        }}
                    >
                        답변하기
                    </JDbutton>
                    <JDbutton
                        hide={!deleteAb}
                        br="square"
                        thema="error"
                        mode="border"
                        onClick={handleDelete}
                    >
                        삭제하기
                    </JDbutton>
                </Flex>
            </JDcontainer>
        </BookLayout>
    );
};

export const BoardDocViewWrap = () => {
    if (typeof window === "undefined") return null;
    return <BoardDocView />;
};

export default BoardDocView;
