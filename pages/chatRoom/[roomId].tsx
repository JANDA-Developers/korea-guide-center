import { Flex, JDcard, JDcontainer, WindowSize } from "@janda-com/front";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Img } from "../../atom/Image";
import { Chat, ChatForm } from "../../component/chat/Chat";
import { getRelativeChatRoom } from "../../component/chatRoom/ChatRoomViewCard";
import { GuideCircle } from "../../component/guideCircle/GuideCircle";
import BookLayout from "../../component/layout/BookLayout";
import { CardHead } from "../../component/modalHead/ModalHead";
import { UserProfileCardApi } from "../../component/userProfileCard/UserProfileCard";
import { AppContext } from "../../context/context";
import { useChatCreate, useChatRoomFindById } from "../../hook/useChatRoom";
import { ChatInput, userFindById_UserFindById } from "../../types/api";
import { DEFAULT_BG_IMG, DEFAULT_PROFILE_IMG } from "../../types/const";
import { checkMobile } from "../../utils/isMobile";
import { omitsAuto } from "../../utils/omit";

interface IGudeProfilePage {
    guideData: userFindById_UserFindById;
}

const ChatRoom: React.FC<IGudeProfilePage> = () => {
    if (typeof window === "undefined") return null;
    const { loginAnd, me, isMaster, s } = useContext(AppContext);
    const router = useRouter();
    const roomId = router.query.roomId as string;
    const { item } = useChatRoomFindById(roomId, { pollInterval: 1000 });
    const [chatSend] = useChatCreate({
        onCompleted: () => {},
    });
    const { canSendChat } = getRelativeChatRoom(item);
    if (!me) return null;
    if (!item) return null;
    const {
        chats,
        chatRoomBg,
        targetId,
        openerId,
        targetNicekName,
        targetName,
        targetProfileImage,
    } = item;
    const nickNameOrName = targetNicekName || targetName;
    const { opnerIsMe, targetIsMe, opponentId } = getRelativeChatRoom(item);

    const handleSubmit = (input: ChatInput) => {
        chatSend({
            variables: {
                chatRoomId: roomId,
                input: omitsAuto(input),
            },
        });
    };

    return (
        <BookLayout>
            <div className="ChatRoom">
                <div className="ChatRoom__bg">
                    <Img
                        layout="fill"
                        src={chatRoomBg?.uri || DEFAULT_BG_IMG}
                    />
                </div>
                <JDcontainer verticalPadding size={WindowSize.md}>
                    <Flex oneone>
                        <div>
                            <JDcard
                                className="ChatRoom__room"
                                style={{
                                    overflowWrap: "anywhere",
                                }}
                                head={
                                    <CardHead
                                        description={s("doNotSendPersonalInfo")}
                                        title={
                                            <Flex vCenter>
                                                <GuideCircle
                                                    hide={!checkMobile()}
                                                    mr
                                                    guideProfile={
                                                        targetProfileImage?.uri
                                                    }
                                                />{" "}
                                                {s("guide")} {nickNameOrName}
                                            </Flex>
                                        }
                                    />
                                }
                                mode="border"
                                mr
                            >
                                <div>
                                    {chats.map((chat) => {
                                        const { userId, profileImg } = chat;
                                        const isMyChat = me._id === userId;
                                        return (
                                            <Chat
                                                mb
                                                key={chat._id}
                                                dir={
                                                    isMyChat ? "right" : "left"
                                                }
                                                chat={chat}
                                                profileImg={
                                                    profileImg || undefined
                                                }
                                            />
                                        );
                                    })}
                                </div>
                            </JDcard>
                            {canSendChat && (
                                <ChatForm onSubmit={handleSubmit} />
                            )}
                        </div>
                        <UserProfileCardApi
                            className="ChatRoom__profileCard"
                            userId={opponentId}
                        />
                    </Flex>
                </JDcontainer>
            </div>
        </BookLayout>
    );
};

export default ChatRoom;

// 홈페이지 하단에->

// 고객센터 kgcenter727@gmail.com/051-715-0727
// 상담 가능 시간 오전9~오후6시(주말, 공휴일 제외)
// 코리아가이드센터(주) 대표 최성희 사업자등록번호
// 주소부산광역시 영도구 봉래나루로 33, 306-27
// -회사소개, 채용
// -가이드 등록
// -자주 묻는 질문

// 맞춤형 여행
// 1. 날짜 출발, 도착
// 2. 여행 테마 : 미식, 한옥, 템플스테이, 로컬축제, 비즈니스 통역, 프라이빗 투어, 기타(직접 작성)
// 3. 선호 출발 시간 :　오전 or 오후
// 4. 여행 인원 :　성인, 소아, 유아
// 5. 여행자 정보 : 이름, 생년월일, 여권번호 및 외국인등록번호, 국가, 성별
// 6. 예산 :
// 7. 여행지 :
// 8. 기타 (중시하는 점, 사전에 전해두고 싶은 일 등 예) 카시트, 에어컨, 대형 차량, 대중 교통 불가)
