import { Bold, JDcontainer } from "@janda-com/front";
import React, { useContext } from "react";
import { Empty } from "../atom/Empty";
import BookLayout from "../component/layout/BookLayout";
import { AppContext } from "../context/context";
import { MyChatRooms } from "../page/my/ChatRooms";

interface IProp {}

export const MyChatRoomsPage: React.FC<IProp> = () => {
    const { s } = useContext(AppContext);
    if (typeof window === "undefined") return null;
    return (
        <BookLayout>
            <JDcontainer verticalPadding>
                <Bold size="h6">{s("message")}</Bold>
                <MyChatRooms Empty={<Empty msg={s("noMessage")} />} />
            </JDcontainer>
        </BookLayout>
    );
};

export default MyChatRoomsPage;
