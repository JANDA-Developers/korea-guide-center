import {
    Flex,
    JDbutton,
    JDcontainer,
    JDpagination,
    SkipUpdate,
    useModal,
} from "@janda-com/front";
import React from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Empty } from "../../atom/Empty";
import JDsearchBar from "../../atom/SearchBar";
import { Red } from "../../atom/shortCut/Short";
import { ConfirmModal } from "../../component/AlertModal/AlertModal";
import { CardBtn } from "../../component/btns/ModalBtn";
import DotButton from "../../component/dotButton/DotButton";
import { RoundRadioBtnWrap } from "../../component/iconRadioBtn/IconRadioBtn";
import { JDicon } from "../../component/icons/Icons";
import { PageHeader } from "../../component/pageHeader/PageHeader";
import Pagination from "../../component/pagination/Pagination";
import {
    ITourModifyModal,
    TourModifyModalWrap,
} from "../../component/tourModifyModal/TourModifyModal";
import { AppContext } from "../../context/context";
import {
    useProductDelete,
    useProductList,
    useProductUpdate,
} from "../../hook/useProduct";
import { Fproduct, ProductStatus, _ProductSort } from "../../types/api";
import { GuidePath } from "../GuideRouter";
import { TMode } from "../productDetail/ProductDetail";
import { ProductCard } from "./components/ProductCard";

interface IProp {}

const today = new Date();

