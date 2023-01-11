import React from "react";

const SocialYouTube = () => {
    return (
        <div className="col-50 facebook">
            <span className="title">
                <span className="icon-ico-facebook"></span> YOUTUBE
                <a
                    href="https://www.facebook.com/sandemansneweurope/"
                    target="_blank"
                    rel="nofollow noreferrer"
                >
                    Korea Guide
                </a>
            </span>
            <div
                className="fb-like"
                data-href="https://www.facebook.com/sandemansneweurope/"
                data-layout="button"
                data-action="like"
                data-size="small"
                data-show-faces="true"
                data-share="false"
            ></div>
            <a
                data-gacat="BLOC : Social (home)"
                data-galabel="Facebook"
                target="_blank"
                href="https://www.facebook.com/sandemansneweurope/photos/a.272494466115904/1819337668098235/?type=3&theater"
                rel="noopener noreferrer"
            >
                <figure className="fit-cover">
                    <img
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                        data-src="https://www.neweuropetours.eu/wp-content/uploads/external/c52ecfbe89248df13a2b8af9ca2d4d79-27912574_1819337668098235_8335879579480966543_o.jpg_nc_cat110_nc_htscontent-lht6-1.-680x680.xxoh0464c565c4b9d3804f376d5bb120a3daoe5cc05a38"
                        alt=""
                        width="680"
                        height="680"
                        className="lazy"
                    />
                </figure>
            </a>
        </div>
    );
};

export default React.memo(SocialYouTube);
