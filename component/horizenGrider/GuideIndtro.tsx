import { Flex, JDbutton, JDhorizen } from "@janda-com/front";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { useStartChat } from "../../hook/useChatRoom";
import Info from "./Info";
import { Fuser } from "../../types/api";
import LeftFlex from "./LeftFlex";

interface IGuideIntroProps {
    item: any;
}

function GuideIntro({ item }: IGuideIntroProps) {
    const context = useContext(AppContext);
    const { s, l } = context;
    const guideId = item._id;
    const guideNickName = item.nickName;
    const { handleToChatRoomOrCreate } = useStartChat(
        guideId,
        guideNickName || ""
    );
    return (
        <Flex className="guideCardWrapper" column>
            <Flex>
                <LeftFlex item={item} />
                <div className="infoDiv">
                    {guideNickName}
                    <JDhorizen margin={2} />
                    <Info item={item}></Info>
                </div>
            </Flex>
            <button
                className="detailNavCard__jdButtonWidth3"
                onClick={() => {
                    handleToChatRoomOrCreate();
                }}
            >
                {s("talkWith")}
            </button>
        </Flex>
    );
}

export default GuideIntro;
