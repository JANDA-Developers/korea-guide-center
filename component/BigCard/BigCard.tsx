import { IJDalignProp, JDalign } from "@janda-com/front";
import { IDiv } from "@janda-com/front/dist/types/interface";
import React from "react";

interface IProp extends IJDalignProp {}

export const BigCard: React.FC<IProp> = (props) => {
    return <JDalign className="BigCard" {...props} />;
};
