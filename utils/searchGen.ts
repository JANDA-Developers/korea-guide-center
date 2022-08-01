import { updateURLParameters, UrlParam } from "./getUpdateUrlParam";
import { Paths } from "../pages/index[depre]";

export const pageQueryGenerate = <T>(query: T, path: Paths) => {
    const urlQueries: UrlParam[] = Object.entries(query).map(
        ([key, value]): UrlParam => ({ param: key, paramVal: value })
    );

    let host = location.origin;
    if (process.env.NODE_ENV === "production" && host.includes("localhost")) {
        // host = "https://jungle.booking.stayjanda.cloud";
        throw Error("--!");
    }

    return updateURLParameters(host + path, urlQueries);
};
