import { JDcard, JDcontainer, WindowSize } from "@janda-com/front";
import React from "react";
import { Img } from "../../atom/Image";
import { Red } from "../../atom/shortCut/Short";
import { CardHead } from "../../component/modalHead/ModalHead";
import PhotoFrame from "../../component/photoFrame/PhotoFram";

interface IProp {}

export const JoinReady: React.FC<IProp> = () => {
    return (
        <JDcontainer size={WindowSize.md} verticalPadding>
            <JDcard
                head={
                    <CardHead
                        title="가이드 승인을 대기중입니다"
                        description={
                            <p>
                                가이드는 가입승인 후에 서비스를 이용할 수
                                있습니다.
                                <br />
                                <Red weight={600}>
                                    잠시만 기다려주세요! 승인후 문자로
                                    보내드립니다.
                                </Red>
                            </p>
                        }
                    />
                }
            >
                <PhotoFrame src="/img/join_img01.png" />
            </JDcard>
        </JDcontainer>
    );
};
