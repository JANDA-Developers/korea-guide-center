import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { AppContext } from "../../context/context";
import { usePaths } from "../../hook/usePaths";
import { Paths } from "../../pages/index[depre]";
import { Fproduct } from "../../types/api";
import { BG } from "../../types/const";
import { IDiv } from "../../types/interface";
import { randomInteger } from "../../utils/codeGenerator";
import { beforeExtention } from "../../utils/fileExtendDivider";
import { checkMobile } from "../../utils/isMobile";

export interface IProps extends IDiv {
    product: Fproduct;
    index: number;
}

export const ThumNail: React.FC<IProps> = ({
    product,
    className,
    index,
    ...props
}) => {
    const router = useRouter();
    const { l } = useContext(AppContext);
    const randomNum = randomInteger(checkMobile() ? 14 : 10, 0);
    const { thumbNail, title } = product;
    const imgSrc = thumbNail?.uri;

    if (!imgSrc) return null;

    return (
        <div
            onClick={() => {
                router.push(Paths.productDetailView + "/" + product._id);
            }}
            style={{
                // transitionDelay: index,
                minHeight: (checkMobile() ? 5 : 9) + randomNum + "rem",
                ...BG(beforeExtention(imgSrc, "---500")),
            }}
            className={`thumNail  ${className}`}
            {...props}
        >
            {/* {l(title)} */}
        </div>
    );
};

export default ThumNail;
