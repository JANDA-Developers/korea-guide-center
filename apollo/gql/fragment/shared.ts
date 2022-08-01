import { gql } from "@apollo/client";

export const F_COLLECTION_DATA_INTERFACE = gql`
    fragment FcollectionDataInterface on CollectionDataInterface {
        _id
        createdAt
        updatedAt
    }
`;

export const F_PAGEINFO = gql`
    fragment FoffsetPagingInfo on OffsetPagingInfo {
        pageIndex
        pageItemCount
        currentItemCount
        totalPageCount
        totalDocumentCount
    }
`;

export const F_USERERROR = gql`
    fragment FuserError on UserError {
        code
        message
        details
    }
`;
export const F_LOCATION = gql`
    fragment Flocation on Location {
        address
        addressDetail
        lat
        lng
    }
`;

export const F_BANK_INFO = gql`
    fragment FbankInfo on BankInfo {
        accountNum
        accountHolder
        bankName
    }
`;

export const F_TAG = gql`
    fragment Ftag on Tag {
        key
        value
    }
`;

export const F_VERIFICATION = gql`
    fragment Fverification on Verification {
        ...FcollectionDataInterface
        payload
        target
        isVerified
        event
        storeId
        expiresAt
        isExpire
    }
    ${F_COLLECTION_DATA_INTERFACE}
`;

export const F_FILE = gql`
    fragment Ffile on File {
        ...FcollectionDataInterface
        name
        description
        extension
        fileType
        mineType
        uri
        tags {
            key
            value
        }
    }
    ${F_COLLECTION_DATA_INTERFACE}
`;

export const F_ATTRIBUTE = gql`
    fragment Fattribute on Attribute {
        tags {
            key
            value
        }
        value
        placeHolder
        default
        require
        options
        label
        key
        displayType
    }
`;

export const F_LANGS = gql`
    fragment Flangs on Langs {
        ko
        en
        ja
        chi
        ot
    }
`;
