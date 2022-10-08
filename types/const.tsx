import dayjs from "dayjs";
import {
    AutoSendTargetType,
    DisplayType,
    Ffile,
    Flangs,
    KakaoTemplateInspStatus,
    LANGUAGES,
    NotificationMethod,
    OfferStatus,
    Paymethod,
    UserRole,
    _TourSort,
} from "./api";
import { IselectedOption } from "@janda-com/front/dist/types/interface";
import { JDColor, Language, selectOpCreater } from "@janda-com/front";
import { mapRegion } from "../component/koreaMap/KoreaData";
import { IPageInfo } from "./interface";
import { staticInfo } from "../static.json";
import { SERVER_URI } from "../apollo/uri";

export const DEFAULT_LOGO = "/its/img/logo_1.png";

export const DEFAULTS = {
    logo: "src/img/logo_1.png",
    productImg: "src/img/sample_01.gif",
};

export const BG = (url: string) => ({ backgroundImage: `url(${url})` });

export const DEFAULT_PAGE: IPageInfo = {
    __typename: "OffsetPagingInfo",
    currentItemCount: 0,
    pageIndex: 0,
    pageItemCount: 0,
    totalDocumentCount: 0,
    totalPageCount: 0,
};

export const EMPTY_EDITOR = { blocks: [] };

export const SAMPLE_FILE = {
    description: "",
    extension: "",
    fileType: "",
    name: "doob.jpg",
    owner: "admin@naver.com",
    uri: "https://pink-loader-storage.s3.ap-northeast-2.amazonaws.com/doob.jpg",
};

export const DEFAULT_PROFILE_IMG = "/img/profile_default160.gif";
export const DEFAULT_BG_IMG = "/img/main_bg_03.jpg";

export const DEFAULT_PAGEINFO = {
    pageInfo: {},
    defaultPageInfo: {},
    pageKey: "",
};

export const CONDITION = {
    travelCacnel: "여행취소는 예약자가 없을때만 가능합니다",
    travelDetermineChange: "출발 확정 임의변경은 최소 7일전에 해주셔야합니다",
};
export const SYSTEM_CHECK_MESSAGE = {
    travelCancel: `
    정말로 상품을 취소 하시겠습니까?
    `,
    productDelete: `
        정말로 상품을 삭제 하시겠습니까?
    `,
};

export enum Locales {
    "ot" = "ot",
    "en" = "en",
    "ja" = "ja",
    "ko" = "ko",
    "chi" = "chi",
}

export const ITS_GUIDE_LOGO = "/img/koreaguideCenterLogo.png";
export const ITS_GUIDE_LOGO_LONG = "/img/koreaguideCenterLogoLong.png";
export const ITS_GUIDE_LOGO_LONG_KR = "/img/koreaguideCenterKrLogoLong.png";
export const ITS_GUIDE_LOGO_KR = "/img/koreaguideCenterKrLogo.png";

export const DEFAULT_LANGS: Flangs = {
    __typename: "Langs",
    chi: "",
    en: "",
    ja: "",
    ko: "",
    ot: "",
};

export const NO_IMG =
    "https://s3.ap-northeast-2.amazonaws.com/booking.stayjanda.files/infographic/noimg.png";

export const LOADING_SVG =
    "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/03ac7912-1eb4-494d-88d0-c3b831c98607/Infinity-1.6s-200px.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210430T050156Z&X-Amz-Expires=86400&X-Amz-Signature=a937227e274041595e7cade19362db049430a76d5aee85898927ba68eec01c06&X-Amz-SignedHeaders=host";
export const LOADING_CIRCLE =
    "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e9c8292d-d3f4-49bd-b05c-fe11e753a119/Double_Ring-3.4s-227px_%281%29.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210430T050156Z&X-Amz-Expires=86400&X-Amz-Signature=c0c3cfbdaf3cc514d0897261129a2d9453c0b115f59e262f45cc977884d5480c&X-Amz-SignedHeaders=host";

export let MINUTES_SELECT_OP: IselectedOption<number>[] = Array(60)
    .fill(null)
    .map((_, i) => ({
        label: `${i}분`,
        value: i,
    }));

export const START_TIME_TYPE_OPS: IselectedOption<string>[] = [
    {
        label: "기입안함",
        value: "NONE",
    },
    {
        label: "오전",
        value: "AM",
    },
    {
        label: "오후",
        value: "PM",
    },
];

