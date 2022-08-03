import { Flex, isEmpty, JDbutton, JDhorizen } from "@janda-com/front";
import { useContext } from "react";
import { Info2 } from "../../atom/Info";
import { AppContext } from "../../context/context";
import { Badges2 } from "../statusBadges/StatusBadges";
import { Introduce2 } from "../productDetailComponents/DetailNavCardIntroduce";
import { LineCutter } from "../../atom/LineCutter";
import router from "next/router";
import { useStartChat } from "../../hook/useChatRoom";
import { filterVisibleProduct } from "../../utils/product";
import { LANGUAGES } from "../../types/api";
import { ProductViewsLineHeader } from "../productViewCard/ProductViewsLineHeader";
import {
    ProductViewCardsWithApi,
    ProductViewCardsWithApi2,
} from "../productViewCard/ProductViewCards";
import LeftFlex from "./LeftFlex";
import Info from "./Info";

function GuideIntro({ item }) {
    const context = useContext(AppContext);
    const { s, l } = context;
    const guideId = item._id;
    const guideNickName = item.nickName;
    const { handleToChatRoomOrCreate } = useStartChat(
        guideId,
        guideNickName || ""
    );
    return (
        <Flex className="guideCardWrapper">
            <LeftFlex item={item} />
            <div className="infoDiv">
                {guideNickName}
                <JDhorizen margin={2} />
                <Info item={item}></Info>
            </div>
        </Flex>
    );
}

export default GuideIntro;
