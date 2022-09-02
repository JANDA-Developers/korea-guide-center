import { Flex, JDalign, Small } from "@janda-com/front";
import React from "react";
import { Clip } from "../../../atom/clip/Clip";
import { Img } from "../../../atom/Image";
import { TableBtn } from "../../../component/btns/ModalBtn";
import { getTourLink } from "../../../hook/useInit";

interface IProp {
    title: string;
    thumbNail: string;
    tourCode: string;
    productId: string;
    tourId: string;
}

export const ProductInfoTableCell: React.FC<IProp> = ({
    productId,
    tourId,
    title,
    thumbNail,
    tourCode,
}) => {
    return (
        <Flex vCenter center>
            <JDalign mr>
                <img src={thumbNail} width={100} height={100} />
            </JDalign>
            <div>
                <Small weight={600} mb="small">
                    {title}
                </Small>
                <Flex vCenter center column>
                    <Clip mb="small">{tourCode}</Clip>
                    <TableBtn
                        onClick={() => {
                            window.open(
                                getTourLink({
                                    productId: productId,
                                    tourId: tourId,
                                }),
                                "_blank"
                            );
                        }}
                    >
                        투어보기
                    </TableBtn>
                </Flex>
            </div>
        </Flex>
    );
};