export const tomorrowDate = dayjs().add(1, "day").startOf("day").toDate();
export const todayDate = dayjs().startOf("day").toDate();
export const today = dayjs().startOf("day").valueOf();
export const tomorrow = dayjs().add(1, "day").startOf("day").valueOf();
export const lastMonthFirstDate = dayjs()
    .add(-1, "month")
    .set("day", 1)
    .toDate();
export const lastMonthLastDate = dayjs()
    .add(-1, "month")
    .endOf("month")
    .toDate();
export const thisMonthLastDate = dayjs().endOf("month").toDate();
export const thisMonthFirstDate = dayjs().startOf("month").toDate();
export const oneYearBefore = dayjs().add(-1, "y").toDate();
export const sixMonthBefore = dayjs().add(-6, "month").toDate();
export const todayyyyymmNumber = parseInt(dayjs().format("YYYYMM"));
export const afterOneMonth = dayjs().add(1, "month").valueOf();

export const DATE = {
    today: dayjs().startOf("day").toDate(),
    tomorrow: dayjs().add(1, "day").startOf("day").toDate(),
    lastMonthFirstDate,
    lastMonthLastDate,
    thisMonthFirstDate,
    oneYearBefore,
    sixMonthBefore,
};

export const TIME_VALUE = {
    today,
    tomorrow,
    afterOneMonth,
};

export enum Ratio {
    "16:9" = 1.77777,
    "3:4" = 0.75,
    "5:4" = 1.25,
    "1:1" = 1,
}

export const DEFAULT_SENDER = "18334157";
export const DEFAULT_EMAIL_SENDER = "no-reply@stayjanda.com";
// 통신가입 증명원 링크
export const ONLINE_TELL_INFO_LINK = "https://help.stayjanda.cloud/undefined-4";

export const DefaultSenderOP: IselectedOption = {
    label: "기본발신자[Sms]",
    value: DEFAULT_SENDER,
};

export const DefaultEmailSenderOP: IselectedOption = {
    label: "기본발신자[Email]",
    value: DEFAULT_EMAIL_SENDER,
};
export const DefaultKakaoSenderOP: IselectedOption = {
    label: "기본발신자[Kakao]",
    value: DEFAULT_SENDER,
};

export const TRIGGER_TARGET_OP: IselectedOption<AutoSendTargetType>[] = [
    {
        label: "주문인",
        value: AutoSendTargetType.BOOKER,
    },
    {
        label: "커스텀 수신자",
        value: AutoSendTargetType.CUSTOM,
    },
    {
        label: "마스터에게",
        value: AutoSendTargetType.MASTER,
    },
    {
        label: "가이드에게",
        value: AutoSendTargetType.GUIDE,
    },
];

export const NOTI_METHOD_OPS: IselectedOption<NotificationMethod>[] = [
    {
        label: "문자",
        value: NotificationMethod.SMS,
    },
    {
        label: "이메일",
        value: NotificationMethod.EMAIL,
    },
    {
        label: "카카오",
        value: NotificationMethod.KAKAO,
    },
];

export const notificationMethodKr: Record<NotificationMethod, string> = {
    EMAIL: "이메일",
    KAKAO: "카카오",
    SMS: "문자",
};

export const KAKAOTemplateInspStatusKr: Record<
    KakaoTemplateInspStatus,
    string
> = {
    APR: "승인완료",
    REG: "심사가능",
    REJ: "요청반려",
    REQ: "심사중",
};

export const OfferStatusKr: Record<OfferStatus, string> = {
    ACCEPTED: "완료",
    CANCACLED: "취소됨",
    OPEN: "진행중",
};

export const KAKAOTemplateInspStatusColor: Record<
    KakaoTemplateInspStatus,
    JDColor
> = {
    APR: "primary",
    REG: "grey2",
    REJ: "error",
    REQ: "new",
};

export const STATIC_PRICES = {
    SMS: 22,
    MMS: 40,
    LMS: 80,
    EMAIL: 8,
    KAKKAO: 17,
};

export const COUNT = selectOpCreater({
    count: 1000,
    start: 0,
    labelAdd: "개",
});

export const NotificationDefaultSenderOp: Record<
    NotificationMethod,
    IselectedOption
> = {
    EMAIL: DefaultEmailSenderOP,
    KAKAO: DefaultKakaoSenderOP,
    SMS: DefaultSenderOP,
};

export const payMethodKr: Record<Paymethod, string> = {
    BANK_TRANSFER: "계좌이체",
    CARD: "카드결제",
    CASH: "현금결제",
    NON_PAY: "결제없음",
    PAY_PAL: "페이팔",
    KAKAO: "카카오페이",
    NAVER: "네이버페이",
};

