import { Flex, IUseModal, JDalign, JDmodal, Mb, Mr } from "@janda-com/front";
import React from "react";
import { useProductList } from "../../hook/useProduct";
import { Fproduct, ProductStatus, _ProductFilter } from "../../types/api";
import { ModalHead } from "../modalHead/ModalHead";
import Pagination from "../pagination/Pagination";
import { ProductViewCards } from "../productViewCard/ProductViewCards";
import { ProductSearchFilter } from "./components/SearchFilter";
import { GrandProductSearchFilter } from "./GrandProductSearchFilter";

export interface IProductSearchModalModalInfo {
    onSubmit: (product: Fproduct) => void;
    withOutFilter?: boolean;
    onlyStatusOpenProduct?: boolean;
}

interface IProp {
    modalHook: IUseModal<IProductSearchModalModalInfo>;
}

export const ProductSearchModalModal: React.FC<IProp> = ({ modalHook }) => {
    if (typeof window === "undefined") return null;
    const onlyStatusOpenProduct = !!modalHook.info?.onlyStatusOpenProduct;

    const handleSubmit = modalHook.info?.onSubmit;
    const withOutFilter = modalHook.info?.withOutFilter;

    const openProductFilter: _ProductFilter = onlyStatusOpenProduct
        ? {
              status__eq: ProductStatus.OPEN,
          }
        : {};
    const productListHook = useProductList({
        fixingFilter: {
            ...openProductFilter,
        },
    });
    const { items } = productListHook;
    return (
        <JDmodal
            className="ProductSearchModal"
            {...modalHook}
            head={{
                element: (
                    <ModalHead
                        description="원하는 상품을 선택하세요 필터를 활용하여 상품을 찾아보세요."
                        title={"원하는 상품을 선택하세요."}
                    />
                ),
            }}
        >
            <Flex>
                {withOutFilter ? null : (
                    <JDalign mr>
                        <GrandProductSearchFilter
                            productListhook={productListHook}
                        />{" "}
                        <Mr />
                    </JDalign>
                )}
                <div>
                    <ProductSearchFilter productListhook={productListHook} />
                    <Mb />
                    <ProductViewCards
                        withoutLink
                        onClickProduct={(product) => {
                            modalHook.closeModal();
                            handleSubmit?.(product);
                        }}
                        wrap
                        products={items}
                        align={3}
                    />
                    <Pagination
                        totalPageCount={
                            productListHook.pageInfo?.totalPageCount || 0
                        }
                        {...productListHook.paginatorHook}
                    />
                </div>
            </Flex>
        </JDmodal>
    );
};
