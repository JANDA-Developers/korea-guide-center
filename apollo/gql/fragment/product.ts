import { gql } from "@apollo/client";
import { F_CATEGORY } from "./category";
import { F_FILE, F_LANGS } from "./shared";

export const F_MAPMARKER = gql`
    fragment FmapMarker on MapMarker {
        lat
        lng
        address
    }
`;
export const F_SUBPLAN = gql`
    fragment FsubPlan on SubPlan {
        title {
            ...Flangs
        }
        time {
            ...Flangs
        }
        description {
            ...Flangs
        }
        photo {
            ...Ffile
        }
    }
    ${F_LANGS}
    ${F_FILE}
`;

export const F_PRODUCT = gql`
    fragment Fproduct on Product {
        _id
        createdAt
        updatedAt
        type
        status
        title {
            ...Flangs
        }
        languages
        marker {
            ...FmapMarker
        }
        masterConfirmed
        startTimeAmPm
        startTimeMin
        startTimeHour
        shortDecsription {
            ...Flangs
        }
        categoryMini {
            ...Fcategory
        }
        descriptionLarge {
            ...Flangs
        }
        region {
            ...Fcategory
        }
        startTime {
            ...Flangs
        }
        extraInfo {
            ...Flangs
        }
        startPoint {
            ...Flangs
        }
        include {
            ...Flangs
        }
        unInclude {
            ...Flangs
        }
        importantNotice {
            ...Flangs
        }
        category {
            ...Fcategory
        }
        videos {
            ...Ffile
        }
        thumbNailVideo {
            ...Ffile
        }
        adultOnly
        rangeDay
        tourDates
        priceAdult
        priceKid
        priceBaby
        isPriviate
        minimumPrice
        maxMember
        minMember
        guideName
        guideNickName
        guideImage {
            ...Ffile
        }
        subPlanes {
            ...FsubPlan
        }
        guideId
        address {
            ...Flangs
        }
        rating
        reviewCount
        code
        images {
            ...Ffile
        }
        thumbNail {
            ...Ffile
        }
        adminMemo
    }
    ${F_MAPMARKER}
    ${F_FILE}
    ${F_CATEGORY}
    ${F_LANGS}
    ${F_SUBPLAN}
    ${F_FILE}
`;
