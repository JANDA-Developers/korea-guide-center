import { useEffect, useState } from "react";

export const useIframeHeight = () => {
    const [height, setHeight] = useState(600);

    useEffect(() => {
        window.onmessage = (e: MessageEvent) => {
            if (e.data.hasOwnProperty("frameHeight")) {
                setHeight(e.data.frameHeight + 30);
            }
        };
    }, []);

    return { height, setHeight };
};
