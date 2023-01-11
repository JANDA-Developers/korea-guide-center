import React from "react";

const MainBannerSearchBox = () => {
    return (
        <div className="content-wrapper caption aligncenter input-cursor">
            <form action="index.php" method="get">
                <label
                    htmlFor="algoliaSearch"
                    aria-hidden="true"
                    className="hide"
                >
                    Search cities, tours...
                </label>
                <input
                    type="text"
                    name="algoliaSearch"
                    id="algoliaSearch"
                    placeholder="Search cities, tours..."
                />
                <span className="icon-ico-search"></span>
            </form>
        </div>
    );
};

export default React.memo(MainBannerSearchBox);
