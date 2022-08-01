import { Flex } from "@janda-com/front";
import React, { useContext } from "react";
import DotButton from "../../component/dotButton/DotButton";
import { JDicon } from "../../component/icons/Icons";
import { Fproduct } from "../../types/api";
import { BG } from "../../types/const";
import GuideContext from "../context";

interface IProp {
    items: Fproduct[];
    onSubmit: (memberIds: string[]) => void;
}

export const IndexControlForm: React.FC<IProp> = ({ onSubmit, items }) => {
    const { productSearchModalHook } = useContext(GuideContext);
    const ids = items.map((item) => item._id);

    return (
        <Flex wrap>
            <DotButton
                onClick={() => {
                    productSearchModalHook.openModal({
                        onlyStatusOpenProduct: true,
                        onSubmit: (product) => {
                            onSubmit([product._id, ...ids]);
                        },
                    });
                }}
            />
            {items.map((item) => (
                <div
                    style={{
                        position: "relative",
                        width: 500,
                        height: 500,
                        ...BG(item.thumbNail?.uri || ""),
                    }}
                >
                    <JDicon
                        onClick={() => {
                            onSubmit([...ids.filter((id) => id !== item._id)]);
                        }}
                        style={{
                            position: "absolute",
                            top: "1rem",
                            right: "1rem",
                        }}
                        icon="close"
                    />
                </div>
            ))}
        </Flex>
    );
};
