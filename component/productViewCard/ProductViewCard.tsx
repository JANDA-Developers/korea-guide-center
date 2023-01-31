import {
    Bold,
    Flex,
    IJDalignProp,
    JDalign,
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
import { WishIcon } from "../wisthIcon/WishIcon";

// 투어 상품

export interface IProductViewCard extends IJDalignProp {
    product: Fproduct;
    withoutLink?: boolean;
    hideWishIcon?: boolean;
    setPaddingZero?: boolean;
    setMarginZero?: boolean;
    setMarginRight?: string;
    setPaddingVertical?: string;
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
                            <span
                                className="category"
                                style={{
                                    borderColor: "#D15C2E",
                                    color: "#D15C2E",
                                    marginBottom: "3px",
                                }}
                            >
                                {l(category?.label)} · {l(region?.label)}
                            </span>
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
                            <div
                                className="productViewCard__guide"
                                style={{
                                    bottom:
                                        router.pathname !== "/guide"
                                            ? "3.7rem"
                                            : "",
                                }}
                            >
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
                            {router.pathname !== "/guide" ? (
                                <div
                                    className="info-bottom"
                                    style={{
                                        marginTop: "5px",
                                    }}
                                >
                                    <span
                                        className="btn gtm-event-info-booking"
                                        style={{
                                            boxSizing: "border-box",
                                            width: "100%",
                                        }}
                                    >
                                        {s("AboutAndSchedule")}
                                    </span>
                                </div>
                            ) : null}
                        </div>
                    </Flex>
                </div>
            </Flex>
        </JDalign>
    );
};

export const ProductViewCardForSearchPage: React.FC<IProductViewCard> = ({
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
            style={{
                height: "auto",
            }}
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
                            <span
                                className="category"
                                style={{
                                    borderColor: "#D15C2E",
                                    color: "#D15C2E",
                                    marginBottom: "3px",
                                }}
                            >
                                {l(category?.label)} · {l(region?.label)}
                            </span>
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
                            <div
                                className="productViewCard__guide"
                                style={{
                                    bottom:
                                        router.pathname !== "/guide"
                                            ? "3.7rem"
                                            : "",
                                }}
                            >
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
                            {router.pathname !== "/guide" ? (
                                <div
                                    className="info-bottom"
                                    style={{
                                        marginTop: "5px",
                                    }}
                                >
                                    <span
                                        className="btn gtm-event-info-booking"
                                        style={{
                                            boxSizing: "border-box",
                                            width: "100%",
                                        }}
                                    >
                                        {s("AboutAndSchedule")}
                                    </span>
                                </div>
                            ) : null}
                        </div>
                    </Flex>
                </div>
            </Flex>
        </JDalign>
    );
};

export const ProductViewCard2: React.FC<IProductViewCard> = ({
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
            className={`productViewCard2 ${className}`}
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
            <Flex between style={{ fontSize: "15px", marginBottom: "13px" }}>
                <Flex>{l(product.title)}</Flex>
                <Flex style={{ marginRight: "13px" }}>
                    {autoComma(product.priceAdult || 0)}원
                </Flex>
            </Flex>
        </JDalign>
    );
};
