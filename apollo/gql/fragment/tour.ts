import { gql } from "@apollo/client";
import { F_PRODUCT } from "./product";

export const F_TOUR = gql`
    fragment Ftour on Tour {
        _id
        createdAt
        updatedAt
        productId
        productInfomation {
            ...Fproduct
        }
        number
        bookings
        startDate
        endDate
        totalPaidAmt
        totalRefundPrice
        totalAdult
        totalKids
        totalBaby
        totalMember
        code
        representive
        completeBookingCnt
        cancelBookingCnt
        readyBookingCnt
        settlementStatus
        settlementId
        settlementAmt
        tourStatus
        endDate
    }
    ${F_PRODUCT}
`;
