import { gql } from "@apollo/client";
import {
    F_NOTIFICATION_MANAGER,
    F_NOTIFICATION_SENDER,
    F_PAGEINFO,
    F_USER,
    F_USERERROR,
} from "./fragment/fragments";
import { F_REVIEW } from "./fragment/review";

export const USER_FIND_PASSWORD = gql`
    mutation userFindPassword($email: String!, $name: String!) {
        UserFindPassword(email: $email, name: $name) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const USER_FIND_BY_ID = gql`
    query userFindById($userId: ObjectId!) {
        UserFindById(userId: $userId) {
            ...Fuser
        }
    }
    ${F_USER}
`;

export const ADD_TEMP_PASSWORD = gql`
    mutation addTempPassword($userId: ObjectId!) {
        AddTempPassword(userId: $userId)
    }
`;

export const USER_DELETE = gql`
    mutation userDelete($userId: ObjectId!, $message: String!) {
        UserDelete(userId: $userId, message: $message) {
            ok
            error {
                ...FuserError
            }
            data {
                ...Fuser
            }
        }
    }
    ${F_USER}
    ${F_USERERROR}
`;

export const USER_ACCEPT = gql`
    mutation userAccept($userId: ObjectId!) {
        UserAccept(userId: $userId) {
            ok
            error {
                ...FuserError
            }
            data {
                ...Fuser
            }
        }
    }
    ${F_USER}
    ${F_USERERROR}
`;

export const USER_UPDATE = gql`
    mutation userUpdate($userId: ObjectId!, $input: UserUpdateInput!) {
        UserUpdate(userId: $userId, input: $input) {
            ok
            error {
                ...FuserError
            }
            data {
                ...Fuser
            }
        }
    }
    ${F_USER}
    ${F_USERERROR}
`;

export const USER_VERIFY_BY_ADMIN = gql`
    mutation userVerifyByAdmin($userId: ObjectId!) {
        UserVerifyByAdmin(userId: $userId) {
            ok
            error {
                ...FuserError
            }
            data {
                ...Fuser
            }
        }
    }
    ${F_USER}
    ${F_USERERROR}
`;

export const USER_FIND_EMAIL = gql`
    mutation userFindEmail($phoneNumber: String!, $name: String!) {
        UserFindEmail(name: $name, phoneNumber: $phoneNumber) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const SIGN_OUT = gql`
    mutation signOut {
        SignOut {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const SIGN_UP = gql`
    mutation signUp($input: UserSignUpInput!, $role: UserRole!) {
        SignUp(input: $input, role: $role) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const SIGN_IN = gql`
    mutation signIn($input: SignInInput!) {
        SignIn(input: $input) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const ME = gql`
    query me {
        Me {
            ...Fuser
            myReviews {
                ...Freview
            }
        }
    }
    ${F_REVIEW}
    ${F_USER}
`;

export const MY_WISH_LIST = gql`
    query myWishList {
        MyWishList
    }
`;

export const MY_NOTIFICATION_MANAGER = gql`
    query myNotificationManager {
        MyNotificationManager {
            ...FnotificationManager
            senders {
                ...FnotificationSender
            }
        }
    }
    ${F_NOTIFICATION_SENDER}
    ${F_NOTIFICATION_MANAGER}
`;

export const USER_DUPLICATE_CHECK = gql`
    query userDuplicateCheck($target: String!, $value: String!) {
        UserDuplicateCheck(target: $target, value: $value) {
            duplicated
        }
    }
`;

export const PROFILE_UPDATE_FOR_BUSINESS_USER = gql`
    mutation profileUpdateForBusinessUser(
        $input: ProfileUpdateForBusinessUserInput!
        $pw: String!
    ) {
        ProfileUpdateForBusinessUser(input: $input, pw: $pw) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const RESIGN = gql`
    mutation resign($resignData: ResignDataInput!) {
        Resign(resignData: $resignData) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const WISH_LIST_TOGGLE = gql`
    mutation wishListToggle($wishProduct: ObjectId!) {
        WishListToggle(wishProduct: $wishProduct) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const USER_LIST = gql`
    query userList(
        $sort: [_IUserSort!]
        $filter: _IUserFilter
        $pagingInput: OffsetPagingInput!
        $random: Boolean
    ) {
        UserList(
            random: $random
            sort: $sort
            filter: $filter
            pagingInput: $pagingInput
        ) {
            pageInfo {
                ...FoffsetPagingInfo
            }
            items {
                ...Fuser
            }
        }
    }
    ${F_PAGEINFO}
    ${F_USER}
`;

export const USER_STOP_TOGGLE = gql`
    mutation userStopToggle($userId: ObjectId!, $message: String!) {
        UserStopToggle(userId: $userId, message: $message) {
            ok
        }
    }
`;
