import { Flex, isEmpty, JDhorizen } from "@janda-com/front";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { useStartChat } from "../../hook/useChatRoom";
import { LANGUAGES } from "../../types/api";
import { filterVisibleProduct } from "../../utils/product";
import { ProductViewCardsWithApi } from "../productViewCard/ProductViewCardsWithApi";
import { ProductViewsLineHeader } from "../productViewCard/ProductViewsLineHeader";
import Info from "./Info";
import LeftFlex from "./LeftFlex";

interface IGuideIntroProps {
    item: any;
}

function GuideIntro({ item }: IGuideIntroProps) {
    const router = useRouter();
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
                <div>
                    {!isEmpty(
                        filterVisibleProduct(
                            item.products || [],
                            (router.locale as LANGUAGES) || LANGUAGES.ko
                        )
                    ) && (
                        <div style={{ marginTop: "1vh", padding: "24px" }}>
                            <ProductViewsLineHeader title={s("guideTours")} />
                            <JDhorizen margin={2} />
                            <ProductViewCardsWithApi
                                queryParam={{
                                    fixingFilter: {
                                        guideId__eq: item._id,
                                    },
                                }}
                            />
                        </div>
                    )}
                </div>
                <button
                    className="detailNavCard__jdButtonWidth3"
                    onClick={() => {
                        handleToChatRoomOrCreate();
                    }}
                >
                    {s("talkWith")}
                </button>
            </Flex>
        </Flex>
    );
}

export default GuideIntro;
