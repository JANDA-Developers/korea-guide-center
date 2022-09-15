import { Flex, JDhorizen } from "@janda-com/front";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { useStartChat } from "../../hook/useChatRoom";
import Info from "./Info";
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
        <Flex column>
            <Flex className="guideCardWrapper " column>
                <Flex className="regionGuides__infoWrapper">
                    <LeftFlex item={item} />
                    <div className="infoDiv">
                        <div className="infoDiv__guideNickName">
                            {guideNickName}
                        </div>
                        <JDhorizen margin={2} />
                        <Info item={item}></Info>
                    </div>
                </Flex>
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
