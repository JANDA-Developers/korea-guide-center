export const checkMobile = () => {
    let isMobile = false;
    if (typeof window !== "undefined") {
        isMobile = window.outerWidth < 500;
    }
    return isMobile;
};
