import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import { useSortBanner } from "../../page/homepage/hook/useSortBanner";
import { checkMobile } from "../../utils/isMobile";
import { FileTagManager, TBannerKey } from "../../utils/tagManager";
import { JDicon } from "../icons/Icons";

interface IProp {
    backgroundColor?: string;
    img?: string;
    mobileHide?: boolean;
}

export const PageTopBanner: React.FC<IProp> = ({
    img,
    backgroundColor,
    mobileHide = true,
}) => {
    if (mobileHide && checkMobile()) return null;
    if (!img) return null;
    return (
        <div className="pageTopBanner" style={{ backgroundColor }}>
            <img src={img} />
            <span className="pageTopBanner__closer">
                <JDicon icon="close" />
            </span>
        </div>
    );
};

export const PageTopBannerContextWrap = () => {
    const { homepage } = useContext(AppContext);
    const topBannerImg = useSortBanner(homepage?.bannerImages || []);

    return <PageTopBanner img={topBannerImg.topBannerImgs[0]?.uri || ""} />;
};
