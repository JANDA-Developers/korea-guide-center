import React from "react";

interface IMainBanneritemProps {
    url: string;
}

const MainBannerItem = ({ url }: IMainBanneritemProps) => {
    return (
        <div className="item">
            <figure className="fit-cover">
                <picture>
                    <source
                        srcSet={url}
                        media="(max-width: 1024px) and (min-width: 801px)"
                    />
                    <source
                        srcSet={url}
                        media="(max-width: 800px) and (min-width: 421px)"
                    />
                    <source srcSet={url} media="(max-width: 420px)" />
                    <img src={url} alt="guide back" width="1600" height="900" />
                </picture>
            </figure>
        </div>
    );
};

export default React.memo(MainBannerItem);
