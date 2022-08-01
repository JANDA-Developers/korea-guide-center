import { ISet, TElements } from "@janda-com/front/dist/types/interface";
import { Dragger } from "../dragger/Dragger";

interface IProp {
    items: any[];
    ItemRender: (item: any, index: number, provider: any) => TElements;
    setItems: (ordereditems: any[]) => void;
}

export const OrderHelper: React.FC<IProp> = ({
    items,
    setItems,
    ItemRender,
}) => {
    const handleDrop = (ordered: any[]) => {
        setItems([...ordered]);
    };

    return (
        <div>
            <Dragger<any>
                onOrder={handleDrop}
                dir="horizontal"
                handle
                ulClassName={"formCreater__draggWrap"}
                idKey="_id"
                items={items}
                ItemRender={ItemRender}
            ></Dragger>
        </div>
    );
};
