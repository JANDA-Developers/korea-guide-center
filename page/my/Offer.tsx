import { isEmpty, JDcontainer } from "@janda-com/front";
import React from "react";
import { useContext } from "react";
import { Empty } from "../../atom/Empty";
import { BackStepBar } from "../../component/backstepBar/BackstepBar";
import { OfferViewCard } from "../../component/offerViewCard/OfferViewCard";
import { PageHeader } from "../../component/pageHeader/PageHeader";
import { AppContext } from "../../context/context";
import { useOfferList } from "../../hook/useOffer";
import { Paths } from "../../pages/index[depre]";
import { _OfferSort } from "../../types/api";

interface IProp {}

export const MyOffers: React.FC<IProp> = () => {
    const { me, s } = useContext(AppContext);
    const { items } = useOfferList({
        fixingFilter: {
            offerId__eq: me?._id,
        },
        initialSort: [_OfferSort.createdAt__desc],
    });
    return (
        <JDcontainer verticalPadding>
            <BackStepBar
                hide={!isEmpty(items)}
                mode="border"
                mb
                label={s("writeCustomTour")}
                go={Paths.offer}
            />
            <Empty empty={items} msg={s("noSuggestOffer")} />
            {items.map((item) => (
                <OfferViewCard
                    mb
                    key={item._id + "offerViewCard"}
                    offer={item}
                />
            ))}
        </JDcontainer>
    );
};
