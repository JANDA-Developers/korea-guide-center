import { gql } from "@apollo/client";
import { F_TRAVLER } from "./booking";
import { F_CATEGORY } from "./category";
import { F_COLLECTION_DATA_INTERFACE, F_LANGS } from "./shared";
import { F_TOUR } from "./tour";

export const F_WISH_TOUR = gql`
    fragment FwishTour on WishTour {
        region {
            ...Fcategory
        }
        category {
            ...Fcategory
        }
        lang
        langCustom
        travelStartTime
        wishMemeo
        money
        regionDetail
        contents
        travlers {
            ...Ftraveler
        }
        categoryMini {
            ...Fcategory
        }
        price
        adultCnt
        babyCnt
        kidsCnt
        totalCnt
        startDate
        endDate
    }
    ${F_TOUR}
    ${F_TRAVLER}
    ${F_CATEGORY}
`;

export const F_OFFER = gql`
    fragment Foffer on Offer {
        ...FcollectionDataInterface
        offerName
        offerNickName
        offerId
        tourTitle {
            ...Flangs
        }
        tourStart
        tourCode
        tourId
        guideId
        guideName
        guideNickName
        wishTour {
            ...FwishTour
        }
        proposalTours {
            ...Ftour
        }
        status
        chatRooms
    }
    ${F_TOUR}
    ${F_LANGS}
    ${F_WISH_TOUR}
    ${F_COLLECTION_DATA_INTERFACE}
`;
