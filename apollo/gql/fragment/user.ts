import { F_SNS } from "./sns";
import { gql } from "@apollo/client";
import { F_CATEGORY } from "./category";
import { F_PRODUCT } from "./product";
import { F_BANK_INFO, F_FILE, F_LANGS } from "./shared";

export const F_USER = gql`
    fragment Fuser on IUser {
        _id
        updatedAt
        createdAt
        isPasswordChange
        stop
        name
        nickName
        nationality
        email
        chatRoomIds
        isOauth
        gender
        phoneNumber
        passportNumber
        countryCode
        oauthSignUpCompleted
        isVerifiedByAdmin
        birthDate
        stop
        stopReason
        applyAt
        profileImage {
            ...Ffile
        }
        profileMediumImage {
            ...Ffile
        }
        profileVideo {
            ...Ffile
        }
        guideCategory {
            ...Fcategory
        }

        isVerifiedPhoneNumber
        isVerifiedEmail
        regions {
            ...Fcategory
        }
        guideLicenses {
            ...Ffile
        }
        bankInfo {
            ...FbankInfo
        }
        langs
        role
        sns {
            ...Fsns
        }
        products {
            ...Fproduct
        }
        myProductInfoes {
            code
            title {
                ...Flangs
            }
        }
        myTourInfoes {
            code
            title {
                ...Flangs
            }
        }
        myBookingInfoes {
            bookingCode
            tourCode
            tourNumber
            productCode
            tourTitle {
                ...Flangs
            }
        }
        company
        introduce {
            ...Flangs
        }
        resginData {
            resign
            resignDate
            resignReason
        }
        chatWiths
        myWishList
        adminMemo
        location {
            address
            addressDetail
        }
        profileBgImage {
            ...Ffile
        }
        bankImage {
            ...Ffile
        }
        unReadSystemNoties
    }
    ${F_SNS}
    ${F_BANK_INFO}
    ${F_CATEGORY}
    ${F_LANGS}
    ${F_PRODUCT}
    ${F_FILE}
    ${F_CATEGORY}
`;
