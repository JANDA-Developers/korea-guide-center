import Head from "next/head";
import React from "react";
import BookLayout from "../../component/layout/BookLayout";
import { Sucess } from "../../page/pay/Sucess";

interface IProp {}

export const Sucesspage: React.FC<IProp> = () => {
    return (
        <BookLayout>
            <Head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                gtag('event', 'conversion', {'send_to': '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}/YvyVCMnB7IIYEPH7irMo'});`,
                    }}
                ></script>
            </Head>
            <Sucess />
        </BookLayout>
    );
};
export default Sucesspage;
