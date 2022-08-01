import { JDcontainer, WindowSize } from "@janda-com/front";
import React from "react";
import { GuideMovieCardsWithApi } from "../component/guideMovieClicp/GuideMovieClipList";
import BookLayout from "../component/layout/BookLayout";

interface IProp {}

export const Guides: React.FC<IProp> = () => {
    return (
        <BookLayout>
            <JDcontainer verticalPadding size={WindowSize.lg}>
                <GuideMovieCardsWithApi
                    videoRelease
                    queryParam={{
                        initialViewCount: 120,
                    }}
                    align={"wrap"}
                />
            </JDcontainer>
        </BookLayout>
    );
};

export default Guides;
