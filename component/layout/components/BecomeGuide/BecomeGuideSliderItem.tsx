import React from "react";

interface BecomeGuideSliderItemProps {
    url: string;
}

const BecomeGuideSliderItem = ({ url }: BecomeGuideSliderItemProps) => {
    return (
        <div className="item">
            <figure>
                <picture>
                    <source
                        data-srcset={url}
                        media="(max-width: 800px) and (min-width: 421px)"
                    />
                    <source data-srcset={url} media="(max-width: 420px)" />
                    <img
                        src={url}
                        data-src={url}
                        alt=""
                        width="1000"
                        height="800"
                        className="lazy"
                    />
                </picture>
            </figure>
        </div>
    );
};

export default React.memo(BecomeGuideSliderItem);
