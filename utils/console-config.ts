export const consoleCover = () => {
    if (process.env.NODE_ENV !== "development") {
        console.log(
            "%c Korea Guide Center",
            "background: #222; color: #bada55"
        );
        console.log = () => {};
        console.warn = () => {};
        console.error = () => {};
        console.info = () => {};
        console.count = () => {};
    }
};
export default "";
