import { gql } from "@apollo/client";
import { F_BANK_INFO, F_FILE, F_LANGS } from "./shared";

export const F_TRAVLER = gql`
    fragment Ftraveler on TravelerInfo {
        name
        phoneNumber
        email
        gender
        isBooker
        Representative
        passportNumber
        countryCode
        birthDate
    }
`;

export const F_BOOKING = gql`
    fragment Fbooking on Booking {
        _id
        createdAt
        updatedAt
        paymethod
        paidPrice
        pendingPrice
        refundPrice
        byHand
        cancelDate
        cancelReason
        refundMethod
        adultCount
        kidsCount
        babyCount
        buyerId
        tourRecycleNumber
        buyerPhone
        buyerEmail
        buyerGender
        buyerMessage
        buyerName
        guideMemo
        adminMemo
        productId
        productCode
        bankTranferName
        refundBankInfo {
            ...FbankInfo
        }
        tourThumbNail {
            ...Ffile
        }
        tourTitle {
            ...Flangs
        }
        tourCode
        bookingStatus
        tourId
        tourStart
        code
        travlers {
            ...Ftraveler
        }
        guideName
        guideNickName
        guideId
        guideImage {
            ...Ffile
        }
    }
    ${F_BANK_INFO}
    ${F_TRAVLER}
    ${F_FILE}
    ${F_LANGS}
`;
