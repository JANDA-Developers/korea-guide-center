const IP = "http://10.159.1.17";
const NAME = "http://localhost";
export const LOCAL_IP = NAME;
const LOCAL = `${LOCAL_IP}:4000/graphql`;
const PROD = "https://api.koreaguide.center/graphql";

export const SERVER_URI = process.env.NODE_ENV === "development" ? LOCAL : PROD;

export default (() => {
    console.log("dfdsafaf: " + SERVER_URI);
    return SERVER_URI;
})();
