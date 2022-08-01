import { useRouter } from "next/router";
import { useEffect } from "react";

export const useGa4Next = () => {
    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = (url: string) => {
            window.gtag(
                "config",
                process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || "",
                {
                    page_path: url,
                }
            );
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);
};
