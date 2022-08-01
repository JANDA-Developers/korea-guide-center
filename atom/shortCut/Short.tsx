import { IJDalignProp, JDtypho } from "@janda-com/front";
import { IJDtyphoProp } from "@janda-com/front/dist/components/typho/Typho";
import React from "react";

interface IProp extends IJDtyphoProp {}

export const Red: React.FC<IProp> = ({ ...props }) => {
    return <JDtypho {...props} color="error" />;
};
