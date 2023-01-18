import React, { useContext } from "react";
import { AppContext } from "../../../../context/context";

interface RegionTourSliderItemProps {
    title: string;
    queryTitle: {
        ko: string;
        en: string;
        ja: string;
        chi: string;
    };
    imageUrl: string;
}

// 캐러셀에 들어가는 요소들
const RegionTourSliderItem = ({
    title,
    queryTitle,
    imageUrl,
}: RegionTourSliderItemProps) => {
    const { s, locale } = useContext(AppContext);

    return (
        <div className="item">
            <a
                onClick={() => {
                    location.href = `/${locale}/cities/search?title=${
                        queryTitle[locale! as "ko" | "en" | "ja" | "chi"]
                    }`;
                }}
            >
                <figure className="o80">
                    <img
                        src={imageUrl}
                        data-src="https://www.neweuropetours.eu/wp-content/uploads/2018/08/thio-sandemans-amsterdam-tours-240x260.jpg"
                        alt="Beautiful Cities"
                        width="240"
                        height="260"
                        className="lazy"
                    />
                </figure>
                <div className="caption">
                    <h3>{title}</h3>
                </div>
                <div className="tours-available">
                    <span>{s("LookAround")}</span>
                </div>
            </a>
        </div>
    );
};

export default React.memo(RegionTourSliderItem);
