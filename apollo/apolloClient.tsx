import { ApolloClient, from } from "@apollo/client";
import uri from "./uri";
import cache from "./cache";
import { createUploadLink } from "apollo-upload-client";
import { toast } from "@janda-com/front";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import fetch from "cross-fetch";

const headers = {};

const errorExceptions = ["signIn"];

const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
    if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) => {
            console.warn(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            );
        });
        const msg = graphQLErrors[0].message;

        const errNum = parseInt(sessionStorage.getItem("errCnt") || "0");
        sessionStorage.setItem("errCnt", `${errNum + 1}`);
        let errorMsg =
            process.env.NODE_ENV === "development"
                ? msg
                : "지금은 시도하실 수 없습니다. 문의를 주시거나, 나중에 다시 시도해주세요.";

        if (errNum < 5) {
            errorMsg = "입력값을 확인해주세요.";
        }

        if (!errorExceptions.includes(operation.operationName))
            toast.success(errorMsg, { toastId: "UnkownErrorToast" });
    } else if (networkError) {
        toast.warn("서버가 응답하지 않습니다", {
            toastId: "ServerIsNotRespond",
        });
    }
});

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            vesion: "1.0.0",
        },
    };
});

const fileUploadLink = createUploadLink({
    uri,
    credentials: "include",
    fetch: fetch as any,
});

// const splitLink = split(
//     ({ query }) => {
//         const definition = getMainDefinition(query);
//         return (
//             definition.kind === "OperationDefinition" &&
//             definition.operation === "subscription"
//         );
//     },
//     wsLink,
//     fileUploadLink
// );

const client = new ApolloClient({
    link: from([authLink, errorLink, fileUploadLink as any]),
    uri,
    version: "1.0.1",
    cache,
    credentials: "include",
});

export default client;
