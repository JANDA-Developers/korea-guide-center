import { useEffect } from "react";

export const useIframeHeightSender = () => {
    useEffect(() => {
        const num = setInterval(() => {
            let height;
            const target = document.getElementById("BuyerRouter");
            if (!target) return;
            if (height !== target.offsetHeight) {
                height = document.getElementById("BuyerRouter")!.offsetHeight;
                window.parent.postMessage(
                    {
                        frameHeight: height,
                    },
                    "*"
                );
            }
        }, 300);

        return () => clearInterval(num);
    }, []);
};
