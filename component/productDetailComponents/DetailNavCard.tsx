import {
    autoComma,
    Bold,
    Flex,
    isEmpty,
    IUseModal,
    JDbutton,
    JDcard,
    JDhorizen,
    JDicon,
    Mr,
    Thin,
    Tiny,
} from "@janda-com/front";
import { IJDcardProps } from "@janda-com/front/dist/components/cards/Card";
import { useRouter } from "next/router";
import React from "react";
import { useContext } from "react";
import { Info } from "../../atom/Info";
import { LineCutter } from "../../atom/LineCutter";
import { MiniTable } from "../../atom/miniTable/MiniTable";
import { ShareMaster } from "../../atom/ShareMaster";
import { Red } from "../../atom/shortCut/Short";
import { AppContext } from "../../context/context";
import { useStartChat } from "../../hook/useChatRoom";
import { useuserFindById } from "../../hook/useUser";
import { getTourSummary } from "../../page/tour/components/TourTable";
import { Paths } from "../../pages/index[depre]";
import { Fproduct, Ftour } from "../../types/api";
import { twoDigit } from "../../utils/digits";
import { getRangeStringByNumber } from "../../utils/product";
import { GuideCircle } from "../guideCircle/GuideCircle";
import { InfoBox } from "../infoBox/InfoBox";
import { Head } from "../ProfileForm/ProfileForm";
import { IReviewModalInfo } from "../ReviewModal/ReviewModal";
import { Badges } from "../statusBadges/StatusBadges";
import { WishIcon } from "../wisthIcon/WishIcon";
import LogoComponent from "./DetailNavCardLogo";
import { Introduce } from "./DetailNavCardIntroduce";

interface IProp extends IJDcardProps {
    tours: Ftour[];
    tour: Ftour;
    onSelect: () => void;
    product: Fproduct;
    reviewModalHook: IUseModal<IReviewModalInfo>;
}

export const getMinimumPrice = (tours: Ftour[]): number => {
    const prices = tours.map((tour) => tour.productInfomation.priceAdult);
    return (
        prices
            .filter((v) => typeof v === "number")
            .sort((a, b) => (a as number) - (b as number))[0] || 0
    );
};

