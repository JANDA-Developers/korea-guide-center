import { Flex, isEmpty, JDbutton, JDhorizen } from "@janda-com/front";
import { useContext } from "react";
import { Info2 } from "../../atom/Info";
import { GuideCircle2 } from "../guideCircle/GuideCircle";
import { AppContext } from "../../context/context";
import { Badges2 } from "../statusBadges/StatusBadges";
import { Introduce2 } from "../productDetailComponents/DetailNavCardIntroduce";
import { LineCutter } from "../../atom/LineCutter";
import { Paths } from "../../pages/index[depre]";
import router from "next/router";
import { useStartChat } from "../../hook/useChatRoom";
import { filterVisibleProduct } from "../../utils/product";
import { LANGUAGES } from "../../types/api";
import { ProductViewsLineHeader } from "../productViewCard/ProductViewsLineHeader";
import {
    ProductViewCardsWithApi,
    ProductViewCardsWithApi2,
} from "../productViewCard/ProductViewCards";

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
        <Flex
            style={{
                marginBottom: "3vh",
                borderWidth: "1.3px",
                borderStyle: "solid",
                borderColor: "#D5CECE",
                width: "90vh",
                height: "200vh",
                backgroundColor: "",
                alignSelf: "center",
            }}
        >
            <Flex
                style={{
                    flexDirection: "column",
                    width: "21vh",
                }}
            >
                <GuideCircle2
                    mr
                    guideId={guideId}
                    guideProfile={item.profileImage.uri}
                />
                <Flex style={{ width: "min-content", marginLeft: "15px" }}>
                    <JDbutton
                        className="detailNavCard__jdButtonWidth"
                        onClick={() => {
                            router.push(Paths.profile + "/" + guideId);
                        }}
                        mb="small"
                        thema="lightPrimary"
                        size="tiny"
                        mode="flat"
                    >
                        {s("seeMoreAboutGuide")}
                    </JDbutton>
                    <JDbutton
                        className="detailNavCard__jdButtonWidth"
                        onClick={() => {
                            handleToChatRoomOrCreate();
                        }}
                        thema="lightPrimary"
                        size="tiny"
                        mode="flat"
                    >
                        {s("talkWith")}
                    </JDbutton>
                </Flex>
                <br></br>
                <br></br>
                <br></br>
            </Flex>
            <div
                style={{
                    fontWeight: "bold",
                    marginTop: "3vh",
                    fontSize: "1.3em",
                    width: "620px",
                }}
            >
                {guideNickName}
                <JDhorizen margin={2} />
                <Flex mb column>
                    <Info2
                        typho={{
                            size: "tiny",
                        }}
                        mb="tiny"
                        hide={isEmpty(item?.regions)}
                        label={s("workArea")}
                        value={
                            <Badges2
                                mb="tiny"
                                mr="tiny"
                                className="detailNavCard__Badges"
                                items={item?.regions || []}
                            >
                                {(region) => l(region.label)}
                            </Badges2>
                        }
                    />
                    <Info2
                        mb="tiny"
                        label={s("useLanguage")}
                        hide={isEmpty(item?.langs)}
                        value={
                            <Badges2
                                mb="tiny"
                                mr="tiny"
                                className="detailNavCard__Badges"
                                items={item?.langs}
                            >
                                {(item) => s(item)}
                            </Badges2>
                        }
                    />

                    {item?.guideCategory && (
                        <Info2
                            mb="tiny"
                            label={s("guideType")}
                            hide={isEmpty(item?.guideCategory)}
                            value={
                                <Badges2
                                    className="detailNavCard__Badges"
                                    mb="tiny"
                                    mr="tiny"
                                    items={item?.guideCategory || []}
                                >
                                    {(guideCat) => l(guideCat.label)}
                                </Badges2>
                            }
                        />
                    )}
                    <Introduce2
                        children={
                            <LineCutter line={10}>
                                {l(item.introduce)}{" "}
                            </LineCutter>
                        }
                    />
                    {!isEmpty(
                        filterVisibleProduct(
                            item.products || [],
                            router.locale || LANGUAGES.ko
                        )
                    ) && (
                        <div>
                            <ProductViewsLineHeader
                                title={s("viewGuideTours")}
                            />
                            <ProductViewCardsWithApi2
                                queryParam={{
                                    fixingFilter: {
                                        guideId__eq: item._id,
                                    },
                                }}
                            />
                        </div>
                    )}
                </Flex>
            </div>
        </Flex>
    );
}

export default GuideIntro;
