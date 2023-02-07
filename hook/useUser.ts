import { MutationHookOptions, useMutation } from "@apollo/client";
import { getRefetch, toast } from "@janda-com/front";
import { useContext, useEffect, useState } from "react";
import { SYSTEM_INFO } from "../apollo/gql/systemInfo";
import {
    ADD_TEMP_PASSWORD,
    ME,
    MY_NOTIFICATION_MANAGER,
    MY_WISH_LIST,
    PROFILE_UPDATE_FOR_BUSINESS_USER,
    RESIGN,
    SIGN_IN,
    SIGN_OUT,
    SIGN_UP,
    USER_ACCEPT,
    USER_DELETE,
    USER_DUPLICATE_CHECK,
    USER_FIND_BY_ID,
    USER_FIND_EMAIL,
    USER_FIND_PASSWORD,
    USER_LIST,
    USER_STOP_TOGGLE,
    USER_UPDATE,
    WISH_LIST_TOGGLE,
} from "../apollo/gql/user";
import { AppContext } from "../context/context";
import {
    _IUserFilter,
    _IUserSort,
    userList,
    userList_UserList_items,
    userListVariables,
    me,
    me_Me,
    profileUpdateForBusinessUser,
    profileUpdateForBusinessUserVariables,
    signInVariables,
    signIn,
    signUp,
    signUpVariables,
    signOut,
    userDuplicateCheck,
    userDuplicateCheckVariables,
    userDuplicateCheck_UserDuplicateCheck,
    UserRole,
    Fuser,
    VerificationTarget,
    verificationComplete_VerificationComplete_data,
    myNotificationManager,
    myNotificationManager_MyNotificationManager,
    userFindById,
    userFindByIdVariables,
    userUpdate,
    userUpdateVariables,
    userDelete,
    userDeleteVariables,
    userFindById_UserFindById,
    resign,
    resignVariables,
    addTempPassword,
    addTempPasswordVariables,
    wishListToggle,
    wishListToggleVariables,
    myWishList,
    userVerifyByAdmin,
    userVerifyByAdminVariables,
    userAccept,
    userAcceptVariables,
    userFindEmail,
    userFindEmailVariables,
    userFindPassword,
    userFindPasswordVariables,
    userStopToggle,
    userStopToggleVariables,
} from "../types/api";
import LocalManager from "../utils/localManager";
import { completeMsg } from "../utils/onCompletedMessage";
import {
    generateFindQuery,
    generateListQueryHook,
    generateMutationHook,
    generateQueryHook,
} from "../utils/query";
import { LocalCustomStorage, LocalItemStorage } from "../utils/storage";

export const useBusiProfileUpdate = generateMutationHook<
    profileUpdateForBusinessUser,
    profileUpdateForBusinessUserVariables
>(PROFILE_UPDATE_FOR_BUSINESS_USER, { ...getRefetch(ME) });
export const useStoreSign = generateMutationHook<
    profileUpdateForBusinessUser,
    profileUpdateForBusinessUserVariables
>(PROFILE_UPDATE_FOR_BUSINESS_USER);
export const useMe = generateQueryHook<me, me_Me>(ME);
export const useMyWishList = generateQueryHook<myWishList, string[]>(
    MY_WISH_LIST
);

export const useResign = generateMutationHook<resign, resignVariables>(RESIGN);
export const useUserDuplicateCheck = generateQueryHook<
    userDuplicateCheck,
    userDuplicateCheck_UserDuplicateCheck,
    userDuplicateCheckVariables
>(USER_DUPLICATE_CHECK, { skipInit: true });

export const useUserList = generateListQueryHook<
    _IUserFilter,
    _IUserSort,
    userList,
    userListVariables,
    userList_UserList_items
>(USER_LIST, { initialSort: [_IUserSort.createdAt__desc] });

export const useSignUp = generateMutationHook<signUp, signUpVariables>(SIGN_UP);
export const useSignIn = generateMutationHook<signIn, signInVariables>(
    SIGN_IN,
    { ...getRefetch(ME, SYSTEM_INFO) }
);
export const useSignOut = generateMutationHook<signOut>(SIGN_OUT, {
    testAvailable: true,
    stopUserAvailable: true,
    ...getRefetch(ME, SYSTEM_INFO),
});
export const useUserAccept = generateMutationHook<
    userAccept,
    userAcceptVariables
>(USER_ACCEPT, {
    testAvailable: true,
    stopUserAvailable: true,
    ...getRefetch(USER_LIST),
});

export const useUserUpdate = generateMutationHook<
    userUpdate,
    userUpdateVariables
>(USER_UPDATE, { ...getRefetch(ME, SYSTEM_INFO) });


export const useUserVerifyByAdmin = generateMutationHook<
    userVerifyByAdmin,
    userVerifyByAdminVariables
>(USER_UPDATE, { ...getRefetch(USER_LIST) });
export const userUserDelete = generateMutationHook<
    userDelete,
    userDeleteVariables
>(USER_DELETE, { ...getRefetch(USER_LIST) });
export const useuserFindById = generateFindQuery<
    userFindById,
    userFindByIdVariables,
    userFindById_UserFindById
>("userId", USER_FIND_BY_ID);

// 이메일 찾기
export const useEmailFind = generateMutationHook<
    userFindEmail,
    userFindEmailVariables
>(USER_FIND_EMAIL);

export const useAddTempPassword = generateMutationHook<
    addTempPassword,
    addTempPasswordVariables
