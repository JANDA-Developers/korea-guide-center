import { useLocation } from "react-router";

export function useUrlQuery() {
    return new URLSearchParams(useLocation().search);
}
