import { useRouter } from "next/router";
import { useSignIn, useSignOut } from "./useUser";
import _ from "lodash";
import { Paths } from "../pages/index[depre]";
import { useHotKey } from "./useHotKey";

export const useDummyLogin = () => {
    const router = useRouter();
    const [signInMu] = useSignIn({
        onCompleteSucess: () => {
            // location.reload();
        },
    });
    const [signOut] = useSignOut();

    const account = {
        admin: {
            email: "colton159@naver.com",
            password: "#rammus159",
        },
    };

    const adminLogin = signInMu.bind(null, {
        variables: {
            input: account.admin,
        },
    });

    const toDashBoard = () => router.push(Paths.guide);
    const toMain = () => router.push("/");

    useHotKey([
        ["ctrl+1", adminLogin],
        ["ctrl+5", signOut],

        ["shift+1", adminLogin],
        ["shift+5", signOut],

        ["alt+1", toDashBoard],
        ["alt+2", toMain],
    ]);
};
