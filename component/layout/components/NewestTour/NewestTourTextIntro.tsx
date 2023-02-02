import { useRouter } from "next/router";
import React, { useContext } from "react";
import { SeeMore } from "../../../../atom/SeeMore";
import { AppContext } from "../../../../context/context";
import { searchPageQueryGenerate } from "../../../../pages/cities/search";
import { _ProductSort } from "../../../../types/api";

const NewestTourTextIntro = () => {
    const router = useRouter();
    const { s } = useContext(AppContext);
    const onClick = () => {
        router.push(
            searchPageQueryGenerate({
                sort: [_ProductSort.rating__desc, _ProductSort.createdAt__desc],
            })
        );
    };
    return (
        <div className="txt-intro">
            <h2>
                <span id="newest-tour">
                    <span
                        style={{
                            color: "#db1a1c",
                            display: "inline",
                        }}
                    >
                        {s("Newest")}
                    </span>{" "}
                    {s("TourText")}
                </span>
            </h2>

            <div className="align-btn-right"></div>
            <SeeMore onSeeMore={onClick} />
        </div>
    );
};

export default React.memo(NewestTourTextIntro);