export const DetailNavCard: React.FC<IProp> = ({
    tour,
    tours,
    product,
    onSelect,
    reviewModalHook,
    className,
    ...props
}) => {
    const context = useContext(AppContext);
    const { s, l } = context;
    const {
        priceAdult,
        guideNickName,
        guideImage,
        guideId,
        maxMember,
        minMember,
        rangeDay,
        startTime,
        shortDecsription,
        startTimeAmPm,
        startTimeHour,
        startTimeMin,
        title,
    } = product;
    const { totalMember } = tour;
    const { reviewAb } = getTourSummary(context, tour);
    const router = useRouter();

    const { item: guide } = useuserFindById(guideId);

    const { handleToChatRoomOrCreate } = useStartChat(
        guideId,
        guideNickName || ""
    );

    const remain = (maxMember || 0) - totalMember;

    return (
        <div
            className={className}
            style={{
                marginLeft: "3vh",
            }}
        >
            <JDcard {...props} mb style={{ width: "29vh" }}>
                <div>
                    <Flex vCenter between>
                        <Bold flex={{ vEnd: true }} size="h6">
                            {autoComma(
                                getMinimumPrice(tours) || priceAdult || 0
                            )}
                            {s("money_unit")}
                            <Mr mr="small" />
                            <Thin size="normal" color="grey2">
                                {s("startFrom")}
                            </Thin>
                        </Bold>
                        <ShareMaster
                            shareProp={{
                                text: l(shortDecsription),
                                title: l(title),
                                url: location.href,
                            }}
                        >
                            <JDicon
                                mb
                                size="normal"
                                color="grey2"
                                hover
                                icon="share"
                            />
                        </ShareMaster>
                    </Flex>
                    <MiniTable
                        mb
                        labelWidth="6rem"
                        valueWidth="6rem"
                        data={[
                            [
                                {
                                    label: s("tourRange"),
                                    value: getRangeStringByNumber(
                                        rangeDay || 1,
                                        s
                                    ),
                                },
                                {
                                    label: s("party_members"),
                                    value: `${minMember} ~ ${maxMember}`,
                                },
                                {
                                    skip:
                                        !startTimeHour ||
                                        startTimeAmPm === "NONE",
                                    label: s("start_time"),
                                    value: `${startTimeAmPm} ${twoDigit(
                                        startTimeHour
                                    )}:${twoDigit(startTimeMin)}`,
                                },
                            ],
                        ]}
                    />
                    {remain === 0 ? (
                        <Red mb="tiny" size="small">
                            {s("partyIsOvered")} <br />{" "}
                            {s("additionalCallMessage")}
                        </Red>
                    ) : null}
                    <JDbutton
                        mb
                        onClick={onSelect}
                        br="square"
                        size="long"
                        thema="point"
                    >
                        {s("select")}
                    </JDbutton>
                    <WishIcon productId={product._id} mode="button" />
                    <JDhorizen margin={3} />
                    <LogoComponent />
                </div>
            </JDcard>
            <JDcard className="detailNavCard__jdCard">
                <div>
                    <Flex mb vCenter between>
                        <Flex vCenter>
                            <GuideCircle
                                mr
                                guideId={guideId}
                                guideProfile={guideImage?.uri}
                            />
                            <Bold mr>{guideNickName}</Bold>
                        </Flex>
                        <div style={{ width: "min-content" }}>
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
                                {s("talkWith2")}
                            </JDbutton>
                        </div>
                    </Flex>
                </div>

                <div style={{}}>
                    {guide && (
                        <>
                            <Flex mb column>
                                <Info
                                    typho={{
                                        size: "tiny",
                                    }}
                                    mb="tiny"
                                    hide={isEmpty(guide?.regions)}
                                    label={s("workArea")}
                                    value={
                                        <Badges
                                            mb="tiny"
                                            mr="tiny"
                                            className="detailNavCard__badges"
                                            items={guide?.regions || []}
                                        >
                                            {(region) => l(region.label)}
                                        </Badges>
                                    }
                                />
                                <Info
                                    mb="tiny"
                                    label={s("useLanguage")}
                                    hide={isEmpty(guide?.langs)}
                                    value={
                                        <Badges
                                            mb="tiny"
                                            mr="tiny"
                                            className="detailNavCard__badges"
                                            items={guide?.langs}
                                        >
                                            {(item) => s(item)}
                                        </Badges>
                                    }
                                />

                                {guide?.guideCategory && (
                                    <Info
                                        mb="tiny"
                                        label={s("guideType")}
                                        hide={isEmpty(guide?.guideCategory)}
                                        value={
                                            <Badges
                                                className="detailNavCard__badges"
                                                mb="tiny"
                                                mr="tiny"
                                                items={
                                                    guide?.guideCategory || []
                                                }
                                            >
                                                {(guideCat) =>
                                                    l(guideCat.label)
                                                }
                                            </Badges>
                                        }
                                    />
                                )}
                                <Introduce
                                    children={
                                        <LineCutter line={10}>
                                            {l(guide.introduce)}{" "}
                                        </LineCutter>
                                    }
                                />
                            </Flex>
                        </>
                    )}
                    {/* <JDbutton
                        // hide={!reviewAb}
                        mode="border"
                        br="square"
                        size="long"
                        onClick={() => {
                            reviewModalHook.openModal({
                                tour,
                            });
                        }}
                    >
                        {s("reviewWrite")}
                    </JDbutton>
                    <ReviewModalWrap
                        key={reviewModalHook.info?.tour?._id}
                        modalHook={reviewModalHook}
                    /> */}
                </div>
            </JDcard>
            <InfoBox className="detailNavCard__InfoboxWidth">
                <Head
                    headIcon="triWarn"
                    require={false}
                    title={s("wrongPayWarnTitle")}
                    description={s("wrongPayWarnDesc")}
                />
            </InfoBox>
        </div>
    );
};
