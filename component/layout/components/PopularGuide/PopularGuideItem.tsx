import { useRouter } from "next/router";
import React, { useContext } from "react";
import { AppContext } from "../../../../context/context";
import { Paths } from "../../../../pages/index[depre]";

interface IPopularGuideItem {
    _id: string;
    image: string;
    name: string;
    introduce: any;
    categorys: any;
    role: string;
}

const PopularGuideItem = ({
    _id,
    image,
    name,
    introduce,
    categorys,
    role,
}: IPopularGuideItem) => {
    const router = useRouter();
    const { l } = useContext(AppContext);
    return (
        <div
            className="item bloc-card free"
            data-linkall="a"
            onClick={() => {
                router.push(Paths.profile + "/" + _id);
            }}
        >
            <figure className="fit-cover o100">
                <img
                    src={image}
                    alt="Profile Pic"
                    width="335"
                    height="335"
                    className="lazy"
                />
            </figure>
            <div className="content">
                <span className="category">{role}</span>
                <a>
                    <h3>{name}</h3>
                </a>
                <p>
                    {" "}
                    {l(introduce).length > 90
                        ? l(introduce).slice(0, 90) + "..."
                        : l(introduce)}
                </p>
            </div>
            <div className="info-bottom">
                <span
                    className="btn gtm-event-info-booking"
                    style={{
                        boxSizing: "border-box",
                        width: "100%",
                    }}
                >
                    Profile
                </span>
                {/* <span className="price">Free</span> */}
            </div>
        </div>
    );
};

export default React.memo(PopularGuideItem);
