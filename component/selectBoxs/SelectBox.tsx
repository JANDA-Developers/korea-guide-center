import { JDselect } from "@janda-com/front";
import { useRouter } from "next/router";
import React from "react";
import { LanguagesOps } from "../../utils/enumToKr";

interface IProp {}

export const WebStieLanguageSelectBox: React.FC<IProp> = () => {
    const router = useRouter();
    return (
        <JDselect
            className="WebStieLanguageSelectBox"
            onChange={(op) => {
                router.push(location.href, undefined, { locale: op.value });
            }}
            options={LanguagesOps}
        />
    );
};
