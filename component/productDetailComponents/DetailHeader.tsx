import { Bold, Flex, JDbadge, JDhorizen, JDtypho } from "@janda-com/front";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { Fproduct, Ftour } from "../../types/api";
import { IconInfo } from "../iconInfo/IconInfo";
import { RatingStar } from "../rating/Rating";
import { Badges } from "../statusBadges/StatusBadges";

interface IProp {
    tour: Ftour;
    product: Fproduct;
}

export const DetailHeader: React.FC<IProp> = ({ tour, product }) => {
    const { l, s } = useContext(AppContext);
    const { title, category, languages, address } = tour.productInfomation;
    const { rating, reviewCount } = product;
    return (
        <div>
            <Bold size="h4">{l(title)}</Bold>
            <Flex vCenter>
                <JDbadge mr thema="point">
                    {l(category?.label)}
                </JDbadge>
                <RatingStar readonly initialRating={rating || 0} />
                <JDtypho
                    size="small"
                    color="grey3"
                >{`(${reviewCount})`}</JDtypho>
            </Flex>
            <JDhorizen margin={3} />
            <IconInfo
                mb
                icon="global"
                label={<Badges items={languages || []}>{(l) => s(l)}</Badges>}
            />
            <IconInfo
                hide={!!l(address)}
                icon="location"
                label={l(address) || ""}
            />
        </div>
    );
};
