import { getRefetch } from "@janda-com/front";
import { HOMEPAGE_MANAGE } from "../apollo/gql/homepage";
import { SYSTEM_INFO } from "../apollo/gql/systemInfo";
import { homepageManage, homepageManageVariables } from "../types/api";
import { generateMutationHook } from "../utils/query";

export const useHomepageManage = generateMutationHook<
    homepageManage,
    homepageManageVariables
>(HOMEPAGE_MANAGE, { ...getRefetch(SYSTEM_INFO) });
