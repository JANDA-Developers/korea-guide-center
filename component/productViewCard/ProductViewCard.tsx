import {
    Bold,
    Flex,
    IJDalignProp,
    JDalign,
    JDavatar,
    JDtypho,
    Small,
    Tiny,
} from "@janda-com/front";
import { useRouter } from "next/router";
import React from "react";
import { useContext, useState } from "react";
import { Img } from "../../atom/Image";
import { LineCutter } from "../../atom/LineCutter";
import { Tip } from "../../atom/tip/Tip";
import { AppContext } from "../../context/context";
import { Paths } from "../../pages/index[depre]";
import { Fproduct } from "../../types/api";
import { beforeExtention } from "../../utils/fileExtendDivider";
import { autoComma } from "../../utils/formatter";
import { GuideCircle } from "../guideCircle/GuideCircle";
import { RatingStar } from "../rating/Rating";
import { ResolutionImg } from "../resolutionImg/ResoulutionImg";
import { WishIcon } from "../wisthIcon/WishIcon";

export interface IProductViewCard extends IJDalignProp {
    product: Fproduct;
    withoutLink?: boolean;
    hideWishIcon?: boolean;
}

export const ProductViewCard: React.FC<IProductViewCard> = ({
    product,
    className,
    hideWishIcon = false,
    withoutLink = false,
    ...alignProp
}) => {
    const [imgLoaded, setImgLoaded] = useState(false);
    const router = useRouter();
    const { l, s } = useContext(AppContext);
    const {
        category,
        region,
        thumbNail,
        guideImage,
        rating,
        reviewCount,
        guideId,
        guideNickName,
    } = product;
    return (
        <JDalign
            className={`productViewCard ${className}`}
            {...alignProp}
            onClick={(e) => {
                alignProp.onClick?.(e);
                if (withoutLink) return;

                if (location.href.includes(Paths.productDetailView)) {
                    location.href = Paths.productDetailView + "/" + product._id;
                } else {
                    router.push(
                        Paths.productDetailView + "/" + product._id,
                        undefined,
                        { shallow: false }
                    );
                }
            }}
        >
            <Flex style={{ height: "100%" }} column between>
                <div className="productViewCard__thumb">
                    <Img
                        onLoadingComplete={() => {
                            setImgLoaded(true);
                        }}
                        className={`productViewCard__thumbImg ${
                            imgLoaded && " productViewCard__thumbImg--loaded"
                        }`}
                        layout="fill"
                        objectFit="cover"
                        src={beforeExtention(thumbNail?.uri || "", "---1000")}
                    />
                    {!hideWishIcon && (
                        <WishIcon
                            className="productViewCard__wishIcon"
                            productId={product._id}
                        />
                    )}
                </div>
                <div className="productViewCard__body">
                    <Flex
                        className="productViewCard__inWrap"
                        style={{ height: "100%" }}
                        column
                        between
                    >
                        <div className="productViewCard__inTop">
                            <Tiny color="grey2">
                                {l(category?.label)} · {l(region?.label)}
                            </Tiny>
                            <Bold flex mb>
                                <LineCutter line={2}>
                                    {l(product.title)}
                                </LineCutter>
                            </Bold>
                            {/* <Small>{cutStr(l(product.shortDecsription) || "", 50)}</Small> */}
                        </div>
                        <div className="productViewCard__inBottom">
                            <Flex className="productViewCard__ratingWrap" vEnd>
                                <Small>
                                    <RatingStar
                                        readonly
                                        initialRating={rating || 5}
                                    />
                                </Small>
                                {/* <Tiny color="grey3">({reviewCount})</Tiny> */}
                            </Flex>
                            <Flex vEnd className="productViewCard__priceWrap">
                                <JDtypho mr="tiny">
                                    {autoComma(product.priceAdult || 0)}
                                </JDtypho>
                                <Tiny color="grey3">{s("money_unit")}</Tiny>
                            </Flex>
                            <div className="productViewCard__guide">
                                <Tip message={guideNickName || ""}>
                                    <GuideCircle
                                        className="productViewCard__guideCircle"
                                        guideId={guideId}
                                        guideProfile={beforeExtention(
                                            guideImage?.uri || "",
                                            "---200"
                                        )}
                                    />
                                </Tip>
                            </div>
                        </div>
                    </Flex>
                </div>
            </Flex>
        </JDalign>
    );
};
