import {
    Bold,
    Flex,
    isEmpty,
    JDalign,
    JDavatar,
    JDbutton,
    JDcontainer,
    JDhorizen,
    Mb,
    WindowSize,
} from "@janda-com/front";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Img } from "../../atom/Image";
import { JDicon } from "../../component/icons/Icons";
import BookLayout from "../../component/layout/BookLayout";
import { ProductViewCardsWithApi } from "../../component/productViewCard/ProductViewCards";
import { ProductViewsLineHeader } from "../../component/productViewCard/ProductViewsLineHeader";
import { AppContext } from "../../context/context";
import { useStartChat } from "../../hook/useChatRoom";
import { useuserFindById } from "../../hook/useUser";
import { LANGUAGES, userFindById_UserFindById } from "../../types/api";
import { DEFAULT_BG_IMG, DEFAULT_PROFILE_IMG } from "../../types/const";
import { filterVisibleProduct } from "../../utils/product";
import { Badges } from "../../component/statusBadges/StatusBadges";
import { Video } from "../../component/video/Video";
import { SNSIcons } from "../../component/snsInput/SNSIcons";

interface IGudeProfilePage {
    guideData: userFindById_UserFindById;
}

const GuideProfile: React.FC<IGudeProfilePage> = () => {
    if (typeof window === "undefined") return null;
    const { l, s } = useContext(AppContext);
    const router = useRouter();
    const key = router.query.key as string;
    const { item } = useuserFindById(key);

    const { handleToChatRoomOrCreate } = useStartChat(
        item?._id,
        item?.nickName || undefined
    );

    if (!item) return null;
    const {
        profileImage,
        introduce,
        products,
        profileVideo,
        profileMediumImage,
    } = item;

    return (
        <BookLayout>
            <div className="guideProfile">
                <div className="guideProfile__bg">
                    <img
                        className="guideProfile__bgimg"
                        src={item.profileBgImage?.uri || DEFAULT_BG_IMG}
                    />
                    <img
                        className="guideProfile__bgimg"
                        src={item.profileBgImage?.uri || DEFAULT_BG_IMG}
                    />
                    <img
                        className="guideProfile__bgimg"
                        src={item.profileBgImage?.uri || DEFAULT_BG_IMG}
                    />
                    <img
                        className="guideProfile__bgimg"
                        src={item.profileBgImage?.uri || DEFAULT_BG_IMG}
                    />
                </div>
                <div className="guideProfile__introduceBox">
                    <div className="guideProfile__secter1">
                        {/*가이드 사진 */}
                        {/* 자기소개 박스 왼쪽 */}
                        <Flex
                            mb="small"
                            className="guideProfile__profile"
                            center
                            vCenter
                            column
                        >
                            <JDavatar
                                mb
                                size="largest2"
                                img={profileImage?.uri || DEFAULT_PROFILE_IMG}
                            />
                        </Flex>
                        {/* 자기소개 박스 오른쪽 */}
                        {/* 이름의 스타일이 secter2에 포함됨 */}
                        <div className="guideProfile__secter2">
                            <Bold mb size="h6">
                                {item?.nickName}
                            </Bold>
                            <div className="guideProfile__horizon"></div>
                            <JDalign
                                className="guideProfile__text"
                                mb="largest"
                            >
                                {l(introduce) || s("noIntroductionForLanguage")}
                            </JDalign>
                        </div>
                    </div>
                    <JDbutton
                        mb="largest"
                        onClick={() => {
                            handleToChatRoomOrCreate(
                                item._id,
                                item.nickName || ""
                            );
                        }}
                        mode="border"
                    >
                        <JDicon mr icon="chat" />
                        {s("talkWith")}
                    </JDbutton>
                    <Flex mb="huge" center wrap>
                        <Badges
                            size="large"
                            mb="small"
                            mr="small"
                            items={item?.regions || []}
                        >
                            {(region) => l(region.label)}
                        </Badges>
                        <Badges
                            size="large"
                            mb="small"
                            mr="small"
                            items={item?.guideCategory || []}
                        >
                            {(guideCat) => l(guideCat.label)}
                        </Badges>
                    </Flex>
                    <Flex hide={!profileVideo?.uri} mb="large">
                        <Video
                            className="guideProfile__video"
                            src={profileVideo?.uri}
                        />
                    </Flex>
                    {!isEmpty(
                        filterVisibleProduct(
                            products || [],
                            (router.locale as LANGUAGES) || LANGUAGES.ko
                        )
                    ) && (
                        <div className="guideProfile__productcard">
                            <ProductViewsLineHeader
                                title={s("viewGuideTours")}
                            />
                            <ProductViewCardsWithApi
                                queryParam={{
                                    fixingFilter: {
                                        guideId__eq: item._id,
                                    },
                                }}
                            />
                        </div>
                    )}
                    <Mb mb="largest" />
                    <SNSIcons mb="largest" sns={item.sns} />
                </div>
            </div>
        </BookLayout>
    );
};

export default GuideProfile;
