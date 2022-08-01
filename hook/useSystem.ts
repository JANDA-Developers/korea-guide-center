import { SYSTEM_INFO } from "../apollo/gql/systemInfo";
import { systemInfo, systemInfo_SystemInfo } from "../types/api";
import { generateQueryHook } from "../utils/query";

export const useSystemInfo = generateQueryHook<
    systemInfo,
    systemInfo_SystemInfo
>(SYSTEM_INFO);
