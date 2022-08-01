import { Flex, IJDalignProp, JDalign, JDbutton } from "@janda-com/front";
import { IButtonProps } from "@janda-com/front/dist/components/button/Button";
import { IselectedOption } from "@janda-com/front/dist/types/interface";
import React, { useContext } from "react";
import GuideContext from "../../page/context";

interface IItemRadioProp<T extends string | string[]> extends IJDalignProp {
    itemIdFilter?: T;
    handleSelectItem: (
        item?: T extends string ? IselectedOption : string[]
    ) => void;
    buttonProp?: IButtonProps;
}

export const ItemRadio: React.FC<IItemRadioProp<string>> = ({
    handleSelectItem,
    itemIdFilter,
    buttonProp,
    ...props
}) => {
    const _handleSelectItem = (item?: IselectedOption) => () => {
        handleSelectItem(item);
    };
    const { productOps } = useContext(GuideContext);
    return (
        <JDalign mb {...props}>
            <Flex style={{ width: "max-content" }}>
                <JDbutton
                    style={{ width: "max-content" }}
                    {...buttonProp}
                    mr
                    mode="border"
                    thema={undefined === itemIdFilter ? "primary" : undefined}
                    onClick={_handleSelectItem(undefined)}
                >
                    전체보기
                </JDbutton>
                {productOps?.map((item) => (
                    <JDbutton
                        style={{ width: "max-content" }}
                        {...buttonProp}
                        key={item.value}
                        mr
                        mode="border"
                        thema={
                            item.value === itemIdFilter ? "primary" : undefined
                        }
                        onClick={_handleSelectItem(item)}
                    >
                        {item.label}
                    </JDbutton>
                ))}
            </Flex>
        </JDalign>
    );
};

export const ItemRadios: React.FC<IItemRadioProp<string[]>> = ({
    handleSelectItem,
    itemIdFilter,
    buttonProp,
    ...props
}) => {
    const _handleSelectItem = (item?: IselectedOption) => () => {
        if (!item) handleSelectItem(undefined);
        else {
            const filterIds = itemIdFilter || [];
            if (filterIds.includes(item.value)) {
                const index = filterIds.findIndex((id) => id === item.value);
                filterIds.splice(index, 1);
                handleSelectItem([...filterIds]);
                return;
            }
            filterIds.push(item.value);
            handleSelectItem([...filterIds]);
        }
    };
    const { productOps } = useContext(GuideContext);
    return (
        <JDalign mb flex={{ wrap: true }} {...props}>
            <JDbutton
                {...buttonProp}
                mr
                thema={undefined === itemIdFilter ? "primary" : undefined}
                onClick={_handleSelectItem(undefined)}
            >
                전체보기
            </JDbutton>
            {productOps?.map((item) => (
                <JDbutton
                    {...buttonProp}
                    key={item.value}
                    mr
                    thema={
                        itemIdFilter?.includes(item.value)
                            ? "primary"
                            : undefined
                    }
                    onClick={_handleSelectItem(item)}
                >
                    {item.label}
                </JDbutton>
            ))}
        </JDalign>
    );
};
