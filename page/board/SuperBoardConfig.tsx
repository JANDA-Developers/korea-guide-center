import { JDcard } from "@janda-com/front";
import React from "react";
import { useHistory } from "react-router";
import { useBoardList } from "../../hook/useBoard";
import DotButton from "../../component/dotButton/DotButton";
import { boardList_BoardList_items } from "../../types/api";
import { GuidePath } from "../GuideRouter";
import { BoardCard } from "./BoardCard";

interface IProp {}

export const SuperBoardConfig: React.FC<IProp> = () => {
    const { items: boards } = useBoardList();
    const history = useHistory();

    const handleToDetail = (board: boardList_BoardList_items) => () => {
        history.push(GuidePath.boardConfigDetail + "/" + board._id);
    };

    const handleWrite = () => {
        history.push(GuidePath.boardConfigDetail);
    };

    return (
        <div>
            {boards.map((board) => (
                <BoardCard
                    mb
                    hover
                    board={board}
                    key={board._id}
                    onClick={handleToDetail(board)}
                />
            ))}
            <DotButton onClick={handleWrite}>작성하기</DotButton>
        </div>
    );
};

export default SuperBoardConfig;
