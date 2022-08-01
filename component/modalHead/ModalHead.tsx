import { JDtypho, Small, Tiny } from "@janda-com/front";
import { TElements } from "@janda-com/front/dist/types/interface";
import React from "react";

interface IProp {
    title: TElements;
    description?: TElements;
}

export const ModalHead: React.FC<IProp> = ({ title, description }) => {
    return (
        <div>
            <JDtypho
                className="textTransformClear"
                mb={description ? "tiny" : "no"}
                size={"h6"}
                weight={600}
            >
                {title}
            </JDtypho>
            {description && (
                <Small className="textTransformClear" weight={300}>
                    {description}
                </Small>
            )}
        </div>
    );
};

export const CardHead = ModalHead;
