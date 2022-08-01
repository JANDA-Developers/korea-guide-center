import {
    Bold,
    JDcontainer,
    JDpolicyViewer,
    Tiny,
    WindowSize,
} from "@janda-com/front";
import React from "react";
import BookLayout from "../../component/layout/BookLayout";
import { PersonalInformationHandle } from "../../policies/PersonalInformationHandle";

interface IProp {}

export const PrivacyPolicy: React.FC<IProp> = () => {
    return (
        <BookLayout>
            <JDcontainer verticalPadding size={WindowSize.md}>
                <Bold mb>개인정보 처리방침</Bold>
                <Tiny
                    style={{
                        whiteSpace: "pre-line",
                    }}
                >
                    {PersonalInformationHandle}
                </Tiny>
            </JDcontainer>
        </BookLayout>
    );
};

export default PrivacyPolicy;
