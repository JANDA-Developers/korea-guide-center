import { JDcontainer } from "@janda-com/front";
import React, { useContext } from "react";
import { PageHeader } from "../../component/pageHeader/PageHeader";
import Pagination from "../../component/pagination/Pagination";
import { ReviewBoxsWithApi } from "../../component/reviewBox/ReviewBoxs";
import { AppContext } from "../../context/context";
import { _ReviewFilter } from "../../types/api";

interface IProp {}

export const ReviewsGuidePage: React.FC<IProp> = () => {
    const { isMaster, me } = useContext(AppContext);

    const onwerFilter: _ReviewFilter = isMaster
        ? {}
        : {
              guideId__eq: me?._id,
          };

    return (
        <JDcontainer verticalPadding>
            <PageHeader
                pageName="후기관리"
                title={"투어에 어떤 후기들이 작성되었는지 확인해보세요. "}
            />
            <ReviewBoxsWithApi
                cardView
                queryParam={{ fixingFilter: { ...onwerFilter } }}
            />
        </JDcontainer>
    );
};
