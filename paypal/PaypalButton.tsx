import React from "react";
import ReactDOM from "react-dom";

export interface IPaypalButtonProp {
    amount: number;
    callBackApprove: (details: any) => void;
}
// @ts-ignore
const PAY_PAL_BUTTOn = window.paypal.Buttons.driver("react", {
    React,
    ReactDOM,
});

const PaypalButton: React.FC<IPaypalButtonProp> = ({
    amount,
    callBackApprove,
}) => {
    // amount : 상품가격

    // 환율 rate는 나중에 정리되면 fetch 하는 쪽으로 변경
    const exchangeRate = 0.0007;
    const dollor = amount * exchangeRate;
    const createOrder = (data: any, actions: any) => {
        console.log(data);
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: (Math.round(dollor * 100) / 100).toString(),
                    },
                },
            ],
        });
    };

    const onApprove = (data: any, actions: any) => {
        return actions.order.capture().then(callBackApprove);
    };

    return <PAY_PAL_BUTTOn createOrder={createOrder} onApprove={onApprove} />;
};

export default PaypalButton;
