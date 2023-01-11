import React from "react";

const MainBannerItem = () => {
    return (
        <div className="item">
            <figure className="fit-cover">
                <picture>
                    <source
                        srcSet="
      https://www.neweuropetours.eu/wp-content/uploads/2018/10/16179456-1426640674034605-244167778428639608-o-1024x680.jpg
    "
                        media="(max-width: 1024px) and (min-width: 801px)"
                    />
                    <source
                        srcSet="
      https://www.neweuropetours.eu/wp-content/uploads/2018/10/16179456-1426640674034605-244167778428639608-o-800x600.jpg
    "
                        media="(max-width: 800px) and (min-width: 421px)"
                    />
                    <source
                        srcSet="
      https://www.neweuropetours.eu/wp-content/uploads/2018/10/16179456-1426640674034605-244167778428639608-o-420x420.jpg
    "
                        media="(max-width: 420px)"
                    />
                    <img
                        src="https://static.neweuropetours.eu/wp-content/uploads/2018/10/16179456-1426640674034605-244167778428639608-o-1600x900.jpg"
                        alt="guide back"
                        width="1600"
                        height="900"
                    />
                </picture>
            </figure>
        </div>
    );
};

export default React.memo(MainBannerItem);
