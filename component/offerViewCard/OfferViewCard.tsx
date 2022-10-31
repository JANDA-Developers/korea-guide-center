import { Bold, Flex, JDbadge, JDbutton, JDcard, Tiny } from "@janda-com/front";
import { IJDcardProps } from "@janda-com/front/dist/components/cards/Card";
import React from "react";
import { useContext } from "react";
import { Info } from "../../atom/Info";
import { MiniTable } from "../../atom/miniTable/MiniTable";
import { AppContext } from "../../context/context";
import { getOfferSummary, useOfferManage } from "../../hook/useOfferManage";
import { usePaths } from "../../hook/usePaths";
import { TourTable } from "../../page/tour/components/TourTable";
import { Foffer, LANGUAGES } from "../../types/api";
import { AMPM } from "../../types/const";
import { cutStr } from "../../utils/cutStr";
import { yyyymmddRange } from "../../utils/dateFormat";
import { autoComma } from "../../utils/formatter";
import { getDateDiffText } from "../../utils/getDateDiffText";
import { CardBtn, TableBtn } from "../btns/ModalBtn";
import { CardHead } from "../modalHead/ModalHead";
import { Head } from "../ProfileForm/ProfileForm";
import { NewBadge } from "../statusBadges/StatusBadges";

interface IProp extends IJDcardProps {
    offer: Foffer;
}

export const OfferViewCard: React.FC<IProp> = ({ offer, ...props }) => {
    const { l, travlerFormModalHook, s, me, isMaster } = useContext(AppContext);
    const { toProductDetailPage, toGuideProfileDetail } = usePaths();
    const { handleDelete } = useOfferManage();
    const { offerId, status, guideName, wishTour, createdAt, proposalTours } =
        offer;
    const {
        region,
        regionDetail,
        contents,
        price,
        lang,
        langCustom,
        totalCnt,
        adultCnt,
        babyCnt,
        endDate,
        kidsCnt,
        startDate,
        travlers,
        wishMemeo,
        categoryMini,
        travelStartTime,
    } = wishTour;

    const isMyOffer = me?._id === offerId;
    const tableVisible = isMyOffer || isMaster;

    const { deleteAb } = getOfferSummary(offer);

    return (
        <JDcard
            foot={
                deleteAb ? (
                    <Flex>
                        <CardBtn
                            onClick={() => {
                                handleDelete(offer._id);
                            }}
                            mr
                            thema="error"
                        >
                            {s("delete")}
                        </CardBtn>
                    </Flex>
                ) : undefined
            }
            head={
                <CardHead
                    description={
                        <Flex>
                            <Bold mr color="point">
                                {getDateDiffText(createdAt)}
                            </Bold>
                            <NewBadge mr createdAt={createdAt} />
                            <JDbadge thema="primary">{s(status)}</JDbadge>
                        </Flex>
                    }
                    title={cutStr(contents, 60)}
                />
            }
            {...props}
        >
            <div>
                <Flex mb="small" wrap>
                    <Info mr mb hide={!guideName} label={s("guide")}>
                        {guideName}
                    </Info>
                    <Info
                        mb
                        mr
                        label={s("travler")}
                        value={
                            <JDbutton
                                br="square"
                                mode="border"
                                size="small"
                                onClick={() => {
                                    travlerFormModalHook?.openModal({
                                        defaultTravlersInput: travlers || [],
                                    });
                                }}
                            >
                                {s("travler")}
                            </JDbutton>
                        }
                    />

                    <MiniTable
                        labelWidth={131}
                        data={[
                            [
                                {
                                    label: s("category"),
                                    value: (
                                        <div>
                                            {categoryMini?.map((cat) => (
                                                <JDbadge
                                                    mr="tiny"
                                                    mb="tiny"
                                                    key={cat._id}
                                                    thema="grey1"
                                                >
                                                    {l(cat?.label)}
                                                </JDbadge>
                                            ))}
                                        </div>
                                    ),
                                },
                                {
                                    label: s("region"),
                                    value: (
                                        <JDbadge hide={!region} thema="grey1">
                                            {l(region?.label)}
                                        </JDbadge>
                                    ),
                                },
                                {
                                    skip: !startDate || !endDate,
                                    label: s("date"),
                                    value: (
                                        <div>
                                            {yyyymmddRange(startDate, endDate)}
                                        </div>
                                    ),
                                },
                                {
                                    label: s("startDate"),
                                    value: (
                                        <div>
                                            {AMPM(travelStartTime || "AM")}
                                        </div>
                                    ),
                                },
                            ],
                            [
                                {
                                    label: s("price"),
                                    value: <span>{autoComma(price)}</span>,
                                },
                                {
                                    label: s("lang"),
                                    value: (
                                        <JDbadge hide={!lang} thema="grey1">
                                            {s(lang as LANGUAGES)} {langCustom}
                                        </JDbadge>
                                    ),
                                },
                                {
                                    label: s("personnel"),
                                    value: (
                                        <div>
                                            <div>
                                                {s("total")} {totalCnt}
                                                {s("person_unit")}
                                            </div>
                                            <Flex vCenter>
                                                <Tiny mr="tiny">
                                                    {s("adult")}
                                                    {adultCnt}
                                                </Tiny>
                                                <Tiny mr="tiny">
                                                    {s("kid")}
                                                    {kidsCnt}
                                                </Tiny>
                                                <Tiny>
                                                    {s("baby")}
                                                    {babyCnt}
                                                </Tiny>
                                            </Flex>
                                        </div>
                                    ),
                                },
                            ],
                            [
                                {
                                    label: s("regionSelectDetail"),
                                    value: regionDetail || "",
                                },
                            ],
                            [
                                {
                                    label: s("wishContent"),
                                    value: contents || "",
                                },
                            ],
                            [
                                {
                                    label: s("memo"),
                                    value: wishMemeo || "",
                                },
                            ],
                        ]}
                    />
                </Flex>
                {tableVisible && (
                    <div>
                        <Head
                            require={false}
                            description={s("proposalListDesc")}
                            title={s("proposalList")}
                        />
                        <TourTable
                            Controller={(user) => {
                                return (
                                    <div>
                                        <TableBtn
                                            mb
                                            onClick={() => {
                                                toGuideProfileDetail(user._id);
                                            }}
                                        >
                                            {s("guideView")}
                                        </TableBtn>
                                    </div>
                                );
                            }}
                            proposal
                            tours={proposalTours || []}
                        />
                    </div>
                )}
            </div>
        </JDcard>
    );
};
