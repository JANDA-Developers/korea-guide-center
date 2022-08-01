import { gql } from "@apollo/client";
import { F_SYSTEMINFO } from "./fragment/systemInfo";

export const SYSTEM_INFO = gql`
    query systemInfo {
        SystemInfo {
            ...FsystemInfo
        }
    }
    ${F_SYSTEMINFO}
`;
