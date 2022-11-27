import React from "react";
import { BookLayout } from "../component/layout/BookLayout";
import { useGlobalKoreaMap } from "../hook/useKoreaMap";
import RegionTopImage from "../component/RegionTopImage/RegionTopImage";
import RegionGuides from "../component/RegionGuides/RegionGuides";
import Head from "next/head";

interface IProp {}

export const LocationalGuide: React.FC<IProp> = () => {
    const globalKoreaHook = useGlobalKoreaMap();
    const { selectedGlobalRegion } = globalKoreaHook;

    return (
        <BookLayout>
            <Head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                gtag('event', 'conversion', {'send_to': '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}/3jQzCM_B7IIYEPH7irMo'});`,
                    }}
                ></script>
            </Head>
            <div className="locationalGuide">
                <div className="locationalGuide__regionArea">
                    <RegionTopImage region={selectedGlobalRegion} />
                </div>
                <RegionGuides
                    key={selectedGlobalRegion + "HyperProductViewCardS"}
                    hyper={selectedGlobalRegion}
                />
            </div>
        </BookLayout>
    );
};

export default LocationalGuide;
