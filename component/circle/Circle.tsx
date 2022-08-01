import { IJDalignProp, JDalign } from "@janda-com/front";
import { BG } from "../../types/const";

interface ICircleProp extends IJDalignProp {
    activate?: boolean;
    padding?: number | string;
    img?: string;
}

export const Circle: React.FC<ICircleProp> = ({
    activate,
    className,
    padding,
    img,
    ...props
}) => {
    return (
        <JDalign
            style={{
                padding,
                ...BG(img || ""),
            }}
            mr="small"
            className={`Circle ${className} ${activate ? "Circle--on" : ""}`}
            {...props}
            children={img ? undefined : props.children}
        />
    );
};
