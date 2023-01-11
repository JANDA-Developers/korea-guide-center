import { IJDalignProp, JDalign, JDtypho, useDropDown } from "@janda-com/front";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { LANGUAGES } from "../../types/api";
import { LangToLang } from "../../types/const";
import { LanguagesOps } from "../../utils/enumToKr";
import DropDown from "../dropDown/DropDown";
import JDIcon, { JDicon } from "../icons/Icons";

interface IProp extends IJDalignProp {}

export const LanguageSelecter: React.FC<IProp> = ({ ...props }) => {
    const { locale, asPath, push, pathname } = useRouter();
    const { s } = useContext(AppContext);
    const languageSelectDropDownHook = useDropDown();

    return (
        <JDalign style={{ position: "relative" }} {...props}>
            <JDalign
                flex={{
                    vCenter: true,
                }}
                mr
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const cooldinate = {
                        top: "2rem",
                        right: "0rem",
                    };

                    languageSelectDropDownHook.open(undefined, cooldinate);
                }}
                className="languageSelecter"
            >
                <JDIcon size="small" mr="tiny" icon="global" />
                <JDtypho hover mr="tiny">
                    {s(locale as any)}
                </JDtypho>
                <JDicon color="grey4" size="tiny" hover icon={"arrowDown"} />{" "}
            </JDalign>
            <DropDown
                closeOnWindowClick
                mode="fixed"
                position="absolute"
                {...languageSelectDropDownHook}
            >
                <div className="languageDropBox">
                    {LanguagesOps.filter((langOp) => langOp.value !== "ot").map(
                        (lang, i) => {
                            return (
                                <Link
                                    key={lang.value + "languageSelecter"}
                                    href={asPath}
                                    locale={lang.value}
                                >
                                    <a>
                                        <div
                                            onClickCapture={() => {
                                                push(asPath, asPath, {
                                                    locale: lang.value,
                                                });
                                            }}
                                            className="languageDropBox__lang"
                                        >
                                            <JDtypho
                                                hover
                                                size="small"
                                                onClick={() => {}}
                                                key={"profileLi" + i}
                                                flex
                                                color="grey3"
                                            >
                                                {
                                                    // @ts-ignore
                                                    LangToLang[
                                                        // @ts-ignore
                                                        lang.value as keyof LANGUAGES
                                                    ]
                                                }
                                            </JDtypho>
                                        </div>
                                    </a>
                                </Link>
                            );
                        }
                    )}
                </div>
            </DropDown>
        </JDalign>
    );
};
