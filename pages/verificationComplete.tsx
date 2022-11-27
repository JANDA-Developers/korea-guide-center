import {
    Bold,
    getFromUrl,
    JDbutton,
    JDcard,
    JDcontainer,
    Small,
    WindowSize,
} from "@janda-com/front";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import BookLayout from "../component/layout/BookLayout";
import { CardHead } from "../component/modalHead/ModalHead";
import { PhotoFrame } from "../component/photoFrame/PhotoFram";
import { AppContext } from "../context/context";
import { Paths } from "./index[depre]";

interface IProp {}

export const VerificationPage: React.FC<IProp> = () => {
    if (typeof window === "undefined") return null;
    const { s } = useContext(AppContext);
    const router = useRouter();
    const verifiEmail = getFromUrl("email") || "";

    return (
        <BookLayout>
            <Head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                gtag('event', 'conversion', {'send_to': '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}/cG7eCMzB7IIYEPH7irMo'});`,
                    }}
                >
                    {" "}
                </script>
            </Head>
            <JDcontainer verticalPadding size={WindowSize.sm}>
                <JDcard
                    foot={
                        <Link href={Paths.login}>
                            <a>
                                <JDbutton
                                    thema="primary"
                                    mode="flat"
                                    br="square"
                                    size="longLarge"
                                >
                                    {s("login")}
                                </JDbutton>
                            </a>
                        </Link>
                    }
                    head={
                        <CardHead
                            title={s("signUpCompleted")}
                            description={<p>{s("signUpCompletedMessage")}</p>}
                        />
                    }
                >
                    <PhotoFrame src="/img/join_img01.png" />
                </JDcard>
            </JDcontainer>
        </BookLayout>
    );
};

export default VerificationPage;
