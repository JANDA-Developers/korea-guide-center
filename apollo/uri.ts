const IP = "http://10.159.1.17";
const NAME = "http://localhost";
export const LOCAL_IP = NAME;
const LOCAL_ORIGIN = `${LOCAL_IP}:4000`;
const LOCAL = `${LOCAL_ORIGIN}/graphql`;
const PROD = "https://api.koreaguide.center/graphql";

export const SERVER_URI = process.env.NODE_ENV === "development" ? LOCAL : PROD;
export const SERVER_ORIGIN =
    process.env.NODE_ENV === "development"
        ? LOCAL_ORIGIN
        : "https://koreaguide.center";

export default (() => {
    console.log("Listening: " + SERVER_URI);
    return SERVER_URI;
})();
