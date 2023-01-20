import React, { useContext, useState } from "react";
import { AppContext } from "../../context/context";
import { Paths } from "../../pages/index[depre]";
import { IProductViewCard } from "../productViewCard/ProductViewCard";
import { autoComma } from "../../utils/formatter";
import { GuideCircle } from "../guideCircle/GuideCircle";
import { RatingStar } from "../rating/Rating";
import { WishIcon } from "../wisthIcon/WishIcon";
import { useRouter } from "next/router";
import { beforeExtention } from "../../utils/fileExtendDivider";
import { Tip } from "../../atom/tip/Tip";
import { Flex, Small } from "@janda-com/front";

const TourCardItem: React.FC<IProductViewCard> = ({
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
    const priceToString = (price: number) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return (
        <div
            className="item bloc-card free"
            data-linkall="a"
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
            <figure className="fit-cover">
                <img
                    src={beforeExtention(thumbNail?.uri || "", "---1000")}
                    alt="TourItem"
                    width="335"
                    height="335"
                    className="lazy"
                />
                {!hideWishIcon && (
                    <WishIcon
                        className="productViewCard__wishIcon"
                        productId={product._id}
                    />
                )}
            </figure>
            <div className="content">
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "10px",
                    }}
                >
                    <span
                        className="category"
                        style={{
                            marginBottom: "0px",
                            borderColor: "#D15C2E",
                            color: "#D15C2E",
                        }}
                    >
                        {l(category?.label)} · {l(region?.label)}
                    </span>
                    <Small>
                        <RatingStar readonly initialRating={rating || 5} />
                    </Small>
                    {/* <Tiny color="grey3">({reviewCount})</Tiny> */}
                </div>
                <a
                    style={{
                        display: "inline-block",
                        marginBottom: "20px",
                        width: "100%",
                    }}
                >
                    <h3
                        style={{
                            color: "black",
                        }}
                    >
                        {l(product.title)}
                    </h3>
                </a>
                {/* <p>
                    {" "}
                    {l(product.shortDecsription).length >= 70
                        ? l(product.shortDecsription).slice(0, 70) + "..."
                        : l(product.shortDecsription)}
                </p> */}
            </div>
            <div className="info-bottom">
                <div
                    className="price"
                    style={{
                        position: "relative",
                    }}
                >
                    ₩{priceToString(product?.priceAdult!)}
                </div>
                <span
                    className="btn gtm-event-info-booking"
                    style={{
                        boxSizing: "border-box",
                        width: "100%",
                    }}
                >
                    {s("AboutAndSchedule")}
                </span>
                <div
                    className="productViewCard__guide"
                    style={{
                        bottom: "3.2rem",
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
            </div>
        </div>
    );
};

export default React.memo(TourCardItem);
