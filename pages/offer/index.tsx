import {
    Flex,
    JDbutton,
    JDcard,
    JDcontainer,
    JDselect,
    WindowSize,
    InputText,
    JDlabel,
} from "@janda-com/front";
import { useContext } from "react";
import { Paths } from "../index[depre]";
import JDdayPicker from "../../atom/dayPicker/DayPicker";
import { BackStepBar } from "../../component/backstepBar/BackstepBar";
import { CardBtn } from "../../component/btns/ModalBtn";
import { RoundRadioBtnWrap } from "../../component/iconRadioBtn/IconRadioBtn";
import BookLayout from "../../component/layout/BookLayout";
import { CardHead } from "../../component/modalHead/ModalHead";
import { DetailPeopleSelecter } from "../../component/productDetailComponents/DetailPeopleSelecter";
import { TravlerFormModal } from "../../component/traveler/TravlerFormModal";
import { AppContext } from "../../context/context";
import { useOfferManage } from "../../hook/useOfferManage";
import { userFindById_UserFindById } from "../../types/api";

interface IGudeProfilePage {
    guideData: userFindById_UserFindById;
}

const Offer: React.FC<IGudeProfilePage> = () => {
    if (typeof window === "undefined") return null;
    const { s } = useContext(AppContext);
    const {
        categoryHook,
        contentHook,
        langHook,
        memoHook,
        price,
        customLanguage,
        categoryMiniHook,
        regionSelectHook,
        reigionDetail,
        setPrice,
        setTravelTime,
        travelTiem,
        setPeopleCnt,
        peopleCnt,
        wishDateHook,
        handleCreate,
        isSelfWriteLanguage,
    } = useOfferManage();

    const handleSetTravelTime = (time: "AM" | "PM") => () => {
        setTravelTime(time);
    };

    return (
        <BookLayout>
            <div className="Offer">
                <JDcontainer verticalPadding size={WindowSize.md}>
                    <BackStepBar
                        mb
                        mode="border"
                        label={s("seeMyCustomTour")}
                        go={Paths.myoffer}
                    />
                    <JDcard
                        head={
                            <CardHead
                                title={s("customTourCreateTitle")}
                                description={s("customTourCreateDesc")}
                            />
                        }
                        mode="border"
                        foot={
                            <Flex>
                                <CardBtn
                                    size="large"
                                    thema="primary"
                                    onClick={handleCreate}
                                >
                                    {s("submit")}
                                </CardBtn>
                            </Flex>
                        }
                    >
                        <div>
                            <Flex wrap between oneone>
                                <div>
                                    <JDlabel txt={s("selectTourRange")} />
                                    <JDdayPicker
                                        mb
                                        mr
                                        {...wishDateHook}
                                        label={s("dateStartAndEnd")}
                                    />
                                </div>
                                <div style={{ flex: 0, minWidth: 160 }}>
                                    <JDlabel txt={s("tourStartTimeSelect")} />
                                    <RoundRadioBtnWrap mb>
                                        <JDbutton
                                            mode="flat"
                                            thema={
                                                travelTiem === "AM"
                                                    ? "primary"
                                                    : undefined
                                            }
                                            onClick={handleSetTravelTime("AM")}
                                        >
                                            {s("am")}
                                        </JDbutton>
                                        <JDbutton
                                            mode="flat"
                                            thema={
                                                travelTiem === "PM"
                                                    ? "primary"
                                                    : undefined
                                            }
                                            onClick={handleSetTravelTime("PM")}
                                        >
                                            {s("pm")}
                                        </JDbutton>
                                    </RoundRadioBtnWrap>
                                </div>
                            </Flex>
                            <JDlabel txt={s("personSelect")} />
                            <DetailPeopleSelecter
                                setPeopleCnt={setPeopleCnt}
                                peopleCnt={peopleCnt}
                                withOutPrice
                            />
                            <JDselect
                                mb
                                {...langHook}
                                label={s("selectLang")}
                            />
                            {isSelfWriteLanguage && (
                                <InputText
                                    mb
                                    {...customLanguage}
                                    label={s("customLanguage")}
                                />
                            )}
                            <JDselect
                                mb
                                {...categoryMiniHook}
                                label={s("category")}
                            />
                            <InputText
                                mb
                                label={s("budget")}
                                comma
                                value={price}
                                onChange={setPrice as any}
                            />
                            <JDselect
                                mb
                                className="OfferRegionSelect"
                                menuOpen
                                isOpen
                                minMenuHeight={400}
                                maxMenuHeight={400}
                                {...regionSelectHook}
                                label={s("regionSelect")}
                            />
                            <InputText
                                mb
                                {...reigionDetail}
                                label={s("regionSelectDetail")}
                            />
                            <InputText
                                maxLength={200}
                                textarea
                                mb
                                {...contentHook}
                                label={s("wishTourContents")}
                            />
                            <InputText
                                maxLength={200}
                                textarea
                                {...memoHook}
                                label={s("customTourMessageLabel")}
                            />
                        </div>
                    </JDcard>
                </JDcontainer>
            </div>
        </BookLayout>
    );
};

export default Offer;

// 홈페이지 하단에->

// 고객센터 kgcenter727@gmail.com/051-715-0727
// 상담 가능 시간 오전9~오후6시(주말, 공휴일 제외)
// 코리아가이드센터(주) 대표 최성희 사업자등록번호
// 주소부산광역시 영도구 봉래나루로 33, 306-27
// -회사소개, 채용
// -가이드 등록
// -자주 묻는 질문

// 맞춤형 여행
// 0. 가이드 선택
// 1. 날짜 출발, 도착
// 2. 여행 테마 : 미식, 한옥, 템플스테이, 로컬축제, 비즈니스 통역, 프라이빗 투어,
// 기타(직접 작성)
// 3. 선호 출발 시간 :　오전 or 오후
// 4. 여행 인원 :　성인, 소아, 유아
// 5. 여행자 정보 : 이름, 생년월일, 여권번호 및 외국인등록번호, 국가, 성별
// 6. 예산 :

// 7. 여행지 :
// 8. 기타 (중시하는 점, 사전에 전해두고 싶은 일 등 예) 카시트, 에어컨, 대형 차량, 대중 교통 불가)
