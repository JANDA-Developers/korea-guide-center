import { JDcontainer, WindowSize } from "@janda-com/front";
import dynamic from "next/dynamic";
import React from "react";
import { BookLayout } from "../component/layout/BookLayout";
const SignUp = dynamic(() => import("../page/signUp/SignUp"), {
    ssr: false,
});

interface IProp {}

export const SignUpPage: React.FC<IProp> = () => {
    if (typeof window === "undefined") return null;
    return (
        <BookLayout>
            <JDcontainer verticalPadding size={WindowSize.sm}>
                <SignUp />
            </JDcontainer>
        </BookLayout>
    );
};

export default SignUpPage;
