import { Bold, Flex, JDbutton } from "@janda-com/front";
import React from "react";
import { useContext } from "react";
import { Red } from "../../atom/shortCut/Short";
import { AppContext } from "../../context/context";
import { useStartChat } from "../../hook/useChatRoom";
import { Fproduct, Ftour } from "../../types/api";
import { GuideCircle } from "../guideCircle/GuideCircle";
import { WishIcon } from "../wisthIcon/WishIcon";

interface IProp {
    tours: Ftour[];
    tour: Ftour;
    onSelect: () => void;
    product: Fproduct;
}

export const DetailNavCardMobile: React.FC<IProp> = ({
    onSelect,
    product,
    tours,
    tour,
}) => {
    const { s } = useContext(AppContext);
    const { guideNickName, guideImage, guideId, maxMember, minMember } =
        product;
    const { totalMember } = tour;

    const { handleToChatRoomOrCreate } = useStartChat(
        guideId,
        guideNickName || ""
    );

    const remain = (maxMember || 0) - totalMember;

    return (
        <div className="detailNavCardMobile">
            {remain === 0 ? (
                <Red mb="tiny" size="small">
                    모집이 마감되었어요. <br /> 추가 예약은 전화 부탁드립니다.
                </Red>
            ) : (
                <div>
                    <Flex mb vCenter between>
                        <Flex vCenter>
                            <GuideCircle
                                mr
                                guideId={guideId}
                                guideProfile={guideImage?.uri}
                            />
                            <Bold>
                                {s("guide")}
                                {` `}
                                {guideNickName}
                            </Bold>
                        </Flex>
                        <JDbutton
                            onClick={() => {
                                handleToChatRoomOrCreate();
                            }}
                            thema="lightPrimary"
                            mode="flat"
                        >
                            {s("talkWith")}
                        </JDbutton>
                    </Flex>

                    <Flex mb>
                        <WishIcon
                            buttonprops={{
                                size: undefined,
                                mr: "normal",
                                padding: "small",
                            }}
                            mode="button"
                            withOutLabel
                            productId={product._id}
                        />
                        <JDbutton
                            onClick={onSelect}
                            br="square"
                            size="long"
                            thema="primary"
                        >
                            {s("select")}
                        </JDbutton>
                    </Flex>
                </div>
            )}
        </div>
    );
};
