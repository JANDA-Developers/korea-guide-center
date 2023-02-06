import React, { useEffect, useState } from "react";

interface IYoutubeData {
    ok: true;
    result: {
        avatar: string;
        id: string;
        subscriberCount: number;
        title: string;
        videos: {
            id: string;
            channelId: string;
            title: string;
            thumbnail: string;
            views: number;
            createdAt: Date;
        }[];
    };
}

const SocialYouTube = () => {
    const [data, setData] = useState<IYoutubeData>();

    useEffect(() => {
        const getData = async () => {
            await fetch("/api/getYoutube")
                .then(async (response) => {
                    const result = await response.json();
                    setData(result);
                })
                .catch((error) => console.log("error:", error));
        };
        getData();
    }, []);

    return (
        <div className="col-66 facebook">
            <span className="title">
                <div className="youtubeChannel">
                    <img src={data?.result.avatar} width="60px" height="60px" />
                    <div>
                        <div className="youtubeChannelName">
                            {data?.result.title}
                        </div>
                        <span className="youtubeSubscribe">
                            {data?.result.subscriberCount}명
                        </span>
                    </div>
                </div>
            </span>
            <div className="youtubeContents">
                {data?.result.videos.map((item) => {
                    return (
                        <div className="youtubeContentsCard" key={item.id}>
                            <a
                                target="_blank"
                                href={`https://www.youtube.com/watch?v=${item.id}`}
                                rel="noopener noreferrer"
                            >
                                <figure className="mainFitCover">
                                    <img
                                        src={item.thumbnail}
                                        alt=""
                                        className="mainFitCoverYoutube"
                                    />
                                </figure>
                            </a>
                            <div className="youtubeTitle">
                                <span>{item.title}</span>
                                <div className="youtubeStatistics">
                                    <span>{item.views}회</span>
                                    <span> ∙ {item.createdAt}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default React.memo(SocialYouTube);
