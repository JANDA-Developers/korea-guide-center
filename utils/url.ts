import { updateURLParameter } from "@janda-com/front";
import { IselectedOption } from "@janda-com/front/dist/types/interface";

export const updateURLParameters = (
    url: string,
    params?: IselectedOption[]
) => {
    let _url = url;
    params?.forEach((param) => {
        _url = updateURLParameter(_url, param.label, param.value);
    });
    return _url;
};

export function removeUrlParameter(url: string, paramKey: string) {
    var r = new URL(url);
    r.searchParams.delete(paramKey);
    return r.href;
}

export const removeAllUrlParameter = () => {
    window.history.replaceState(null, "", window.location.pathname);
};
