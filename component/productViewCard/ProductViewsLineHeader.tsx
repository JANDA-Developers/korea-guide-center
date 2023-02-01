import { Flex, JDalign, JDtypho } from "@janda-com/front";
import { useRouter } from "next/router";
import React from "react";
import { useContext } from "react";
import { SeeMore } from "../../atom/SeeMore";
import { AppContext } from "../../context/context";
import { searchPageQueryGenerate } from "../../pages/product/search";
import { Fcategory, ProductType, _ProductSort } from "../../types/api";
import { TElements } from "../../types/interface";

interface IProp {
    title: TElements;
    description?: TElements;
    onSeeMore?: () => void;
}

export const ProductViewsLineHeader: React.FC<IProp> = ({
    title,
    description,
    onSeeMore,
}) => {
    return (
        <JDalign className="productViewsLineHeader2">
            <Flex>
                <Flex
                    style={{
                        fontSize: "20.8px",
                        fontWeight: 600,
                    }}
                >
                    {title}
                </Flex>
                {onSeeMore && (
                    <SeeMore
                        className="productViewsLineHeader__seeMore"
                        onSeeMore={onSeeMore}
                    />
                )}
            </Flex>
            <JDtypho mb hide={!description} color="grey3" size="small">
                {description}
            </JDtypho>
        </JDalign>
    );
};

export const ProductViewsLineHeader2: React.FC<IProp> = ({
    title,
    description,
    onSeeMore,
}) => {
    return (
        <JDalign className="productViewsLineHeader">
            <Flex>
                <button className="regionGuideButton">{title}</button>

                {onSeeMore && (
                    <SeeMore
                        className="productViewsLineHeader__seeMore"
                        onSeeMore={onSeeMore}
                    />
                )}
            </Flex>
            <JDtypho mb hide={!description} color="grey3">
                {description}
            </JDtypho>
        </JDalign>
    );
};

export const PopularProductViewsLineHeader: React.FC<Partial<IProp>> = ({
    title,
    description,
    onSeeMore,
}) => {
    const { s } = useContext(AppContext);
    const router = useRouter();
    return (
        <ProductViewsLineHeader
            onSeeMore={() => {
                router.push(
                    searchPageQueryGenerate({
                        sort: [_ProductSort.reviewCount__desc],
                    })
                );
            }}
            description={s("popularTourDesc") || description || ""}
            title={s("popularTourTitle") || title || ""}
        />
    );
};

export const BestProductViewsLineHeader: React.FC<Partial<IProp>> = ({
    title,
    description,
    onSeeMore,
}) => {
    const { s } = useContext(AppContext);
    const router = useRouter();
    return (
        <ProductViewsLineHeader
            onSeeMore={() => {
                router.push(
                    searchPageQueryGenerate({
                        sort: [
                            _ProductSort.rating__desc,
                            _ProductSort.createdAt__desc,
                        ],
                    })
                );
            }}
            description={s("bestTourDesc") || description || ""}
            title={s("bestTourTitle") || title || ""}
        />
    );
};

export const KPOPBestProductViewsLineHeader: React.FC<Partial<IProp>> = ({
    title,
    description,
    onSeeMore,
}) => {
    const { s } = useContext(AppContext);
    const router = useRouter();
    return (
        <ProductViewsLineHeader
            onSeeMore={() => {
                router.push(
                    searchPageQueryGenerate({
                        filter: {
                            type__in: [ProductType.KPOP],
                        },
                        sort: [_ProductSort.reviewCount__desc],
                    })
                );
            }}
            description={s("bestKPOPTourDesc") || description || ""}
            title={s("bestKPOPTitle") || title || ""}
        />
    );
};

export const KPOPNewestProductViewsLineHeader: React.FC<Partial<IProp>> = ({
    title,
    description,
    onSeeMore,
}) => {
    const { s } = useContext(AppContext);
    const router = useRouter();
    return (
        <ProductViewsLineHeader
            onSeeMore={() => {
                router.push(
                    searchPageQueryGenerate({
                        filter: {
                            type__in: [ProductType.KPOP],
                        },
                        sort: [_ProductSort.createdAt__desc],
                    })
                );
            }}
            description={s("bestKPOPTourDesc") || description || ""}
            title={s("bestKPOPTitle") || title || ""}
        />
    );
};

export const NewstProductViewsLineHeader: React.FC<Partial<IProp>> = ({
    title,
    description,
    onSeeMore,
}) => {
    const { s } = useContext(AppContext);
    const router = useRouter();
    return (
        <ProductViewsLineHeader
            onSeeMore={() => {
                router.push(
                    searchPageQueryGenerate({
                        sort: [_ProductSort.createdAt__desc],
                    })
                );
            }}
            description={description || s("newTourDesc")}
            title={title || s("newTourTitle")}
        />
    );
};

interface IRegionPVLProp {
    region: Fcategory;
    title?: string;
    description?: string;
    onSeeMore?: () => void;
}

export const RegionProductViewsLineHeader: React.FC<
    Partial<IRegionPVLProp>
> = ({ region, ...props }) => {
    const { l, s } = useContext(AppContext);
    const router = useRouter();

    return (
        <ProductViewsLineHeader
            onSeeMore={() => {
                router.push(
                    searchPageQueryGenerate({
                        filter: {
                            region__id__eq: region?._id,
                        },
                    })
                );
            }}
            title={l(region?.label) + s("locationalProducts")}
            {...props}
        />
    );
};

export const RegionProductViewsLineHeader2: React.FC<
    Partial<IRegionPVLProp>
> = ({ region, ...props }) => {
    const { l, s } = useContext(AppContext);
    const router = useRouter();

    return <div>{l(region?.label)}</div>;
};
