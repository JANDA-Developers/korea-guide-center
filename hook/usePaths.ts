import { useRouter } from "next/router";
import { useHistory } from "react-router-dom";
import { Paths } from "../pages/index[depre]";
import { IProductDetailQuery } from "../pages/product/[id]";
import { pageQueryGenerate } from "../utils/searchGen";

export const usePaths = () => {
    const router = useRouter();

    const toProductDetailPage = (
        pid: string,
        prameters?: IProductDetailQuery
    ) => {
        pageQueryGenerate<IProductDetailQuery>(
            {
                ...prameters,
            },
            Paths.pay
        );

    router.push(Paths.productDetailView + "/" + pid, undefined, {
            locale: router.locale,
        });
    };
    const toGuideProfileDetail = (guideId: string) => {
        const lcoale = router.locale || "ko";
        window.open(
            location.origin + `/${lcoale}/` + Paths.profile + "/" + guideId
        );
    };

    return { toGuideProfileDetail, toProductDetailPage };
};
