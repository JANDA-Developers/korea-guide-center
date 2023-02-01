import { Flex, isEmpty, JDalign, JDbutton, Mb } from "@janda-com/front";
import { useRouter } from "next/router";
import { useContext } from "react";
import { JDicon } from "../../../component/icons/Icons";
import BookLayout from "../../../component/layout/BookLayout";
import { ProductViewsLineHeader } from "../../../component/productViewCard/ProductViewsLineHeader";
import { AppContext } from "../../../context/context";
import { useStartChat } from "../../../hook/useChatRoom";
import { useuserFindById } from "../../../hook/useUser";
import { LANGUAGES, userFindById_UserFindById } from "../../../types/api";
import { DEFAULT_PROFILE_IMG } from "../../../types/const";
import { filterVisibleProduct } from "../../../utils/product";
import { Badges } from "../../../component/statusBadges/StatusBadges";
import { Video } from "../../../component/video/Video";
import {
    ProductViewCardsWithApi,
    ProductViewCardsWithApiProfilePage,
} from "../../../component/productViewCard/ProductViewCardsWithApi";

interface IGudeProfilePage {
    guideData: userFindById_UserFindById;
}

const GuideProfile: React.FC<IGudeProfilePage> = () => {
    if (typeof window === "undefined") return null;
    const { l, s } = useContext(AppContext);
    const router = useRouter();
    const key = router.query.key as string;
    const { item } = useuserFindById(key);

    console.log(item);

    const { handleToChatRoomOrCreate } = useStartChat(
        item?._id,
        item?.nickName || undefined
    );

    if (!item) return null;
    const { profileImage, introduce, products, profileVideo, langs } = item;

    return (
        <BookLayout>
            <div>
                <div className="guideProfile__introduceBox">
                    <div className="guideProfile__secter1">
                        {/*가이드 사진 */}
                        {/* 자기소개 박스 왼쪽 */}
                        <Flex
                            mb="small"
                            className="guideProfile__profile"
                            column
                        >
                            <div className="guideProfile__avatarContainer">
                                <img
                                    className="guideProfile__avatar"
                                    src={
                                        profileImage?.uri || DEFAULT_PROFILE_IMG
                                    }
                                />
                            </div>
                            <div>
                                <div className="guideProfile__canLanguageContainer">
                                    <div className="guideProfile__canLanguage">
                                        <span className="guideProfile__earthIcon">
                                            🌎
                                        </span>{" "}
                                        {s("useLanguage")}
                                    </div>
                                    <div className="guideProfile__infolangs">
                                        {langs?.map((i, index) => {
                                            return (
                                                <span className="guideProfile__infolang">
                                                    {s(i)}
                                                </span>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </Flex>
                        {/* 자기소개 박스 오른쪽 */}
                        {/* 이름의 스타일이 secter2에 포함됨 */}
                        <div className="guideProfile__secter2">
                            <h1
                                style={{
                                    fontWeight: "600",
                                }}
                            >
                                {item?.name}
                            </h1>
                            <div className="guideProfile__horizon"></div>
                            <h6 className="guideProfile__subtitle">
                                {s("profileAboutMe")}
                            </h6>
                            <JDalign
                                className="guideProfile__text"
                                mb="largest"
                            >
                                <p>
                                    {l(introduce) ||
                                        s("noIntroductionForLanguage")}
                                </p>
                            </JDalign>
                            <div>
                                <h6 className="guideProfile__subtitle">
                                    {s("profileGuideArea")}
                                </h6>
                                <Flex
                                    className="guideProfile__Badges--wrapper"
                                    mb="huge"
                                    wrap
                                >
                                    <Badges
                                        size="large"
                                        mb="small"
                                        mr="small"
                                        items={item?.regions || []}
                                    >
                                        {(region) => l(region.label)}
                                    </Badges>
                                </Flex>

                                <h6 className="guideProfile__subtitle">
                                    {s("guideType")}
                                </h6>

                                <Flex
                                    className="guideProfile__Badges--wrapper"
                                    mb="huge"
                                    wrap
                                >
                                    <Badges
                                        size="large"
                                        mb="small"
                                        mr="small"
                                        items={item?.guideCategory || []}
                                    >
                                        {(guideCat) => l(guideCat.label)}
                                    </Badges>
                                </Flex>
                                <Flex center>
                                    <JDbutton
                                        className="guideProfile__chatbutton"
                                        mb="largest"
                                        style={{
                                            boxShadow:
                                                "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                                        }}
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
                                </Flex>
                            </div>
                            <div
                                className="guideProfile__tours"
                                onClick={() => {
                                    router.push(`${router.query.key}/products`);
                                }}
                            >
                                <span className="myTours">
                                    {s("guideTourList")}
                                </span>
                                <span className="tourCount">
                                    {products?.length}
                                </span>
                                <svg
                                    width={20}
                                    height={20}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    {!isEmpty(
                        filterVisibleProduct(
                            products || [],
                            (router.locale as LANGUAGES) || LANGUAGES.ko
                        )
                    ) && (
                        <Flex hide={!profileVideo?.uri} mb="large">
                            <Video
                                className="guideProfile__video"
                                src={profileVideo?.uri}
                            />
                        </Flex>
                    )}
                    {!isEmpty(
                        filterVisibleProduct(
                            products || [],
                            (router.locale as LANGUAGES) || LANGUAGES.ko
                        )
                    ) && (
                        <div>
                            <div className="guideProfile__viewTours">
                                <ProductViewsLineHeader
                                    title={s("viewGuideTours")}
                                    onSeeMore={() => {
                                        router.push(
                                            `${router.query.key}/products`
                                        );
                                    }}
                                    description={s("profilePageSliderNoti")}
                                />
                            </div>
                            <ProductViewCardsWithApiProfilePage
                                queryParam={{
                                    fixingFilter: {
                                        guideId__eq: item._id,
                                    },
                                }}
                            />
                        </div>
                    )}

                    <Mb mb="largest" />
                </div>
            </div>
        </BookLayout>
    );
};

export default GuideProfile;
