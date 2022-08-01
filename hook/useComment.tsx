import { getRefetch } from "@janda-com/front";
import { useContext } from "react";
import { BOARD_FIND_BY_ID } from "../apollo/gql/board";
import { BOARDDOC_FIND_BY_ID, BOARDDOC_LIST } from "../apollo/gql/boardDoc";
import {
    COMMENT_CREATE,
    COMMENT_UPDATE,
    COMMENT_DELETE,
    COMMENT_LIST,
} from "../apollo/gql/comment";
import { REVIEW_LIST } from "../apollo/gql/review";
import { ME } from "../apollo/gql/user";
import { Red } from "../atom/shortCut/Short";
import { JDicon } from "../component/icons/Icons";
import { AppContext } from "../context/context";
import {
    commentCreate,
    commentCreateVariables,
    commentUpdate,
    commentUpdateVariables,
    commentList_CommentList_items,
    commentDelete,
    commentDeleteVariables,
    commentList,
    commentListVariables,
    _CommentFilter,
    _CommentSort,
    CommentTarget,
    Fcomment,
} from "../types/api";
import {
    generateFindQuery,
    generateListQueryHook,
    generateMutationHook,
} from "../utils/query";

export const useCommentList = generateListQueryHook<
    _CommentFilter,
    _CommentSort,
    commentList,
    commentListVariables,
    commentList_CommentList_items
>(COMMENT_LIST, { initialSort: [_CommentSort.createdAt__desc] });
export const useCommentCreate = generateMutationHook<
    commentCreate,
    commentCreateVariables
>(COMMENT_CREATE, {
    ...getRefetch(
        BOARDDOC_FIND_BY_ID,
        BOARDDOC_LIST,
        REVIEW_LIST,
        COMMENT_LIST,
        ME
    ),
});
export const useCommentDelete = generateMutationHook<
    commentDelete,
    commentDeleteVariables
>(COMMENT_DELETE, {
    ...getRefetch(
        BOARDDOC_FIND_BY_ID,
        BOARDDOC_LIST,
        REVIEW_LIST,
        COMMENT_LIST,
        ME
    ),
});
export const useCommentUpdate = generateMutationHook<
    commentUpdate,
    commentUpdateVariables
>(COMMENT_UPDATE, {
    ...getRefetch(
        BOARDDOC_FIND_BY_ID,
        BOARDDOC_LIST,
        REVIEW_LIST,
        COMMENT_LIST,
        ME
    ),
});

interface ICommentCreateInput {
    target: CommentTarget;
    targetId: string;
    message?: string;
}
interface ICommentUpdateInput {
    commentId: string;
    message?: string;
    defaultMessage?: string;
}

export const getCommentSummary = (comment: Fcomment) => {
    const { me, isMaster } = useContext(AppContext);

    const myComment = me?._id === comment?._id;

    const deleteAb = isMaster;
    const updateAb = myComment;

    return { deleteAb, myComment, updateAb };
};

export const useCommentManage = () => {
    const { confirmModalHook, promptModalHook } = useContext(AppContext);
    const [commentCreate] = useCommentCreate();
    const [commentUpdate] = useCommentUpdate();
    const [commentDelete] = useCommentDelete();

    const handleCreate = (createInput: ICommentCreateInput) => {
        const { target, targetId, message } = createInput;

        const create = (message: string) => {
            commentCreate({
                variables: {
                    input: { content: message },
                    target: target || CommentTarget.REVIEW,
                    targetId,
                },
            });
        };

        if (!message) {
            promptModalHook.openModal({
                title: "답변달기",
                messageLabel: "답변내용",
                callBack: (message: string) => {
                    create(message);
                    promptModalHook.closeModal();
                },
            });
        }
        if (message) {
            create(message);
        }
    };

    const handleDelete = (commentId: string) => {
        confirmModalHook.openModal({
            title: "정말로 삭제 하시겠습니까?",
            content: (
                <Red>
                    <JDicon icon="triWarn" /> 정말로 댓글을 삭제하십니까?
                </Red>
            ),
            onContinue: () => {
                commentDelete({
                    variables: {
                        commentId,
                    },
                });
            },
        });
    };

    const handleUpdate = (updateInput: ICommentUpdateInput) => {
        const { commentId, message, defaultMessage } = updateInput;

        const update = (message: string) => {
            commentUpdate({
                variables: {
                    input: { content: message },
                    commentId,
                },
            });
        };

        if (!message)
            promptModalHook.openModal({
                title: "답변수정",
                defaultValue: defaultMessage,
                messageLabel: "수정내용",
                callBack: (message: string) => {
                    update(message);
                },
            });

        if (message) {
            update(message);
        }
    };

    return { handleCreate, handleDelete, handleUpdate };
};
