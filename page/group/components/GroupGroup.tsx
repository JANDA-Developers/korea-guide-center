import { cloneObject, Flex, JDalign, JDbutton, Mb } from "@janda-com/front";
import React from "react";
import { useGroupUpdate } from "../../../hook/useGroup";
import {
    Fgroup,
    Fproduct,
    productList_ProductList_items,
    ProductStatus,
} from "../../../types/api";
import { omits, omitsAuto } from "../../../utils/omit";
import { useProductList } from "../../../hook/useProduct";
import { useCopy } from "../../../hook/useCopy";
import { OrderHelper } from "../../../component/orderHelper/OrderHelper2";
import { ProductViewCard } from "../../../component/productViewCard/ProductViewCard";
import { useContext } from "react";
import GuideContext from "../../context";
import DotButton from "../../../component/dotButton/DotButton";
import { JDicon } from "../../../component/icons/Icons";
import { CardBtn } from "../../../component/btns/ModalBtn";

interface IProp {
    group: Fgroup;
}

export const GroupGroup: React.FC<IProp> = ({ group: defaultGroup }) => {
    const { productSearchModalHook } = useContext(GuideContext);
    const [group, setGroup] = useCopy(defaultGroup);
    const {
        items: products,
        filter,
        setFilter,
    } = useProductList({
        fixingFilter: {
            status__eq: ProductStatus.OPEN,
            isPriviate__not_eq: true,
        },
        initialFilter: {
            _id__in: group.members,
        },
        initialViewCount: 99,
    });
    const [updateMu] = useGroupUpdate();

    const handleExtract = (provided: productList_ProductList_items) => () => {
        const newGroups = group.members.filter((m) => m !== provided._id);
        group.members = newGroups;
        setGroup({ ...group });
    };

    const handleAdd = () => {
        productSearchModalHook.openModal({
            onSubmit: handleProductSelect,
            onlyStatusOpenProduct: true,
        });
    };

    const handleProductSelect = (pd: Fproduct) => {
        if (group.members.find((member) => member === pd._id)) {
            alert("이미 추가된 상품 입니다");
            productSearchModalHook.openModal();
            return;
        }
        group.members.push(pd._id);
        setGroup({ ...group });
        filter._id__in = group.members;
        setFilter({
            ...filter,
        });
        productSearchModalHook.closeModal();
    };

    const groupMembersProd = [...products].filter((p) =>
        group.members.includes(p._id)
    );
    const arrangedProd = group.members
        .map((member) => groupMembersProd.find((prod) => prod._id === member)!)
        .filter((prod) => prod);

    const handleComplete = () => {
        updateMu({
            variables: {
                GroupId: group._id,
                input: omitsAuto(group),
            },
        });
    };

    return (
        <JDalign mb className="GroupGroup">
            <Flex className="GroupGroup__inner" mb>
                <DotButton
                    mb
                    mr
                    style={{ width: "max-content", minWidth: 100 }}
                    onClick={handleAdd}
                >
                    추가
                </DotButton>
                <OrderHelper
                    items={arrangedProd}
                    setItems={(orderedPropds) => {
                        group.members = orderedPropds.map((p) => p._id);
                        setGroup({ ...group });
                    }}
                    ItemRender={(item, index, { dragHandleProps }) => {
                        return (
                            <JDalign
                                mb
                                className="GroupGroup__box"
                                mr
                                {...dragHandleProps}
                            >
                                <JDicon
                                    onClick={handleExtract(item)}
                                    className="GroupGroup__closer"
                                    icon="close"
                                />
                                <ProductViewCard
                                    hideWishIcon
                                    withoutLink
                                    className="GroupGroup__viewCard"
                                    product={item}
                                />
                            </JDalign>
                        );
                    }}
                />
                <Mb />
            </Flex>
            <CardBtn onClick={handleComplete}>수정완료</CardBtn>
        </JDalign>
    );
};