export const payMethodLang: Record<Paymethod, string> = {
    BANK_TRANSFER: "계좌이체",
    CARD: "카드결제",
    CASH: "현금결제",
    NON_PAY: "결제없음",
    PAY_PAL: "페이팔",
    KAKAO: "카카오페이",
    NAVER: "네이버페이",
};

export const PAY_METHOD_OPS: IselectedOption<Paymethod>[] = [
    {
        label: "계좌이체",
        value: Paymethod.BANK_TRANSFER,
    },
    {
        label: "카드결제",
        value: Paymethod.CARD,
    },
    {
        label: "페이팔",
        value: Paymethod.PAY_PAL,
    },
];

export const PAY_METHOD_LANGS_OPS = (s: any) => [
    {
        label: s("paypal"),
        value: Paymethod.PAY_PAL,
        icon: "/img/payments/paypal.png",
    },
    {
        label: s("cardPay"),
        value: Paymethod.CARD,
        icon: "/img/payments/credit-card.png",
    },
    {
        label: s("bankPay"),
        value: Paymethod.BANK_TRANSFER,
        icon: "/img/payments/bankbook.png",
    },
];

export const DAY_OPS = selectOpCreater({ count: 31, start: 1, labelAdd: "" });
export const MONTH_OPS = selectOpCreater({
    count: 12,
    start: 1,
    labelAdd: "",
});
export const YEARS_OPS = selectOpCreater({
    count: 130,
    start: 1900,
    labelAdd: "",
});

export const AMPM = (ampm?: string) => {
    if (ampm === "AM") return "AM";
    return "PM";
};

export const UserRoleKr: Record<UserRole, string> = {
    ADMIN: "관리자",
    BUYER: "구매자",
    GUIDE: "가이드",
};

export const MapRegionKr: Record<mapRegion, string> = {
    // dmz: "DMZ",
    Daejeon: "대전",
    Gangwon: "강원",
    Gwangju: "광주",
    Gyeonggi: "경기",
    Incheon: "인천",
    Jeju: "제주",
    NorthChungcheong: "충청북도",
    NorthGyeongsang: "경상북도",
    NorthJeolla: "전라북도",
    Sejong: "세종",
    SouthChungcheong: "충청남도",
    SouthGyeongsang: "경상남도",
    SouthJeolla: "전라남도",
    Ulsan: "울산",
    busan: "부산",
    daegu: "대구",
    seoul: "서울",
    CustomTour: "Custom Tour",
    MICE: "MICE",
    DrivingTour: "Driving Tour",
    WellnessMedical: "Medical Tour",
    LocalFestival: "Local Festival",
    InterpreterGuide: "InterpreterGuide",
    BarrierFree: "Barrier Free",
    VIPexhibition: "VIP exhibition",
    RealEstate: "Real Estate",
    StudyAbroad: "Study Abroad",
    LongStay: "Long Stay",
    CookTour: "Cook Tour",
    dmz: "dmz",
};

