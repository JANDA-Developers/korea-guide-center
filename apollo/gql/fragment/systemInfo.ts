import { gql } from "@apollo/client";
import { F_GROUP } from "../group";
import { F_FEE_POLICY } from "../homepage";
import { F_CATEGORY } from "./category";
import { F_FILE } from "./shared";

export const F_HOMEPAGE = gql`
    fragment Fhomepage on Homepage {
        _id
        updatedAt
        createdAt
        bannerImages {
            ...Ffile
        }
        feePolicies {
            ...Ffeepolicy
        }
    }
    ${F_FEE_POLICY}
    ${F_FILE}
`;

export const F_SYSTEMINFO = gql`
    fragment FsystemInfo on SystemInfo {
        categories {
            ...Fcategory
        }
        groups {
            ...Fgroup
        }
        homepage {
            ...Fhomepage
        }
    }
    ${F_GROUP}
    ${F_CATEGORY}
    ${F_HOMEPAGE}
`;
