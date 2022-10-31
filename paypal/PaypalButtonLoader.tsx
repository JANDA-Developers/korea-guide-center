import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect } from "react";
import { useState } from "react";
import { Preloader } from "../component/pageLoading/Preloader";
import { IPaypalButtonProp } from "./PaypalButton";
const PayPalButton = dynamic(() => import("./PaypalButton"), { ssr: false });

interface IProps extends IPaypalButtonProp {}

let intervalNum: NodeJS.Timeout;
export const PaypalButtonLoader: React.FC<IProps> = ({ ...props }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        //
        const checkLoaded = (): boolean => !!window.paypal;
        intervalNum = setInterval(() => {
            if (checkLoaded()) {
                setLoaded(true);
                clearInterval(intervalNum);
            }
        }, 1000);
    }, []);

    return loaded ? (
        <PayPalButton {...props} />
    ) : (
        <div>
            <Head>
                <script
                    src={`https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&locale=en_VG`}
                    type="text/javascript"
                />
            </Head>
            <Preloader style={{ width: 100, height: 100 }} />
        </div>
    );
};

export default "";
