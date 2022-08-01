import {
    Bold,
    JDcontainer,
    JDpolicyViewer,
    Tiny,
    WindowSize,
} from "@janda-com/front";
import React from "react";
import BookLayout from "../../component/layout/BookLayout";
import { UsePolicy } from "../../policies/UsePolicy";

interface IProp {}

export const TermsAndCondition: React.FC<IProp> = () => {
    return (
        <BookLayout>
            <JDcontainer verticalPadding size={WindowSize.md}>
                <Bold mb>이용약관</Bold>
                <Tiny
                    style={{
                        whiteSpace: "pre-line",
                    }}
                >
                    {UsePolicy}
                </Tiny>
            </JDcontainer>
        </BookLayout>
    );
};

export default TermsAndCondition;
