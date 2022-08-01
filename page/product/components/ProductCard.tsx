import {
    autoComma,
    copytoClipboard,
    Flex,
    JDalign,
    JDbadge,
    JDicon,
    Small,
    Thin,
    Tiny,
    toast,
} from "@janda-com/front";
import React from "react";
import { Clip } from "../../../atom/clip/Clip";
import { IImgCardProps, ImgCard } from "../../../atom/ImgCard";
import { Info } from "../../../atom/Info";
import { CardHead } from "../../../component/modalHead/ModalHead";
import { RatingStar } from "../../../component/rating/Rating";
import { Fproduct, ProductStatus } from "../../../types/api";
import { cutStr } from "../../../utils/cutStr";
import classNames from "classnames";
import { ProductStatusBadge } from "../../../component/statusBadges/StatusBadges";
import { categoryTypeToKr, langToKr } from "../../../utils/enumToKr";
import { yyyymmdd } from "../../../utils/dateFormat";
import JDIcon from "../../../component/icons/Icons";
import { Paths } from "../../../pages/index[depre]";
import { useContext } from "react";
import { AppContext } from "../../../context/context";
import { usePaths } from "../../../hook/usePaths";

interface IProp extends IImgCardProps {
    product: Fproduct;
}

export const ProductCard: React.FC<IProp> = ({
    className,
    product,
    ...props
}) => {
    const { toProductDetailPage } = usePaths();
    const { isMaster } = useContext(AppContext);
    const {
        _id,
        title,
        address,
        category,
        createdAt,
        priceAdult,
        region,
        rating,
        reviewCount,
        status,
        languages,
        code,
        isPriviate,
        masterConfirmed,
        tourDates,
        shortDecsription,
    } = product;

    const classes = classNames("productCard", className, {
        "productCard--ready": status === ProductStatus.READY,
    });

    return (
        <ImgCard
            onImgClick={() => {
                toProductDetailPage(_id);
            }}
            className={classes}
            img={product.thumbNail}
            head={
                <CardHead
                    title={
                        <Flex between>
                            <JDalign mr="small">
                                {title?.ko!}
                                <Tiny color="grey1">
                                    생성일 {yyyymmdd(createdAt)}
                                </Tiny>
                            </JDalign>
                            <div>
                                <JDbadge
                                    mb="tiny"
                                    mr="small"
                                    tooltip="관리자가 확인후 화면에 노출 됩니다."
                                    hide={!!masterConfirmed}
                                    thema={"error"}
                                >
                                    승인필요
                                </JDbadge>
                                <JDbadge
                                    mb="tiny"
                                    mr="small"
                                    hide={!isPriviate}
                                    thema={"grey4"}
                                >
                                    비공개
                                </JDbadge>
                                <ProductStatusBadge status={status} />
                            </div>
                        </Flex>
                    }
                    description={cutStr(shortDecsription?.ko!, 50)}
                />
            }
            {...props}
        >
            <Flex wrap>
                <Info
                    mb
                    mr
                    label={"평점"}
                    value={
                        <Flex vCenter>
                            <RatingStar readonly initialRating={rating || 0} />{" "}
                            <Thin size="small" color="grey2">
                                ({reviewCount})
                            </Thin>
                        </Flex>
                    }
                />
                <Info
                    mb
                    mr
                    label={"언어"}
                    value={
                        <Flex vCenter>
                            {languages?.map((lang) => (
                                <JDbadge mr="small" thema="grey1" size="small">
                                    {langToKr[lang]}
                                </JDbadge>
                            ))}
                        </Flex>
                    }
                />
                {category && (
                    <Info
                        mb
                        mr
                        label={"카테고리"}
                        value={<Flex vCenter>{category.label.ko}</Flex>}
                    />
                )}
                {isMaster && (
                    <Info
                        mb
                        mr
                        label={"작성자"}
                        value={<Flex vCenter>{product.guideName}</Flex>}
                    />
                )}
            </Flex>
            <Flex wrap>
                <Info
                    mb
                    mr="large"
                    label={"코드"}
                    value={<Clip>{code}</Clip>}
                />
                <Info
                    mb
                    mr="large"
                    label={"가격"}
                    value={<div>{autoComma(priceAdult || 0)}</div>}
                />
                <Info
                    mb
                    mr="large"
                    label={"지역"}
                    value={<div>{region?.label.ko || "정보없음"}</div>}
                />
                <Info
                    mb
                    mr="large"
                    label={"총회차"}
                    value={<div>{tourDates?.length}회</div>}
                />
                <Info
                    mb
                    label={"링크"}
                    value={
                        <JDIcon
                            hover
                            icon="link"
                            onClick={() => {
                                const link =
                                    location.host +
                                    Paths.productDetailView +
                                    "/" +
                                    _id;
                                copytoClipboard(link);
                                toast("클립보드에 복사 되었습니다");
                            }}
                        />
                    }
                />
            </Flex>
        </ImgCard>
    );
};
