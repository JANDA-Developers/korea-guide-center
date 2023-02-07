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
    const detailDate = (a: Date) => {
        const milliSeconds = +new Date() - +a;
        const seconds = milliSeconds / 1000;
        if (seconds < 60) return `방금 전`;
        const minutes = seconds / 60;
        if (minutes < 60) return `${Math.floor(minutes)}분 전`;
        const hours = minutes / 60;
        if (hours < 24) return `${Math.floor(hours)}시간 전`;
        const days = hours / 24;
        if (days < 7) return `${Math.floor(days)}일 전`;
        const weeks = days / 7;
        if (weeks < 5) return `${Math.floor(weeks)}주 전`;
        const months = days / 30;
        if (months < 12) return `${Math.floor(months)}개월 전`;
        const years = days / 365;
        return `${Math.floor(years)}년 전`;
    };

    const detailViewerAndSubscriber = (a: any) => {
        if (a < 1000) return [a, ""]; // 0 ~ 999회  "회/명" 
        else if (a < 10000) return [Math.floor((+a / 1000) * 10) / 10, "천"]; // 1000 ~ 9999 회 ""
        else if (a < 10000000) return [Math.floor((+a / 10000) * 10) / 10, "만"]; // 10000 ~ 9999999 회
        else if (a < 100000000) return [Math.floor((+a / 10000000) * 10) / 10, "천만"] // 10000000 ~ 99999999 회
        else return [Math.floor((+a / 100000000) * 10) / 10, "억"]// 1억 ~                                                           
    }



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
                            구독자 {detailViewerAndSubscriber(data?.result.subscriberCount)[0]}{detailViewerAndSubscriber(data?.result.subscriberCount)[1]}명
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
                                    <span>{detailViewerAndSubscriber(item.views)[0]}{detailViewerAndSubscriber(item.views)[1]}회</span>
                                    <span> ∙ {detailDate(new Date(item.createdAt))}</span>
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
