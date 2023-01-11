import React from "react";

// 임시임. 현재 코리아가이드에는 OurTours 없음

const FooterOurTours = () => {
    return (
        <div className="col-25">
            <span className="footer-title">Our Tours</span>
            <ul>
                <li>
                    <a href="https://www.neweuropetours.eu/free-tours/">
                        Free Tours
                    </a>
                </li>
                <li>
                    <a href="https://www.neweuropetours.eu/pub-crawls/">
                        Pub Crawls
                    </a>
                </li>
                <li>
                    <a href="https://www.neweuropetours.eu/sandemans-private-tours/">
                        Private Tours
                    </a>
                </li>
                <li>
                    <a href="https://www.neweuropetours.eu/day-trips-and-excursions/">
                        Day Trips &amp; Excursions
                    </a>
                </li>
                <li>
                    <a href="https://www.neweuropetours.eu/castle-tours/">
                        Castle Tours
                    </a>
                </li>
                <li>
                    <a href="https://www.neweuropetours.eu/food-and-drink-tours/">
                        Food &amp; Drink Tours
                    </a>
                </li>
                <li>
                    <a href="https://www.neweuropetours.eu/bike-tours/">
                        Bike Tours
                    </a>
                </li>
                <li>
                    <a href="https://www.neweuropetours.eu/street-art-and-underground-tours/">
                        Street Art &amp; Underground Tours
                    </a>
                </li>
                <li>
                    <a href="https://www.neweuropetours.eu/ghost-dark-history-evening-tours/">
                        Ghost &amp; Dark History Evening Tours
                    </a>
                </li>
                <li>
                    <a href="https://www.neweuropetours.eu/concentration-camp-memorial-excursions/">
                        Concentration Camp Memorial Excursions
                    </a>
                </li>
                <li>
                    <a href="https://www.neweuropetours.eu/st-patricks-day-pub-crawls/">
                        St. Patrick&#8217;s Day Pub Crawls
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default React.memo(FooterOurTours);
