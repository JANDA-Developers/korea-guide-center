
export const SERVER_URI = `${process.env.NEXT_PUBLIC_SERVER_URI}/graphql`

export default (() => {
    console.log("dfdsafaf: " + SERVER_URI);
    return SERVER_URI;
})();
