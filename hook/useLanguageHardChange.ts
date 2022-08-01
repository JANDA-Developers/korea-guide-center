import { useLayoutEffect, useContext } from "react";
import { AppContext } from "../context/context";

export const useLanguageHardChange = () => {
    const { s } = useContext(AppContext);
    useLayoutEffect(() => {
        const targets = document.querySelectorAll(
            ".JDlabel .JDtextColor--point"
        );
        targets.forEach((target) => {
            target.textContent =
                target.textContent?.replace(/필수/, s("require")) || "";
        });
    }, []);
};