>(ADD_TEMP_PASSWORD);

export const userUserFindPassword = generateMutationHook<
    userFindPassword,
    userFindPasswordVariables
>(USER_FIND_PASSWORD);

export const useUserStopToggle = generateMutationHook<
    userStopToggle,
    userStopToggleVariables
>(USER_STOP_TOGGLE, { ...getRefetch(USER_LIST) });

export const useUserDelete = generateMutationHook<
    userDelete,
    userDeleteVariables
>(USER_DELETE);

export const useMyNotificationManager = generateQueryHook<
    myNotificationManager,
    myNotificationManager_MyNotificationManager
>(MY_NOTIFICATION_MANAGER);

export const useWishListToggle = generateMutationHook<
    wishListToggle,
    wishListToggleVariables
>(WISH_LIST_TOGGLE, { skipLoadingEffect: true });

export const myWishListKey = (id?: string) => "wishList" + (id || "unlogined");
export const useWishToggler = (productId: string) => {
    const { me, loginAnd } = useContext(AppContext);
    const wishListKey = myWishListKey(me?._id);

    const wishStorage = new LocalManager({ storage: "localStorage" });
    const localWishList: string[] =
        wishStorage?.getLocalObj(wishListKey, []) || [];
    const isMyWish = localWishList.includes(productId);
    const [wish, setWish] = useState(isMyWish);
    const [wishToggle, { loading }] = useWishListToggle({
        onCompleted: ({ WishListToggle }) => {
            if (WishListToggle.ok) {
                // if (wish) toast("위시리스트에 추가 되었습니다");
                // else toast("위시리스트에서 제거 되었습니다");
            }
        },
    });

    const handleToggle = (e: any) => {
        e.stopPropagation();
        e.preventDefault();
        return loginAnd(() => {
            const localWishList: string[] =
                wishStorage?.getLocalObj(wishListKey, []) || [];
            const nextWishs = [productId, ...localWishList];
            if (!isMyWish) wishStorage?.saveLocal(wishListKey, nextWishs);
            else {
                wishStorage?.saveLocal(
                    wishListKey,
                    nextWishs.filter((wish) => wish !== productId)
                );
            }
            setWish(!wish);
            wishToggle({
                variables: {
                    wishProduct: productId,
                },
            });
        });
    };

    return { handleToggle, wish, wishListKey };
};

export const useDuplicateCheck = (defaultCheck: boolean = false) => {
    const { s } = useContext(AppContext);
    const [message, setMessage] = useState({
        success: "",
        fail: "",
    });
    const [duplicateChecked, setDuplicateCheck] = useState(defaultCheck);
    const { getData: duplicateCheck } = useUserDuplicateCheck({
        onCompleted: ({ UserDuplicateCheck }) => {
            if (UserDuplicateCheck) {
                setDuplicateCheck(!UserDuplicateCheck.duplicated);
                if (UserDuplicateCheck.duplicated) toast.warn(message.fail);
                else toast.success(message.success);
            }
        },
    });

    const checkNickNameDuplicateCheck = (nickName: string) => {
        setMessage({
            fail: `${nickName}${s("isAlreadyUseNickName")}`,
            success: `${nickName}${s("isAvailable")}`,
        });

        setTimeout(() => {
            duplicateCheck({
                variables: {
                    target: "nickName" as keyof Fuser,
                    value: nickName,
                },
            });
        }, 100);
    };
    const checkEmailDuplicate = (email: string) => {
        setMessage({
            fail: `${email} ${s("isAlreadyUseEmail")}`,
            success: `이메일 ${email}은 사용 가능합니다`,
        });

        setTimeout(() => {
            duplicateCheck({
                variables: {
                    target: "email" as keyof Fuser,
                    value: email,
                },
            });
        }, 100);
    };

    return {
        duplicateChecked,
        checkNickNameDuplicateCheck,
        setDuplicateCheck,
        checkEmailDuplicate,
    };
};

export const useUserManage = () => {
    const { promptModalHook } = useContext(AppContext);
    const [userDeleteMu] = useUserDelete({
        skipMessage: true,
        onCompleteSucess: () => {
            toast.success("유저가 삭제되었습니다");
            promptModalHook.closeModal();
        },
    });
    const [stopToggleMu] = useUserStopToggle({
        onCompleteSucess: () => {
            toast.success("변경완료");
            promptModalHook.closeModal();
        },
    });
    const [acceptMu] = useUserAccept({
        onCompleteSucess: () => {
            toast.success("가이드 승인 조치가 이루어졌습니다");
        },
    });

    const handleDeleteUser = (userId: string) => () => {
        promptModalHook.openModal({
            title: "삭제 사유를 입력 해주세요.",
            messageLabel: "삭제사유",
            callBack: (message) => {
                userDeleteMu({
                    variables: {
                        message,
                        userId,
                    },
                });
            },
        });
    };

    const handleStopToggle = (userId: string) => () => {
        promptModalHook.openModal({
            title: "메세지를 입력해주세요.",
            messageLabel: "전달사항",
            callBack: (message) => {
                stopToggleMu({
                    variables: {
                        message,
                        userId,
                    },
                });
            },
        });
    };

    const handleAcceptGuide = (userId: string) => () => {
        acceptMu({
            variables: {
                userId,
            },
        });
    };

    return { handleStopToggle, handleAcceptGuide, handleDeleteUser };
};
