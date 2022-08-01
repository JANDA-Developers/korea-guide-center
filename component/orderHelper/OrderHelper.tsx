import { JDalign, JDcard } from "@janda-com/front";
import { CardProps } from "@janda-com/front/dist/components/cards/Card";
import { ISet } from "@janda-com/front/dist/types/interface";
import React from "react";
import { Dragger } from "../dragger/Dragger";

export interface IorderTarget extends CardProps {
    _id: string;
}

interface IProp {
    items: IorderTarget[];
    setItems: ISet<IorderTarget[]>;
}

export const OrderHelper: React.FC<IProp> = ({ items, setItems }) => {
    const handleDrop = (ordered: IorderTarget[]) => {
        setItems([...ordered]);
    };

    return (
        <div>
            <Dragger<IorderTarget>
                onOrder={handleDrop}
                dir="vertical"
                handle
                ulClassName={"formCreater__draggWrap"}
                idKey="_id"
                items={items}
                ItemRender={(item, index, { dragHandleProps }) => (
                    <JDalign mb {...dragHandleProps}>
                        <JDcard
                            head={index + 1 + "번 (드래그로 변경)"}
                            {...item}
                        />
                    </JDalign>
                )}
            ></Dragger>
        </div>
    );
};