export const Refund: Flangs = {
    __typename: "Langs",
    ko: `
    - 이용 3일전 오후 6시이전 : 전액환불
    - 이용 3일전 오후 6시이후~이용 2일전 오후 6시이전 : 50% 환불
    - 이용 2일전 오후 6시이후~이용 당일 : 환불 불가
    - 취소수수료 규정은 업체 영업일을 기준으로 적용됩니다.
    
    (영업일 : 월~금(주말 및 공휴일 휴무)/9:00~18:00)
    
    (업체 휴무일에 취소요청 시 그 다음 근무일을 기준으로 취소수수료 적용)
    
    - 천재지변으로 인한 주의경보(야외투어만 해당) : 환불불가 / 날짜변경가능
    - 천재지변으로 인한 위험경보(야외투어만 해당) : 환불 및 날짜변경가능
   `,
    ot: `
    - 3 days before the tour, before 6pm: Full refund
    - 3 days before the tour, after 6 pm ~ 2 days before 6 pm: 50% refund
    - 2 days before the tour, after 6 pm - on the day of use: non-refundable
    - Cancellation fee rules are applied based on the business day of the company.
    
    (Business days: Monday-Friday (closed on weekends and holidays)/9:00-18:00)
    
    (If cancellation is requested on a company holiday, cancellation fee will be applied based on the next working day)
    
    - Caution warning due to natural disaster (outdoor tour only): non-refundable / date changeable
    - Danger warning due to natural disaster (outdoor tour only): Refund and tour date change is possible
  `,
    chi: `
    利用3天前 下午6点以前 ： 全额退钱

    利用3天前 下午6点以后~利用2天前 下午6点以前 ：50%退钱
    
    利用2天前 下午6点以后~利用当天 ： 不可以退钱
    
    - 取消的手续费规律是以旅行社的营业日为基准的
    
    （营业日： 周一到周五 9:00~18:00 / 周末以及公休日是休假）
    
    （旅行社休假的时候申请取消的话，下一个工作日的取消手续费适用）
    
    - 由自然灾害而产生的注意警报 （野外旅行）： 不可以退钱 、只能改变日子
    - 由自然灾害而产生的危险警报（野外旅行）：可以退钱或者改变日子
   `,
    en: `
    - 3 days before the tour, before 6pm: Full refund
    - 3 days before the tour, after 6 pm ~ 2 days before 6 pm: 50% refund0
    - 2 days before the tour, after 6 pm - on the day of use: non-refundable00
    - Cancellation fee rules are applied based on the business day of the company.
    
    (Business days: Monday-Friday (closed on weekends and holidays)/9:00-18:00)
    
    (If cancellation is requested on a company holiday, cancellation fee will be applied based on the next working day)
    
    - Caution warning due to natural disaster (outdoor tour only): non-refundable / date changeable
    - Danger warning due to natural disaster (outdoor tour only): Refund and tour date change is possible
  `,
    ja: `
    - 利用3日前の午後6時以前:全額払い戻し
    - 利用3日前の午後6時以降~利用2日前の午後6時以前:50%の払い戻し
    - 利用2日前の午後6時以降~利用当日:払い戻し不可
    - キャンセル手数料規定は営業日を基準に適用されます。
    
    (営業日:月~金(週末及び祝日は休み)9:00~18:00)
    
    (業者の定休日にキャンセルをリクエストする場合、その次の勤務日を基準にキャンセル手数料が適用)
    
    - 天災地変による注意警報(屋外ツアーのみ):払い戻し不可日付変更は可能
    - 天災地変による危険警報(屋外ツアーのみ):払い戻し及び日付変更は可能
 `,
};

export const UserTypeKr: Record<UserRole, string> = {
    ADMIN: "관리자",
    BUYER: "구매자",
    GUIDE: "가이드",
};

export const LangToLang: Record<LANGUAGES, string> = {
    chi: "中文",
    en: "ENGLISH",
    ja: "日本語",
    ko: "한국어",
    ot: "OTHER",
};

export const INPUT_OPS: IselectedOption<DisplayType>[] = [
    {
        label: "텍스트",
        value: DisplayType.TEXT_INPUT,
    },
    {
        label: "선택박스",
        value: DisplayType.DROPDOWN,
    },
    {
        label: "다중택일",
        value: DisplayType.RADIO_BOX,
    },
    {
        label: "체크박스",
        value: DisplayType.CHECK_BOX,
    },
    {
        label: "숫자",
        value: DisplayType.NUMBER_SELECTOR,
    },
    // {
    //     label: "날짜범위선택",
    //     value: DisplayType.DATE_RANGE_PICKER,
    // },
    {
        label: "파일",
        value: DisplayType.FILE,
    },
    {
        label: "시간",
        value: DisplayType.TIME_PICKER,
    },
    {
        label: "날짜",
        value: DisplayType.DATE_PICKER,
    },
];

export enum TagKey {
    FORM_FILE = "FORM_FILE",
}

export const DEFAULT_FILE: Ffile = {
    __typename: "File",
    _id: "",
    tags: [],
    createdAt: new Date(),
    description: "",
    extension: "",
    fileType: "",
    name: "",
    updatedAt: new Date(),
    uri: "",
    mineType: "reup",
};

export enum boardKeys {
    "guideAlert" = "guideAlert",
    "alert" = "alert",
    "frequentQuestion" = "frequentQuestion",
    "question" = "question",
    "travelInfo" = "travelInfo",
}

export const emailVerificationLink = (email: string) => {
    return "http://koreaguide.center/verification" + "?email=" + email;
};

export const TourSortKr: Record<_TourSort, string> = {
    _id__asc: "",
    _id__desc: "",
    createdAt__asc: "오래된순",
    createdAt__desc: "최신일순",
    updatedAt__desc: "수정일순",
    updatedAt__asc: "",
    endDate__asc: "",
    endDate__desc: "",
    startDate__asc: "투어일순",
    startDate__desc: "",
};

export const SHOPPING_LINK =
    "https://jungle.booking.stayjanda.cloud/?storeCode=STORE-YEPYX0&layout=SOLO#/buypage";
