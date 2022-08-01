import { IJDalignProp, JDalign, JDtypho, Small, Tiny } from "@janda-com/front";
import { useRouter } from "next/router";
import React from "react";
import { LinkText } from "../link/Link";

export interface IBreadLink {
    label: string;
    link?: string;
}

interface IProp extends IJDalignProp {
    links: IBreadLink[];
}

export const BreadColumn: React.FC<IProp> = ({ links, ...props }) => {
    const router = useRouter();
    return (
        <JDalign className={`breadColumn ${props.className}`} {...props}>
            <Small weight={300} flex={{ vCenter: true }}>
                {links?.map((link) =>
                    link.link ? (
                        <LinkText
                            style={{
                                textDecoration: "none",
                            }}
                            className="breadColumn__link"
                            onClick={() => {
                                router.push(link.link!);
                            }}
                        >
                            {link.label}
                        </LinkText>
                    ) : (
                        <JDtypho className="breadColumn__link">
                            {link.label}
                        </JDtypho>
                    )
                )}
            </Small>
        </JDalign>
    );
};