export const Product: React.FC<IProp> = () => {
    const { confirmModalHook, me, isMaster } = useContext(AppContext);
    const tourModifyModalHook = useModal<ITourModifyModal>();

    const ownerFilter = isMaster
        ? {}
        : {
              guideId__eq: me?._id,
          };

    const productListHook = useProductList({
        fixingFilter: ownerFilter,
        initialSort: [_ProductSort.createdAt__desc],
    });

    const {
        filter,
        setFilter,
        items: products,
        getLoading,
        paginatorHook,
        pageInfo,
    } = productListHook;
    const [productUpdateMu] = useProductUpdate();
    const [productDelete] = useProductDelete();
    const history = useHistory();

    const handleAdd = () => {
        history.push(GuidePath.productDetail);
    };

    const handleToDetail = (product: Fproduct) => () => {
        const isReady = product.status === ProductStatus.READY;
        if (!isReady) {
            tourModifyModalHook.openModal({
                product,
            });
            return;
        }
        history.push(GuidePath.productDetail + "/" + product._id);
    };

    const handleAddRound = (product: Fproduct, modeValue?: TMode) => () => {
        if (!modeValue) return;
        history.push(GuidePath.productDetailAddRound + "/" + product._id);
    };

    const handleToTour = (product: Fproduct) => () => {
        history.push(GuidePath.tour + "/" + product._id);
    };

    const deleteProd = (productId: string) => {
        productDelete({
            variables: {
                productId,
            },
        });
    };

    const handleStatusFilter =
        (type: "past" | "ongoing" | "ready" | "all") => () => {
            switch (type) {
                case "past":
                    setFilter({
                        tourDates__lte: today,
                    });
                    break;
                case "ongoing":
                    setFilter({
                        tourDates__gte: today,
                    });
                    break;
                case "ready":
                    setFilter({
                        status__eq: ProductStatus.READY,
                    });
                    break;
                case "all":
                    setFilter({});
                    break;
            }
        };

    const checkSelected = (type: "past" | "ongoing" | "ready" | "all") => {
        if (type === "past") {
            return filter.tourDates__lte?.valueOf() === today.valueOf();
        }
        if (type === "ready") {
            return filter.status__eq === ProductStatus.READY;
        }
        if (type === "ongoing") {
            return filter.tourDates__gte?.valueOf() === today.valueOf();
        }
    };

    const handleDelete = (product: Fproduct) => () => {
        confirmModalHook.openModal({
            title: `정말로 삭제하시겠습니까?`,
            content: (
                <Red>
                    {" "}
                    <JDicon icon="triWarn" />{" "}
                    {`상품을 삭제하시더라도 예약이 존재하는 회차들은 삭제되지 않습니다`}{" "}
                    <br />
                    {`상품이 삭제되면 홈페이지에
                    노출되지 않습니다`}
                </Red>
            ),
            onContinue: () => {
                deleteProd(product._id);
            },
        });
    };

    const handleConfirm = (ProductId: string) => () => {
        productUpdateMu({
            variables: {
                ProductId,
                input: {
                    masterConfirmed: true,
                },
            },
        });
    };

    return (
        <div>
            <JDcontainer verticalPadding>
                <PageHeader
                    pageName="투어관리"
                    title="투어를 등록해주세요"
                    description={
                        <span>
                            한번 작성된 상품은 날짜 추가하여 추가로 회차를
                            오픈하는것이 가능합니다. <br />
                            상품을 수정하더라도 이전에 썻던 회차에 영향을 줄 수
                            없으니 주의해 주세요.
                        </span>
                    }
                />
                <Flex wrap>
                    <JDsearchBar
                        listHook={productListHook}
                        searchOps={[
                            {
                                label: "전체 검색",
                                value: "reviewCount__not_eq",
                                filter: (value) => {
                                    setFilter?.({
                                        ...filter,
                                        OR: [
                                            {
                                                title_ko__contains: value,
                                            },
                                            {
                                                address_ko__contains: value,
                                            },
                                            {
                                                region_label_chi__contains:
                                                    value,
                                            },
                                            {
                                                guideNickName__contains: value,
                                            },
                                            {
                                                guideName__contains: value,
                                            },
                                            {
                                                code__eq: value,
                                            },
                                            {
                                                code__eq: value,
                                            },
                                        ],
                                    });
                                },
                            },
                            {
                                label: "상품명 검색",
                                value: "title_ko__contains",
                            },
                            {
                                label: "가이드 닉네임",
                                value: "guideNickName__contains",
                            },
                            {
                                label: "가이드 이름",
                                value: "guideName__contains",
                            },
                            {
                                label: "카테고리 검색",
                                value: "category_label_ko__contains",
                            },
                        ]}
                        mb
                        mr
                    />

                    <RoundRadioBtnWrap>
                        <JDbutton
                            thema={checkSelected("all") ? "primary" : undefined}
                            onClick={handleStatusFilter("all")}
                        >
                            전체
                        </JDbutton>
                        <JDbutton
                            thema={
                                checkSelected("ongoing") ? "primary" : undefined
                            }
                            onClick={handleStatusFilter("ongoing")}
                        >
                            진행중
                        </JDbutton>
                        <JDbutton
                            thema={
                                checkSelected("ready") ? "primary" : undefined
                            }
                            onClick={handleStatusFilter("ready")}
                        >
                            작성중
                        </JDbutton>
                        <JDbutton
                            thema={
                                checkSelected("past") ? "primary" : undefined
                            }
                            onClick={handleStatusFilter("past")}
                        >
                            종료된
                        </JDbutton>
                    </RoundRadioBtnWrap>
                </Flex>

                <Empty mb empty={products} msg="등록하신 상품이 없습니다" />
                <SkipUpdate skip={getLoading}>
                    <DotButton mb onClick={handleAdd}>
                        상품 추가하기
                    </DotButton>
                    {products.map((product) => {
                        const isReady = product.status === ProductStatus.READY;
                        return (
                            <ProductCard
                                foot={
                                    <Flex>
                                        <CardBtn
                                            mr
                                            hide={
                                                !isMaster ||
                                                !!product.masterConfirmed
                                            }
                                            onClick={handleConfirm(product._id)}
                                        >
                                            승인하기
                                        </CardBtn>
                                        <CardBtn
                                            mr
                                            hide={isReady}
                                            onClick={handleAddRound(
                                                product,
                                                "addRound"
                                            )}
                                        >
                                            회차추가
                                        </CardBtn>
                                        <CardBtn
                                            mr
                                            hide={isReady}
                                            onClick={handleToTour(product)}
                                        >
                                            회차목록
                                        </CardBtn>
                                        <CardBtn
                                            mr
                                            thema="primary"
                                            onClick={handleToDetail(product)}
                                        >
                                            {isReady ? "이어쓰기" : "수정하기"}
                                        </CardBtn>
                                        <CardBtn
                                            thema="error"
                                            onClick={handleDelete(product)}
                                        >
                                            삭제하기
                                        </CardBtn>
                                    </Flex>
                                }
                                mb
                                key={product.code}
                                product={product}
                            />
                        );
                    })}
                    <Pagination
                        mb
                        totalPageCount={pageInfo?.totalPageCount || 0}
                        {...paginatorHook}
                    />
                </SkipUpdate>
            </JDcontainer>
            <TourModifyModalWrap
                key={
                    "TourModifyModalWrap" +
                    (tourModifyModalHook.isOpen ? "opend" : "closed")
                }
                modalHook={tourModifyModalHook}
            />
        </div>
    );
};
