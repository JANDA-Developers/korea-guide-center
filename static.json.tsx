import { Flangs } from "./types/api";
import { QuestionTypes } from "./types/board";

type TLang = {
    ko: string;
    en: string;
    ja: string;
    chi: string;
};

export const QuestionTypesLang: Record<QuestionTypes, TLang> = {
    ELSE: {
        chi: "else",
        en: "else",
        ja: "else",
        ko: "기타",
    },
    PAY: {
        chi: "pay",
        en: "pay",
        ja: "pay",
        ko: "결제",
    },
    TOUR: {
        chi: "tour",
        en: "tour",
        ja: "tour",
        ko: "투어",
    },
};

const utils_message = {
    ...QuestionTypesLang,
    gotoTopMenu: {
        ko: "상단메뉴 바로가기",
        en: `Shortcuts Top Menu`,
        ja: `TopMenuを開く`,
        chi: `直接去上端菜单`,
    },
    gotoMainPage: {
        ko: "본문 바로가기",
        en: `Shortcut to main page`,
        ja: `メインページを開く`,
        chi: `直接去主页`,
    },
    guidejoin: {
        ko: "가이드 지원하기",
        en: `Join Guide`,
        ja: `ガイドとして登録する`,
        chi: `注册导游`,
    },
    nim: {
        ko: "님",
        en: ``,
        ja: `樣`,
        chi: `先生`,
    },
    wellcometxt: {
        ko: "환영합니다.",
        en: `Welcome`,
        ja: `歓迎致します`,
        chi: `欢迎光临`,
    },
    itsguide: {
        ko: "코리아 가이드",
        en: `Korea guide`,
        ja: `Korea guide`,
        chi: `Korea guide`,
    },
    joyful: {
        ko: "즐거운 한국여행",
        en: `Joyful Korea Trip`,
        ja: `Joyful Korea Trip`,
        chi: `Joyful Korea Trip`,
    },
    profilePageSliderNoti: {
        ko: "👇 슬라이드하여 상품을 더 볼 수 있습니다.",
        en: "👇 You can slide and see more of the product.",
        ja: "👇 スライドして商品をもっと見ることができます。",
        chi: "👇 你可以通过幻灯片再看一些商品。",
    },
    city: {
        ko: "도시",
        en: "City",
        ja: "都市",
        chi: "城市",
    },
    selectCity: {
        ko: "도시 선택",
        en: `Select a City`,
        ja: `Select a City`,
        chi: `Select a City`,
    },
    itstour: {
        ko: "코리아투어",
        en: `koreaTour`,
        ja: `koreaTour`,
        chi: `koreaTour`,
    },
    birthDay: {
        ko: "생년월일",
        en: `date of birth`,
        ja: `生年月日`,
        chi: `出生年月日`,
    },
    service: {
        ko: "서비스",
        en: `Service`,
        ja: `サービス`,
        chi: `服务`,
    },
    representive: {
        ko: "대표인원",
        en: `Representative`,
        ja: `予約者代表`,
        chi: `代表人员`,
    },
    booker: {
        ko: "예약자",
        en: `Booker`,
        ja: `予約者`,
        chi: `预订者`,
    },
    male: {
        ko: "남성",
        en: `Male`,
        ja: `男性`,
        chi: `男性`,
    },
    female: {
        ko: "여성",
        en: `Female`,
        ja: `女性`,
        chi: `女性`,
    },
    localFestival: {
        ko: "로컬축제",
        en: `Local festival`,
        ja: `ローカルフェスティバル`,
        chi: `当地庆典`,
    },
    site_info: {
        ko: "소개",
        en: `Introduction`,
        ja: `紹介`,
        chi: `介绍网页`,
    },
    enter_placeholder: {
        ko: "검색어를 입력해주세요.",
        en: `Please enter a search term`,
        ja: `検索キーワードを入力してください`,
        chi: `请您输入一下检索语`,
    },
    all_menu_title: {
        ko: "전체메뉴",
        en: `All menu`,
        ja: `全体メニュー`,
        chi: `整个菜单`,
    },
    point: {
        ko: "포인트",
        en: `Point`,
        ja: `ポイント`,
        chi: `积分`,
    },
    won: {
        ko: "원",
        en: `KRW`,
        ja: `ウォン`,
        chi: `韩币`,
    },
    notification: {
        ko: "알림",
        en: `Notice`,
        ja: `お知らせ`,
        chi: `通知`,
    },
    question: {
        ko: "고객문의",
        en: `Inquiry`,
        ja: `問合せ`,
        chi: `咨询`,
    },
    guideAnnounce: {
        ko: "Guide 공지사항",
        en: `Guide Notice`,
        ja: `Guide お知らせ事項`,
        chi: `Guide 公告事项`,
    },
    announce: {
        ko: "공지사항",
        en: `Notice`,
        ja: `お知らせ事項`,
        chi: `公告事项`,
    },
    announceList: {
        ko: "공지목록",
        en: `Notice`,
        ja: `お知らせ事項`,
        chi: `公告目录`,
    },
    event: {
        ko: "이벤트",
        en: `Event`,
        ja: `イベント`,
        chi: `活动`,
    },
    customerCenter: {
        ko: "고객센터",
        en: `Client lounge`,
        ja: `お問い合わせ`,
        chi: `客户服务中心`,
    },
    contact_customer_center: {
        ko: "고객센터 문의하기",
        en: `Contact Customer Center`,
        ja: `カスタマーセンターにお問い合わせ`,
        chi: `咨询客户服务中心`,
    },
    title: {
        ko: "제목",
        en: `Title`,
        ja: `題目`,
        chi: `题目`,
    },
    writer: {
        ko: "작성자",
        en: `Writer`,
        ja: `作成者`,
        chi: `楼主`,
    },
    date: {
        ko: "날짜",
        en: `Date`,
        ja: `日付`,
        chi: `日子`,
    },
    dateSelect: {
        ko: "날짜선택",
        en: `Date Select`,
        ja: `日付選択`,
        chi: `选择日子`,
    },
    select: {
        ko: "예약하기",
        en: `Select`,
        ja: `選択`,
        chi: `[中] 选择`,
    },
    guideTourList: {
        ko: "운영중인 투어",
        en: `Tour in operation`,
        ja: `運営中のツアー`,
        chi: `巡回演出`,
    },
    talkWith: {
        ko: "이 가이드와 상담하기",
        en: `Start chat`,
        ja: `チャットで問い合わせ&確認`,
        chi: `开始聊天`,
    },
    talkWith2: {
        ko: "대화하기",
        en: `Start chat`,
        ja: `チャットで問い合わせ&確認`,
        chi: `开始聊天`,
    },
    questions: {
        ko: "문의하기",
        en: `Make Inquiry`,
        ja: `問い合わせ`,
        chi: `咨询`,
    },
    searchi: {
        ko: "통합검색",
        en: `Integrated Search`,
        ja: `統合検索`,
        chi: `综合检索`,
    },
    searchResult: {
        ko: "검색결과",
        en: `Search Result`,
        ja: `検索結果`,
        chi: `检索的结果`,
    },
    rule: {
        ko: "이용약관",
        en: `Terms and Conditions`,
        ja: `サイト利用規約`,
        chi: `使用条款`,
    },
    privacy_policy: {
        ko: "개인정보처리방침",
        en: `Privacy Policy`,
        ja: `個人情報処理ポリシー`,
        chi: `个人信息处理方针`,
    },
    user_info: {
        ko: "회원정보",
        en: `Member Information`,
        ja: `会員情報`,
        chi: `会员信息`,
    },
    profile_manager: {
        ko: "프로필관리",
        en: `Manage Profiles`,
        ja: `プロフィール管理`,
        chi: `简介管理`,
    },
    review: {
        ko: "리뷰",
        en: `Review`,
        ja: `レビュー&評価`,
        chi: `评论`,
    },
    reviewWrite: {
        ko: "리뷰쓰기",
        en: `Review`,
        ja: `レビュー&評価`,
        chi: `留言的地方`,
    },
    non_review: {
        ko: "작성된 리뷰가 없습니다.",
        en: "There are no reviews written.",
        ja: `作成されたレビュー&評価がありません。`,
        chi: "没有评论",
    },
    auth: {
        ko: "인증하기",
        en: `Authenticate`,
        ja: `認証`,
        chi: `验证`,
    },
    search: {
        ko: "검색하기",
        en: `Search`,
        ja: `検索`,
        chi: `检索`,
    },
    fall_review: {
        ko: "리뷰 쓰러가기",
        en: `Fall Review`,
        ja: `レビュー&評価書き`,
        chi: `写评论`,
    },
    koreaguide_recommendationtxt: {
        ko: "코리아가이드 추천여행",
        en: `koreaguide recommendation travel`,
        ja: `koreaguideおすすめ旅行`,
        chi: `koreaguide 推荐旅游`,
    },
    elimination: {
        ko: "삭제",
        en: `elimination`,
        ja: `削除`,
        chi: `消除`,
    },
    modify: {
        ko: "수정",
        en: `Modify`,
        ja: `修正する`,
        chi: `修改`,
    },
    tomodify: {
        ko: "수정하기",
        en: `Edit`,
        ja: `修正する`,
        chi: `修改`,
    },
    review_manage: {
        ko: "리뷰관리",
        en: `Review Management`,
        ja: `レビュー&評価管理`,
        chi: `评论管理`,
    },
    mypage_write: {
        ko: "나의 게시글",
        en: `My posts`,
        ja: `私の掲示文`,
        chi: `我的帖子`,
    },
    reservation_manager: {
        ko: "예약관리",
        en: `Manage Reservations`,
        ja: `予約管理`,
        chi: `预订管理`,
    },
    mypage_plainning: {
        ko: "나의 투어",
        en: `My Tour`,
        ja: `My Tour`,
        chi: `我的 Tour`,
    },
    mypage_settlement: {
        ko: "매출/정산",
        en: `Revenue/Settlement`,
        ja: `売り上げ/精算`,
        chi: `销售/结算`,
    },
    kakaologin: {
        ko: "카카오 로그인",
        en: `Kakao Login`,
        ja: `Kakao Login`,
        chi: `登录 Kakao`,
    },
    kakaoSignUp: {
        ko: "카카오 회원가입",
        en: `Kakao SignUp`,
        ja: `Kakao SignUp`,
        chi: `注册 Kakao`,
    },
    googlelogin: {
        ko: "구글 로그인",
        en: `Google Login`,
        ja: `Google Login`,
        chi: `登录 Google`,
    },
    googleSignUp: {
        ko: "구글 회원가입",
        en: `Google SignUp`,
        ja: `Google SignUp`,
        chi: `注册 Google`,
    },
    naverlogin: {
        ko: "네이버 로그인",
        en: `Naver Login`,
        ja: `Naver Login`,
        chi: `登录 Naver`,
    },
    naverSignUp: {
        ko: "네이버 회원가입",
        en: `Naver SignUp`,
        ja: `Naver SignUp`,
        chi: `注册 Naver`,
    },
    signUp: {
        ko: "회원가입",
        en: `sign up`,
        ja: `サインアップ`,
        chi: `注册`,
    },
    emailLogin: {
        ko: "이메일 로그인",
        en: `Email Login`,
        ja: `Email Login`,
        chi: `登录邮件`,
    },
    emailSignUp: {
        ko: "이메일 회원가입",
        en: `Email SignUp`,
        ja: `Email SignUp`,
        chi: `注册 邮件`,
    },
    login: {
        ko: "로그인",
        en: `Login`,
        ja: `ログイン`,
        chi: `登录`,
    },
    join: {
        ko: "회원가입",
        en: `Join in`,
        ja: `会員加入`,
        chi: `加入会员`,
    },
    id: {
        ko: "아이디",
        en: `ID`,
        ja: `ID`,
        chi: `用户名`,
    },
    password: {
        ko: "비밀번호",
        en: `Password`,
        ja: `Password`,
        chi: `密码`,
    },
    passwordCheck: {
        ko: "비밀번호 확인",
        en: `verify password`,
        ja: `パスワード確認`,
        chi: `确认密码`,
    },
    passwordChangeFailMessage: {
        ko: "비밀번호 변경을 실패했습니다.",
        en: "Password change failed.",
        ja: "パスワードの変更に失敗しました。",
        chi: "更改密码失败。",
    },
    passwordChangeSuccessMessage: {
        ko: "비밀번호가 변경되었습니다.",
        en: "Password change succeeded",
        ja: "パスワードが変更されました。",
        chi: "密码已更改。",
    },

    passwordDifferentSoFailMessage: {
        ko: "입력하신 새 비밀번호와 새 비밀번호 확인이 다릅니다.",
        en: "The new password you entered is different from the new password confirmation.",
        ja: "入力された新しいパスワードと新しいパスワードの確認が異なります。",
        chi: "您输入的新密码和新密码确认不同。",
    },
    logOut: {
        ko: "로그아웃",
        en: `Logout`,
        ja: `Logout`,
        chi: `注销`,
    },
    keeplogin: {
        ko: "로그인 유지",
        en: `Keep Login`,
        ja: `Keep Login`,
        chi: `维持登录`,
    },
    rememberid: {
        ko: "아이디 기억",
        en: `Remember ID`,
        ja: `Remember ID`,
        chi: `记住用户名`,
    },
    findmembers: {
        ko: "아이디/비번 찾기",
        en: `Find ID/ password`,
        ja: `IDパスワードを探す`,
        chi: `查找用户名/密码`,
    },
    guideinfolink: {
        ko: "가이드 정보 자세히보기",
        en: `Guide information`,
        ja: `ガイド情報`,
        chi: `导游的信息`,
    },
    seeDetail: {
        ko: "자세히보기",
        en: `See Detail`,
        ja: `詳細を見る`,
        chi: `仔细看`,
    },
    productlist: {
        ko: "상품리스트",
        en: `Product list`,
        ja: `商品リスト`,
        chi: `商品目录`,
    },
    moretravels: {
        ko: "판매자의 다른 여행 더보기",
        en: `More Travels`,
        ja: `他の旅行をもっと見る。`,
        chi: `查看其他更多的销售者的旅行商品`,
    },
    goodscode: {
        ko: "상품코드",
        en: `Product code`,
        ja: `商品コード`,
        chi: `商品号码`,
    },
    keywords: {
        ko: "키워드",
        en: `Keywords`,
        ja: `キーワード`,
        chi: `关键词`,
    },
    state: {
        ko: "상태",
        en: `State`,
        ja: `状態`,
        chi: `状态`,
    },
    nondisclosure: {
        ko: "비공개",
        en: `Nondisclosure`,
        ja: `非公開`,
        chi: `不公开`,
    },
    public: {
        ko: "공개",
        en: `Public`,
        ja: `公開`,
        chi: `公开`,
    },
    departuredate: {
        ko: "출발일",
        en: `Departure date`,
        ja: `出発日`,
        chi: `出发日期`,
    },
    travelperiod: {
        ko: "여행기간",
        en: `Travel Period`,
        ja: `旅行期間`,
        chi: `旅行期间`,
    },
    itinerary: {
        ko: "여행일정",
        en: `Itinerary`,
        ja: `旅行日程`,
        chi: `旅行日程`,
    },
    like_this: {
        ko: "이런분께 추천드려요.",
        en: `I recommend it to someone like this.`,
        ja: `お勧めします`,
        chi: `推荐给以下各位。`,
    },
    guidance_and_notes: {
        ko: "이런분께 추천드려요.",
        en: `Recommended for those who like`,
        ja: `おすすめ致します`,
        chi: `推荐给以下各位`,
    },
    participant_preparation: {
        ko: "참가자 준비물",
        en: `Participant Preparation`,
        ja: `参加者準備物`,
        chi: `参加人的准备物品`,
    },
    personnel: {
        ko: "인원",
        en: `Personnel`,
        ja: `人数`,
        chi: `人员`,
    },
    personSelect: {
        ko: "인원선택",
        en: `People Select`,
        ja: `人数選択`,
        chi: `选着人数`,
    },
    currentnumberofpeople: {
        ko: "현재인원",
        en: `Current number of people`,
        ja: `現在の人数`,
        chi: `现有人数`,
    },
    include: {
        ko: "포함사항",
        en: `Include`,
        ja: `含む事項`,
        chi: `包含事项`,
    },
    unInclued: {
        ko: "불포함사항",
        en: `Not included`,
        ja: `不含む事項`,
        chi: `不包含事项`,
    },
    footer_site_info: {
        ko: "회사소개",
        en: `Company introduction`,
        ja: `会社紹介`,
        chi: `公司的简介`,
    },
    footer_rule: {
        ko: "이용약관",
        en: `Terms of service`,
        ja: `利用規約`,
        chi: `服务条款`,
    },
    footer_privacy_policy: {
        ko: "개인정보처리방침",
        en: `Privacy Policy`,
        ja: `個人情報処理ポリシー`,
        chi: `个人信息处理方针`,
    },
    marketingInfo: {
        ko: "마켓팅 이용약관",
        en: `Marketing Policy`,
        ja: `マーケティングポリシー`,
        chi: `营销政策`,
    },
    footer_ceo: {
        ko: "대표",
        en: `CEO`,
        ja: `代表`,
        chi: `老总`,
    },
    footer_busi_num: {
        ko: "사업자등록번호",
        en: `Business license number`,
        ja: `事業登録番号`,
        chi: `营业证号`,
    },
    footer_email: {
        ko: "이메일",
        en: `E-mail`,
        ja: `E-mail`,
        chi: `电子邮件`,
    },
    businessnumber_check: {
        ko: "사업자정보확인",
        en: `Business number Check`,
        ja: `事業者情報確認`,
        chi: `确认企业信息`,
    },
    itsguide_CEO: {
        ko: "최성희",
        en: "Sung-hee Choi",
        ja: "Sung-hee Choi",
        chi: "Sung-hee Choi",
    },
    case: {
        ko: "건",
        en: "cases",
        ja: "件",
        chi: "件",
    },
    payStatus: {
        ko: "결제상태",
        en: "Payment Status",
        ja: "決済の状態",
        chi: "支付状态",
    },
    productSatus: {
        ko: "상품상태",
        en: "Product Status",
        ja: "商品状態",
        chi: "产品状态",
    },
    noProductData: {
        ko: "아직 등록한 상품이 없습니다.",
        en: "No Regiseted Product yet",
        ja: "まだ登録商品がありません。",
        chi: "还没有旅游商品。",
    },
    itsguide_adress: {
        ko: "부산광역시 영도구 봉래나루로 33",
        en: `(49037) 33 Bongnaenaru-ro, Yeongdo-gu, Busan, Republic of Korea`,
        ja: `(49037) 33 Bongnaenaru-ro, Yeongdo-gu, Busan, Republic of Korea`,
        chi: `釜山广域市 影岛区 Bongnaenaru路 33 (49037)`,
    },
    itsguide_name: {
        ko: "코리아가이드센터(주)",
        en: "Korea Guide Center Co., Ltd.",
        ja: "Korea Guide Center Co., Ltd.",
        chi: "Korea Guide Center Co., Ltd.",
    },
    guide_bank: {
        ko: "농협 351-1150-2295-63",
        en: `NH 351-1150-2295-63`,
        ja: `NH 351-1150-2295-63`,
        chi: `NH 351-1150-2295-63`,
    },
    guide_FAX: {
        ko: "051-715-0728",
        en: `(+82) 51-715-0728`,
        ja: `(+82) 51-715-0728`,
        chi: ` 传真号码 (+82) 51-715-0728`,
    },
    guide_phone: {
        ko: "051-715-0727",
        en: `(+82) 51-715-0727`,
        ja: `(+82) 51-715-0727`,
        chi: `(+82) 51-715-0727`,
    },
    footer_transferNum: {
        ko: "통신판매 신고번호",
        en: `Telecommunication sales report number`,
        ja: `通販申告番号`,
        chi: `电信销售报告号码`,
    },
    footer_businessNumber: {
        ko: "사업자번호",
        en: `Business number`,
        ja: `事業番号`,
        chi: `营业执照`,
    },
    footer_phoneNumber: {
        ko: "전화번호",
        en: `Phone number`,
        ja: `電話番号`,
        chi: `电话号码`,
    },
    footer_fax: {
        ko: "팩스",
        en: `Fax`,
        ja: `ファックス`,
        chi: `传真`,
    },
    footer_address: {
        ko: "주소",
        en: `Address`,
        ja: `住所`,
        chi: `住址`,
    },
    footer_accountNum: {
        ko: "계좌번호",
        en: `Bank account number`,
        ja: `口座番号`,
        chi: `账号`,
    },
    bankTransfer: {
        ko: "계좌이체",
        en: `account transfer`,
        ja: `振込み`,
        chi: `转帐`,
    },
    footer_janda: {
        ko: "대한민국 1등 클라우드·핀테크 기반 예약솔루션",
        en: `Korea's No. 1 Cloud and FinTech-based Reservation Solution`,
        ja: `大韓民国1等クラウド·フィンテック基盤予約ソリューション`,
        chi: `大韩民国第一名 云计算·芬科技基础预订解决方案`,
    },
    guide: {
        ko: "가이드",
        en: "Guide",
        ja: "ガイド",
        chi: "导游",
    },
    master: {
        ko: "마스터",
        en: "Master",
        ja: "マスター",
        chi: "大师",
    },
    anonyFindBooking: {
        ko: "예약조회",
        en: "reservation",
        ja: "予約照会",
        chi: "查询预订",
    },
    customTour: {
        ko: "개별여행주문",
        en: "Individual travel orders",
        ja: "個別旅行注文",
        chi: "个别旅游订单",
    },
    insert_link_plz: {
        ko: "링크 주소를 입력 해주세요.",
        en: `Please enter the link address.`,
        ja: `リンク先のアドレスを入力してください。`,
        chi: `请您输入一下链接地址。`,
    },
    time_over_resv_period: {
        ko: "예약가능 기간이 지났습니다.",
        en: `The reservation period has passed.`,
        ja: `予約可能期間が過ぎました。`,
        chi: `已经过去了可以预订的期间了。`,
    },
    accountHolder: {
        ko: "예금주",
        en: `Account Holder`,
        ja: `預金`,
        chi: `存款人`,
    },
    startFrom: {
        ko: "부터",
        en: ``,
        ja: ``,
        chi: ``,
    },
    bankName: {
        ko: "은행명",
        en: `Bank Name`,
        ja: `銀行名`,
        chi: `银行的名字`,
    },
    unOpend: {
        ko: "비공개",
        en: `closed`,
        ja: `非公開`,
        chi: `不公开`,
    },
    till: {
        ko: "까지",
        en: ``,
        ja: `~まで`,
        chi: `到`,
    },
    dateFormay: {
        ko: "YYYY년 MM월 DD일",
        en: `YYYY MM DD`,
        ja: `YYYY年 MM月 DD日`,
        chi: `YYYY年 MM月 DD日`,
    },
    dateFormatMDD: {
        ko: "MM월 DD일",
        en: `MM DD`,
        ja: `YYYY年 MM月 DD日`,
        chi: `MM月 DD日`,
    },
    basket_empty_message: {
        ko: "정말로 장바구니 내역을 초기화 하시겠습니까?",
        en: `Are you sure you want to reset your shopping cart history?`,
        ja: `ショッピング履歴を初期化しますか？`,
        chi: `真的想要初始化购物车吗？`,
    },
    basket_is_empty: {
        ko: "장바구니에 상품이 존재하지 않습니다.",
        en: `Product does not exist in the shopping cart.`,
        ja: `ショッピング内容に商品がありません。。`,
        chi: `购物车上没有产品。`,
    },
    product_info: {
        ko: "상품정보",
        en: `Product Information`,
        ja: `商品情報`,
        chi: `商品信息`,
    },
    option: {
        ko: "옵션",
        en: `Options`,
        ja: `オプション`,
        chi: `选着`,
    },
    product_price: {
        ko: "상품금액",
        en: `Price`,
        ja: `商品金額`,
        chi: `商品金額`,
    },
    status: {
        ko: "상태",
        en: `State`,
        ja: `状態`,
        chi: `状态`,
    },
    startDate: {
        ko: "출발일",
        en: `Departure Date`,
        ja: `出発日`,
        chi: `出发日期`,
    },
    travel_method: {
        ko: "여행방식",
        en: `Travel type`,
        ja: `旅行方式`,
        chi: `旅行方式`,
    },
    startPoint: {
        ko: "출발장소",
        en: `Departure Place`,
        ja: `出発場所`,
        chi: `出发地点`,
    },
    location: {
        ko: "장소",
        en: `Place`,
        ja: `場所`,
        chi: `场所`,
    },
    party_members: {
        ko: "모집인원",
        en: `People`,
        ja: `募集人数`,
        chi: `募集的人员`,
    },
    select_people: {
        ko: "선택인원",
        en: `Number of people`,
        ja: `選択人数`,
        chi: `选择人员`,
    },
    total: {
        ko: "총",
        en: `Total`,
        ja: `合計`,
        chi: `总共`,
    },
    range: {
        ko: "기간",
        en: `Period`,
        ja: `期間`,
        chi: `期间`,
    },
    one_day: {
        ko: "당일체험",
        en: `Experience`,
        ja: `当日体験`,
        chi: `当日体验`,
    },
    person_unit: {
        ko: "명",
        en: `p`,
        ja: `人`,
        chi: `人`,
    },
    change_condition_basket: {
        ko: "조건 추가/변경",
        en: `Add/Change Conditions`,
        ja: `条件の追加変更`,
        chi: `条件 附加/变更`,
    },
    money_unit: {
        ko: "원",
        en: `₩`,
        ja: `₩`,
        chi: `₩`,
        // chi: `韩币`,
    },
    ko: {
        ko: "Korean",
        en: `Korean`,
        ja: `韓国語`,
        chi: `韩语`,
    },
    en: {
        ko: "영어",
        en: `English`,
        ja: `英語`,
        chi: `英语`,
    },
    chi: {
        ko: "중국어",
        en: `Chinese`,
        ja: `中国語`,
        chi: `中文`,
    },
    ja: {
        ko: "일본어",
        en: `Japanese`,
        ja: `日本語`,
        chi: `日语`,
    },
    ot: {
        ko: "기타언어",
        en: `etc langauges`,
        ja: `その他の言語`,
        chi: `其他语言`,
    },
    shopping_cart: {
        ko: "장바구니 담기",
        en: `Shopping carton`,
        ja: `買い物かご入れ`,
        chi: `加入购物车`,
    },
    end_of_sale: {
        ko: "기간종료",
        en: `End of Sale`,
        ja: `販売終了`,
        chi: `期间结束了`,
    },
    travel_details: {
        ko: "여행상세설명",
        en: `Travel Details`,
        ja: `旅行の詳細説明`,
        chi: `旅行的详细说明`,
    },
    make_a_reservation: {
        ko: "예약하기",
        en: `To make a reservation`,
        ja: `予約する`,
        chi: `预订`,
    },
    sum: {
        ko: "총 금액",
        en: `Sum`,
        ja: `合計`,
        chi: `总额`,
    },

    maximum: {
        ko: "최대",
        en: `Maximum`,
        ja: `最大`,
        chi: `最大`,
    },
    minimum: {
        ko: "최소",
        en: `Minimum`,
        ja: `最小`,
        chi: `最小`,
    },
    order: {
        ko: "주문하기",
        en: `Ordering`,
        ja: `注文する`,
        chi: `订购`,
    },
    start_travel: {
        ko: "출발",
        en: `Departure`,
        ja: `出発`,
        chi: `出发`,
    },
    start_time: {
        ko: "출발시간",
        en: `departure time`,
        ja: `出発時間`,
        chi: `出发时间`,
    },
    sum_price: {
        ko: "합계금액",
        en: `Total Amount`,
        ja: `合計金額`,
        chi: `合计金额`,
    },
    adult: {
        ko: "성인",
        en: `Adult`,
        ja: `成人`,
        chi: `成人`,
    },
    kid: {
        ko: "소인",
        en: `Child`,
        ja: `小人`,
        chi: `孩子`,
    },
    baby: {
        ko: "유아",
        en: `Baby`,
        ja: `幼児`,
        chi: `婴儿`,
    },
    seeAll: {
        ko: "전체보기",
        en: `Show All`,
        ja: `全体選択`,
        chi: `看全体`,
    },
    selectAll: {
        ko: "전체선택",
        en: `Select All`,
        ja: `全体選択`,
        chi: `选着全部`,
    },
    selectDelete: {
        ko: "선택삭제",
        en: `Delete`,
        ja: `選択削除`,
        chi: `选择删除`,
    },
    delete: {
        ko: "삭제하기",
        en: `Delete`,
        ja: `選択削除`,
        chi: `删除`,
    },
    travler: {
        ko: "여행자",
        en: `Traveler`,
        ja: `旅行客`,
        chi: `游客`,
    },
    deleteAll: {
        ko: "전체삭제",
        en: `Delete All`,
        ja: `削除`,
        chi: `删除`,
    },
    gotoList: {
        ko: "리스트 보기",
        en: `TO LIST`,
        ja: `リスト表示`,
        chi: `去目录`,
    },
    viewMore: {
        ko: "바로가기",
        en: `Shortcuts`,
        ja: `リスト表示`,
        chi: `快捷键`,
    },
    noData: {
        ko: "게시글이 없습니다.",
        en: `There is no post.`,
        ja: `掲示された内容がありません`,
        chi: `没有写的传兰。`,
    },
    frequentQuestion: {
        ko: "자주하는 질문",
        en: `FAQ`,
        ja: `よくあるご質問`,
        chi: `常见问题`,
    },
    all: {
        ko: "전체",
        en: `All`,
        ja: `全体`,
        chi: `全部`,
    },
    start: {
        ko: "처음",
        en: `First`,
        ja: `初め`,
        chi: `初次`,
    },
    prev: {
        ko: "이전",
        en: `Prev`,
        ja: `以前`,
        chi: `以前`,
    },
    next: {
        ko: "다음",
        en: `Next`,
        ja: `次`,
        chi: `下一个`,
    },
    last: {
        ko: "마지막",
        en: `Last`,
        ja: `最後`,
        chi: `最后`,
    },
    new: {
        ko: "최신순",
        en: `new`,
        ja: `最新`,
        chi: `从最近的开始看`,
    },
    viewCOunt: {
        ko: "조회수",
        en: `view count`,
        ja: `照会数`,
        chi: `点击率`,
    },
    doPay: {
        ko: "결제하기",
        en: `Reservation`,
        ja: `決済`,
        chi: `支付`,
    },
    reciept: {
        ko: "영수증",
        en: `Receipt`,
        ja: `レシート`,
        chi: `发票`,
    },
    payAmount: {
        ko: "결제금액",
        en: `Pay Amount`,
        ja: `決済金額`,
        chi: `支付金额`,
    },
    TravelerwithProduct: {
        ko: "여행자들이 함께 본 상품",
        en: `Check similar products`,
        ja: `他の旅行者が一緒に見た商品`,
        chi: `游客们跟一下几个旅行商品一起看了`,
    },
    payMethod: {
        ko: "결제수단",
        en: `Pay Amount`,
        ja: `決済方式`,
        chi: `支付方式`,
    },
    cardPay: {
        ko: "카드결제",
        en: `Card Pay`,
        ja: `カード決済`,
        chi: `用卡结账`,
    },
    bankPay: {
        ko: "무통장입금",
        en: `Bank Send`,
        ja: `銀行振込`,
        chi: `无折存款`,
    },
    bankPayAmt: {
        ko: "입금예정금액",
        en: `Deposit Amount`,
        ja: `入金予定金額`,
        chi: `存款金额`,
    },
    payDate: {
        ko: "결제일",
        en: `Pay Date`,
        ja: `決済日`,
        chi: `付款日期`,
    },
    senderName: {
        ko: "입금자명",
        en: `Sender Name`,
        ja: `入金名`,
        chi: `存款人姓名`,
    },
    refundMethod: {
        ko: "환불방법",
        en: `Refund Method`,
        ja: `払戻方法`,
        chi: `退款方式`,
    },
    allRaiting: {
        ko: "전체평점",
        en: `All rating`,
        ja: `総合評価`,
        chi: `全体评价`,
    },
    RefundToYourAccount: {
        ko: "환불방법",
        en: `Refund to your account`,
        ja: `払戻方法`,
        chi: `退款方式`,
    },
    targetBank: {
        ko: "입금은행",
        en: `Deposit Bank`,
        ja: `入金銀行`,
        chi: `存款银行`,
    },
    senderInfo: {
        ko: "입금자 정보",
        en: `Depositor information`,
        ja: `入金情報`,
        chi: `存款人信息`,
    },
    viewProd: {
        ko: "상품보기",
        en: `View Product`,
        ja: `商品を見る`,
        chi: `查看产品`,
    },
    name: {
        ko: "이름",
        en: `Name`,
        ja: `名前`,
        chi: `名字`,
    },
    contact: {
        ko: "연락처",
        en: `conatact`,
        ja: `連絡先`,
        chi: `联系方式`,
    },
    phoneNumber: {
        ko: "연락처",
        en: `conatact`,
        ja: `連絡先`,
        chi: `电话号码`,
    },
    email: {
        ko: "이메일",
        en: `Email`,
        ja: `Email`,
        chi: `电子邮件`,
    },
    country: {
        ko: "국적",
        en: `nationality`,
        ja: `国籍`,
        chi: `国籍`,
    },
    I: {
        ko: "나",
        en: `I`,
        ja: `私`,
        chi: `我`,
    },
    send: {
        ko: "보내기",
        en: `Send`,
        ja: `送信`,
        chi: `发送`,
    },
    gender: {
        ko: "성별",
        en: `Gender`,
        ja: `性別`,
        chi: `性别`,
    },
    submit: {
        ko: "제출하기",
        en: `submit`,
        ja: `提出`,
        chi: `提交`,
    },
    cancel: {
        ko: "취소하기",
        en: `cancel`,
        ja: `キャンセル`,
        chi: `取消`,
    },
    titleBookerInfoModal: {
        ko: "여행자정보 입력",
        en: `traveler information`,
        ja: `旅行者情報`,
        chi: `旅客信息`,
    },
    description: {
        ko: "여행자 정보를 입력해주세요. 대표자는 필수로 입력 하셔야합니다.",
        en: `Please enter your traveler information. Representative must be entered`,
        ja: `旅行者情報を入力してください。予約代表者入力は必須です`,
        chi: `请输入您的旅客信息。必须输入预约代表`,
    },
    passportNumber: {
        ko: "여권번호",
        en: `passport Number`,
        ja: `パスポート番号`,
        chi: `护照号`,
    },
    buyerNameRequired: {
        ko: "구매자 이름은 필수 입니다.",
        en: `Buyer name is required`,
        ja: `購入者の名前は必須です`,
        chi: `必须要填购买者的姓名`,
    },
    reservationNumber: {
        ko: "예약번호",
        en: `Reservation Number`,
        ja: `予約番号`,
        chi: `预订号码。`,
    },
    reservationProductName: {
        ko: "예약 상품명",
        en: `Product Name`,
        ja: `ご予約の商品名`,
        chi: `预订的商品名字`,
    },
    bookDate: {
        ko: "예약일",
        en: `reservation date`,
        ja: `予約日`,
        chi: `预订日期`,
    },
    goToHome: {
        ko: "홈으로",
        en: `To Home`,
        ja: `To Home`,
        chi: `主页`,
    },
    agreeAll: {
        ko: "전체동의",
        en: `Agree All`,
        ja: `すべて同意する`,
        chi: `全部同意`,
    },
    bankExpireMessage: {
        ko: "무통장 입금은 24시간 이내에 입금하지 않으시면 예약이 자동취소 됩니다.",
        en: `If the deposit is not made within 24 hours, the reservation will be automatically canceled.`,
        ja: `振込は、24時間以内に振込されないと予約が自動にキャンセルされます`,
        chi: `如果24 小时内不支付押金，预订会自动取消。`,
    },
    checkMyResv: {
        ko: "예약내역 확인하기",
        en: `Check your reservation details`,
        ja: `予約内容を確認`,
        chi: `检查您的预订详情`,
    },
    resvWillCompleteIf: {
        ko: "입금을 해주시면 예약이 완료됩니다.",
        en: `Reservation is complete upon payment.`,
        ja: `送金していただければ予約が完了します。`,
        chi: `付款后预订完成。`,
    },
    paypal: {
        ko: "페이팔",
        en: `Paypal`,
        ja: `Paypal`,
        chi: `贝宝`,
    },
    ratingOrder: {
        ko: "평점순",
        en: `Popular`,
        ja: `人気順`,
        chi: `[中]按照评分顺序`,
    },
    reviewOrder: {
        ko: "리뷰순",
        en: `Review`,
        ja: `Review順`,
        chi: `按照评论顺序`,
    },
    lowestPrice: {
        ko: "낮은 가격순",
        en: `Low Price`,
        ja: `低価順`,
        chi: `按照低价顺序`,
    },
    highestPrice: {
        ko: "높은 가격순",
        en: `Heigh Price`,
        ja: `高価順`,
        chi: `按照高价顺序`,
    },
    message: {
        ko: "메세지",
        en: `Message`,
        ja: `メッセージ`,
        chi: `短信`,
    },
    myTravel: {
        ko: "내 여행",
        en: `My travel`,
        ja: `私の旅行`,
        chi: `我的旅行`,
    },
    wishList: {
        ko: "위시리스트",
        en: `Wish List`,
        ja: `Wish List`,
        chi: `愿望目录`,
    },
    profile_manage: {
        ko: "프로필관리",
        en: `Profile Management`,
        ja: `プロファイル管理`,
        chi: `管理人物简介`,
    },
    managePage: {
        ko: "가이드페이지",
        en: `Manage`,
        ja: `ページの管理`,
        chi: `管理页面`,
    },
    localtionalGuide: {
        ko: "전문가이드",
        en: `Local Guide`,
        ja: `現地ガイド`,
        chi: `本地导游`,
    },
    itsThemaTravel: {
        ko: "투어 & 액티비티",
        en: `Tours & Activities`,
        ja: `ツアー&アクティビティ`,
        chi: `旅游与活动`,
    },
    selectRegion: {
        ko: "지도에서 지역을 선택 해주세요.",
        en: `Select Region In Map`,
        ja: `マップで地域を選択してください`,
        chi: `在地图中请您选着一下区域`,
    },
    bestTourTitle: {
        ko: "투어&여행 베스트셀러",
        en: `Best Tour and Travel`,
        ja: `最高のベストセラーツアー`,
        chi: `最佳旅游和旅行`,
    },
    popularTourTitle: {
        ko: "인기상품",
        en: `Popular Product`,
        ja: `人気商品`,
        chi: `热销商品`,
    },
    popularTourDesc: {
        ko: "코리아 가이드의 인기 상품을 만나보세요.",
        en: `Meet the popular products of the Korea Guide.`,
        ja: `コリアガイドの人気商品をご覧ください!`,
        chi: `请欣赏韩国导游的人气商品!`,
    },
    bestTourDesc: {
        ko: "코리아가이드의 베스트 셀러!",
        en: `Korea Guide's Best Seller!`,
        ja: `コリアガイドのベストセラー！`,
        chi: `韩国导游地畅销旅游！`,
    },
    bestKPOPTitle: {
        ko: "K-POP BEST 투어&여행 베스트셀러",
        en: `K-POP BEST Best Tour and Travel`,
        ja: `K-POP BEST 最高のベストセラーツアー`,
        chi: `K-POP BEST 最佳旅游和旅行`,
    },
    bestKPOPTourDesc: {
        ko: "K-POP BEST 즐거움이 가득한 여행!",
        en: `K-POP BEST A trip full of fun!`,
        ja: `K-POP BEST  楽しさいっぱいの旅！`,
        chi: `K-POP BEST  充满欢乐的旅行！`,
    },
    newTourDesc: {
        ko: "새롭게 기획된 최신 투어를 확인해보세요.",
        en: `Check out our latest Tours`,
        ja: `最新のツアーをご覧ください`,
        chi: `查看一下我们的最新旅游`,
    },
    newTourTitle: {
        ko: "최신&트렌드 투어",
        en: `Latest & Trending Tour`,
        ja: `最新＆トレンドツアー`,
        chi: `最新趋势旅游`,
    },
    locationalProducts: {
        ko: "연관 상품",
        en: `These are local products.`,
        ja: `現地ローカルツアー商品です`,
        chi: `这些是本地产品.`,
    },
    searchCitiesGuidesTours: {
        ko: "도시, 가이드, 투어 검색",
        ja: `Search cities, guides, tours...`,
        en: `Search cities, guides, tours...`,
        chi: `Search cities, guides, tours...`,
    },
    searchWithKeyWard: {
        ko: "키워드로 찾아 보세요.",
        ja: `キーワードで探す.`,
        en: `Search by keyword.`,
        chi: `按关键字搜索.`,
    },
    loginWeleComeMessage: {
        ko: "코리아가이드 센터 로그인",
        ja: `韓国ガイドセンターログイン`,
        en: `Korea Guide Center Login`,
        chi: `Korea Guide Center登录.`,
    },
    signUpWeleComeTitle: {
        ko: "코리아 가이드센터 회원가입",
        ja: `韓国ガイドセンターに参加`,
        en: `JoinGuide Center`,
        chi: `注册Korea Guide Center`,
    },
    signUpWeleComeMessage: {
        ko: "키워드로 찾아 보세요.",
        ja: `キーワードで探す.`,
        en: `Search by keyword.`,
        chi: `用关键字搜索.`,
    },
    toSignUpMessage: {
        ko: "이미 가입된 계정이 있나요?",
        ja: `既に加入しているアカウントがありますか?`,
        en: `Do you already have an account?`,
        chi: `你已经有个账号?`,
    },
    toLoginMessage: {
        ko: "아직 회원이 아니신가요?",
        ja: `まだ会員ではありませんか？`,
        en: `Not a member yet?`,
        chi: `还不是会员吗？`,
    },
    dupliCateCheck: {
        ko: "중복확인",
        ja: `重複チェック`,
        en: `duplicate check`,
        chi: `检查重复`,
    },
    checkIdAndPw: {
        ko: "ID/PW를 확인 해주세요.",
        ja: `ID / PWを確認してください.`,
        en: `Please check ID/PW.`,
        chi: `请您确认一下 用户名/ 密码.`,
    },
    loginCompleted: {
        ko: "로그인 완료",
        ja: `ログイン完了`,
        en: `Login complete`,
        chi: `登录好了`,
    },
    noDataMore: {
        ko: "데이터가 없습니다.",
        ja: `データがありません.`,
        en: `No data.`,
        chi: `没有数据.`,
    },
    seeMore: {
        ko: "더보기",
        ja: `続けて見る`,
        en: `see more`,
        chi: `查看更多`,
    },
    seeMoreGuides: {
        ko: "전체 가이드 보기",
        ja: "全体ガイドを見る",
        en: "View the full guide",
        chi: "查看完整向导",
    },
    partyIsOvered: {
        ko: "모집이 마감되었어요.",
        ja: `募集が終了しました.`,
        en: `Recruitment closed.`,
        chi: `招聘结束了.`,
    },
    additionalCallMessage: {
        ko: "추가 예약은 전화 부탁드립니다.",
        ja: `追加予約は電話でお願いします`,
        en: `For further reservations, please call.`,
        chi: `如需更多预订，请您给我们打电话一下.`,
    },
    addToLove: {
        ko: "위시리스트에 담기",
        ja: `関心のある商品追加`,
        en: `product of interest`,
        chi: `添加感兴趣的产品`,
    },
    useInfo: {
        ko: "이용안내",
        ja: `利用案内`,
        en: `use guidance`,
        chi: `使用指导`,
    },
    importantInfo: {
        ko: "필수정보",
        ja: `必要情報`,
        en: `Required information`,
        chi: `需要的信息`,
    },
    cancelRefundInfo: {
        ko: "취소 및 환불 규정",
        ja: `キャンセルおよび返金ポリシー`,
        en: `Cancellation and Refund Policy`,
        chi: `取消和退款政策`,
    },
    noTourDayCanSelect: {
        ko: "선택 가능한 투어날짜가 없습니다.",
        ja: `利用可能なツアー日がありません`,
        en: `There are no available tour dates`,
        chi: `没有可用的旅游日期`,
    },
    reviewText: {
        ko: "리뷰내용",
        ja: `コメント`,
        en: `Comment`,
        chi: `评论`,
    },
    reviewImage: {
        ko: "후기사진",
        ja: `レビュー写真`,
        en: `photo review`,
        chi: `回顾照片`,
    },
    reviewMessageLabel: {
        ko: "상품후기",
        ja: `商品レビュー`,
        en: `Product review`,
        chi: `产品评论`,
    },
    plesaeWriteReview: {
        ko: "후기를 작성해 주세요.",
        ja: `後書きをお願いします`,
        en: `Please write a review`,
        chi: `请您写一下评论`,
    },
    reviewStarLabel: {
        ko: "투어에 만족하셨나요?",
        ja: `ツアーに満足しましたか？`,
        en: `satisfied with the tour?`,
        chi: `对这次旅行满意吗？`,
    },
    thanksForYourReview: {
        ko: "상품 후기를 남겨주셔서 감사합니다.",
        ja: `商品の後書き感謝いたします。`,
        en: `Thanks for leaving a review.`,
        chi: `感谢您留下评论.`,
    },
    reviewAtLesat10Plz: {
        ko: "최소 10자 이상의 평을 남겨주세요.",
        ja: `10文字以上評価をお願いします`,
        en: `please write at least 10 words.`,
        chi: `请至少写10个字以上.`,
    },
    reviewDeleteComplete: {
        ko: "리뷰 삭제완료",
        ja: `レビューは削除完了`,
        en: `Review has been deleted`,
        chi: `评论已删除`,
    },
    reviewUpdateComplete: {
        ko: "리뷰 수정완료",
        ja: `レビュー修整完了`,
        en: `review update complete`,
        chi: `修改评论好了`,
    },
    reviewCreateComplete: {
        ko: "리뷰 작성완료",
        ja: `レビュー作成完了`,
        en: `Review completed`,
        chi: `评论写好了`,
    },
    tourViewCardDescription: {
        ko: "주문하시기전 선택 상품에 대해서 확인 해주세요.",
        ja: `ご注文前に選択した商品をご確認お願いします`,
        en: `Please check the selected product before ordering.`,
        chi: `下单前请确认所选产品.`,
    },
    tourViewCardTitle: {
        ko: "선택상품",
        ja: `選択した商品`,
        en: `selected product`,
        chi: `所选产品`,
    },
    bookerInfo: {
        ko: "예약자정보",
        ja: `予約情報`,
        en: `Reservation information`,
        chi: `预订者信息`,
    },
    myProfileInfo: {
        ko: "내 프로필 정보 사용",
        ja: `私のプロフィール情報を使用する`,
        en: `Use my profile information`,
        chi: `使用我的个人简介信息`,
    },
    bookerName: {
        ko: "예약자정보",
        ja: `予約者情報`,
        en: `Reservation information`,
        chi: `预订者信息`,
    },
    bookingMemoLabel: {
        ko: "전달사항",
        ja: `メッセージ`,
        en: `message`,
        chi: `通知`,
    },
    bookerInfoDesc: {
        ko: "대표자님의 여행자 정보는 필수 입니다.",
        ja: `代表の旅行者情報は必須です`,
        en: `The representative's traveler information is essential.`,
        chi: `代表的旅客信息是必须要的.`,
    },
    pleaseAgreeWithPolicies: {
        ko: "아래 약관에 동의해 주세요.",
        ja: `以下の約款にに同意してください.`,
        en: `Please agree to the terms below`,
        chi: `请同意一下以下条款`,
    },
    refundAccount: {
        ko: "환불계좌 정보",
        ja: `払戻口座情報`,
        en: `Refund Account Information`,
        chi: `退款账户信息`,
    },
    refundAccountDesc: {
        ko: "환불 상황이 되면 아래계좌로 전송 해드립니다.",
        ja: `返金の場合、以下の口座に送金されます.`,
        en: `In case of refund, money will be sent to the account below.`,
        chi: `如有退款，汇款到以下账户.`,
    },
    agree: {
        ko: "동의합니다.",
        ja: `同意`,
        en: `agree`,
        chi: `同意`,
    },
    close: {
        ko: "닫기",
        en: `close`,
        ja: `close`,
        chi: `关闭`,
    },
    open: {
        ko: "열기",
        en: `open`,
        ja: `open`,
        chi: `打开`,
    },
    includeBooker: {
        ko: "예약자포함하기",
        en: `include booker`,
        ja: `予約者を含む`,
        chi: `包括预订者`,
    },
    addTraveler: {
        ko: "여행자 추가하기.",
        en: `Add travelers`,
        ja: `旅行者を追加する`,
        chi: `添加旅客`,
    },
    travelerPolicy: {
        ko: "여행자 약관",
        en: `traveler policy`,
        ja: `旅行者ポリシー`,
        chi: `旅客政策`,
    },
    cancelReason1: {
        ko: "기상 및 천재지변 문제",
        en: `Weather and natural disasters.`,
        ja: `天気と自然災害.`,
        chi: `天气和自然灾害`,
    },
    cancelReason2: {
        ko: "원하는 가격대가 아닙니다.",
        en: `not the price you want.`,
        ja: `望む価格ではありません.`,
        chi: `不是你想要的价格.`,
    },
    cancelReason3: {
        ko: "개인적 문제",
        en: `personal issues`,
        ja: `個人的な問題`,
        chi: `个人问题`,
    },
    else: {
        ko: "기타",
        en: `etc`,
        ja: `その他`,
        chi: `其他`,
    },
    cancelTitle: {
        ko: "정말로 여행을 취소하시나요?",
        en: `Are you really canceling your trip?`,
        ja: `本当にあなたの旅行をキャンセルしますか？`,
        chi: `你真的要取消旅行吗？`,
    },
    cancelDesc: {
        ko: "보다 좋은 서비스를 제공하기 위해서 취소사유를 작성해 주세요.",
        en: `In order to provide better service, please write the reason for cancellation.`,
        ja: `より良いサービスを提供するために、キャンセルの理由をお書きください。`,
        chi: `为了提供更好的服务，请写下取消原因。`,
    },
    cancelReason: {
        ko: "취소사유",
        en: `Cancellation reason`,
        ja: `キャンセル理由`,
        chi: `取消原因`,
    },
    chcekSimilarTours: {
        ko: "비슷한 상품들을 찾고 계신가요?",
        en: `Are you looking for similar products?`,
        ja: `同様の商品をお探しでますか？`,
        chi: `您在寻找类似的产品吗？`,
    },
    cancelInfo: {
        ko: "취소정보",
        en: `Cancellation information`,
        ja: `キャンセル情報`,
        chi: `取消信息`,
    },
    myReviews: {
        ko: "내가 작성한 리뷰",
        en: `my review`,
        ja: `私のレビュー`,
        chi: `我的评论`,
    },
    bookDetail: {
        ko: "예약상세",
        en: `Reservation details`,
        ja: `予約内容`,
        chi: `预订内容`,
    },
    travelerDetailView: {
        ko: "여행자 상세보기",
        en: `Traveler Details`,
        ja: `旅行者情報`,
        chi: `旅客详情`,
    },
    bookingCompleted: {
        ko: "예약이 완료되었습니다.",
        en: `Reservation complete.`,
        ja: `予約完了.`,
        chi: `预订好了.`,
    },
    bookingReady: {
        ko: "예약대기",
        en: `ready to confirm`,
        ja: `予約待ち`,
        chi: `等待预订`,
    },
    bookingConfirmed: {
        ko: "예약승인",
        en: `confirmed`,
        ja: `予約確定`,
        chi: `预订确认`,
    },
    bookingConfirmeCompleted: {
        ko: "예약이 승인되었습니다.",
        en: `reservation confirmed.`,
        ja: `予約確定`,
        chi: `预订确认.`,
    },
    guideCheckingThisBooking: {
        ko: "가이드가 예약가능여부를 확인하고 있습니다.",
        en: `guide is checking availability.`,
        ja: `ガイドが予約状況を確認しています`,
        chi: `导游正在确认是否可以预订.`,
    },
    bookingCode: {
        ko: "예약코드",
        en: `Reservation code`,
        ja: `予約コード`,
        chi: `预约号码`,
    },
    tourCode: {
        ko: "투어코드",
        en: `Tour code`,
        ja: `ツアーコード`,
        chi: `旅游号码`,
    },
    createdAtTime: {
        ko: "예약일 ",
        en: ` Booking at `,
        ja: `予約日 `,
        chi: `预约日`,
    },
    workArea: {
        ko: "활동지역",
        en: `activity area : `,
        ja: `活動地域 : `,
        chi: `活动区 : `,
    },
    useLanguage: {
        ko: "사용 가능 언어",
        en: `language spoken`,
        ja: `使用言語`,
        chi: `使用语言`,
    },
    guideType: {
        ko: "가이드 타입",
        en: `Guide type :`,
        ja: `ガイドタイプ :`,
        chi: `导游类型 :`,
    },
    guideIntroduce: {
        ko: "가이드 소개",
        en: "Guide Introduction",
        ja: "ガイド紹介",
        chi: "导游介绍",
    },
    fileUpload: {
        ko: "파일 업로드",
        en: `File Upload`,
        ja: `File Upload`,
        chi: `上传软件`,
    },
    upload: {
        ko: "업로드",
        en: `Upload`,
        ja: `Upload`,
        chi: `上传`,
    },
    doNotSendPersonalInfo: {
        ko: "개인 연락처를 주고 받지 마세요. 개인간의 거래는 책임지지 않습니다 • 날짜. 인원, 지역, 여행취향 또는 목적을 적어 주시면 가이드로부터 더욱 구체적인 회답을 받을수 있습니다.",
        en: `Do not exchange personal contacts information. We are not responsible for personal transactions. 
        •  If you write down the date, number of people, region, travel preferences, or purpose, you can get a more specific answer from the guide. `,
        ja: `個人間の連絡先を交換しないでください。 個人の取引は責任を負いません。
        •  日付、人数、地域、旅行の好み、または目的を書いていただければ、ガイドからより具体的な回答を受けることができます。`,
        chi: `不要交换个人联系方式不负责个 人间的交易`,
    },
    seeMyCustomTour: {
        ko: "내가 작성한 커스텀 투어보기",
        en: `See my customized tour`,
        ja: `私が注文したカスタムツアーを見る`,
        chi: `查看我制造的旅行`,
    },
    customTourCreateTitle: {
        ko: `"나만의 여행을 만들어보세요." (개인여행을 희망하신다면 적어주세요.)`,
        en: `Create your own trip.`,
        ja: `個人旅行をご希望でしたらご注文を書いてください`,
        chi: `如果您想个人旅行，请填写订单.`,
    },
    customTourCreateDesc: {
        ko: "신청을 완료하시면 한국현지가이드들이 응답을 보내드립니다.",
        en: `When you submit customized tour,guides will send you offers`,
        ja: `申し込みが完了すると、韓国現地ガイドより、ご返信お送りします`,
        chi: `申请好的话，看韩国导游的建议并回复您.`,
    },
    selectTourRange: {
        ko: "여행기간 선택",
        en: `Select travel period`,
        ja: `旅行期間を選択`,
        chi: `选择旅行时间`,
    },
    dateStartAndEnd: {
        ko: "날짜 출발 및 도착",
        en: `Date of Departure and Arrival`,
        ja: `出発日と到着日`,
        chi: `出发和到达日期`,
    },
    tourStartTimeSelect: {
        ko: "출발시간 선택",
        en: `Select departure time`,
        ja: `出発時刻選択`,
        chi: `选择出发时间`,
    },
    am: {
        ko: "오전",
        en: `AM`,
        ja: `AM`,
        chi: `[中]上午`,
    },
    pm: {
        ko: "오후",
        en: `PM`,
        ja: `PM`,
        chi: `下午`,
    },
    selectLang: {
        ko: "언어선택",
        en: `language selection`,
        ja: `言語選択`,
        chi: `选择语言`,
    },
    selectTheme: {
        ko: "여행테마 선택",
        en: `travel theme selection`,
        ja: `旅行のテーマ選択`,
        chi: `选择旅游主题`,
    },
    budget: {
        ko: "예산(원)",
        en: `Budget (KRW)`,
        ja: `予算（KRW）`,
        chi: `预算（韩元）`,
    },
    regionSelect: {
        ko: "지역선택",
        en: `Region selection`,
        ja: `地域選択`,
        chi: `选择区域`,
    },
    regionSelectDetail: {
        ko: "자세한지역",
        en: `detail area`,
        ja: `詳細エリア`,
        chi: `细节区`,
    },
    wishTourContents: {
        ko: "희망 투어내용 (200자 내외)",
        en: `Custom Tour Details (200 words or less)`,
        ja: `希望するツアーの内容（200ワード以下）`,
        chi: `希望旅行内容（200 字左右）`,
    },
    customTourMessageLabel: {
        ko: "기타전달사항 (200자 내외)",
        en: `Other information (200 words or less)`,
        ja: `その他の情報（200ワード以下）`,
        chi: `其他想说内容（200字以内）`,
    },
    profileUpdateTitle: {
        ko: "프로필 업데이트",
        en: `profile update`,
        ja: `プロファイルの更新`,
        chi: `个人简历更新`,
    },
    resgin: {
        ko: "회원탈퇴",
        en: `Withdrawal`,
        ja: `アカウント削除`,
        chi: `退出`,
    },
    update: {
        ko: "업데이트",
        en: `Update`,
        ja: `Update`,
        chi: `更新`,
    },
    bookProfileZoneDesc: {
        ko: "개인정보는 계정변경 버튼을 이용 해주세요.",
        en: `For personal information, please use the Change Account button.`,
        ja: `敏感な情報はアカウント変更ボタンをご利用ください。.`,
        chi: `对于敏感信息，请按修改帐户.`,
    },
    accountChange: {
        ko: "비밀번호 변경",
        en: `Change Password`,
        ja: `パスワードを変更`,
        chi: `修改密码`,
    },
    plesaeResginTitle: {
        ko: "계정인증후 진행 해주세요.",
        en: `Please proceed after account verification`,
        ja: `アカウント認証後に進めてください`,
        chi: `进行一下`,
    },
    plesaeResginDesc: {
        ko: "계정을 인증한후 진행 가능합니다.",
        en: `You can proceed after verifying your account.`,
        ja: `アカウントを確認してから進行できます。`,
        chi: `账号之后可以进行`,
    },
    AccountConfirmCompleted: {
        ko: "계정인증이 완료되었습니다.",
        en: `Account verification complete.`,
        ja: `アカウントの確認が完了しました.`,
        chi: `账号验证好了`,
    },
    accountManage: {
        ko: "계정관리",
        en: `Account Manage`,
        ja: `アカウント管理`,
        chi: `账户管理`,
    },
    resign: {
        ko: "탈퇴하기",
        en: `Delete Account`,
        ja: `脱退`,
        chi: `退出`,
    },
    resignTitle: {
        ko: "이용해 주셔서 감사합니다.",
        en: `Thank you for using.`,
        ja: `ご利用いただきありがとうございます.`,
        chi: ` 谢谢您的使用`,
    },
    resignReason: {
        ko: "탈퇴사유",
        en: `Reason for withdrawal`,
        ja: `脱退の理由`,
        chi: `退出的理由`,
    },
    resignDesc: {
        ko: "보다 좋은 서비스를 제공하기 위해서 탈퇴사유를 적어주세요.",
        en: `In order to provide better service, please write the reason for withdrawal.`,
        ja: `より良いサービスを提供するために、脱退の理由をお書きください.`,
        chi: `为了更好的服务，请您写一下推出的理由.`,
    },
    resignReason1: {
        ko: "재가입을 원합니다.",
        en: `I want to rejoin`,
        ja: `再加入します`,
        chi: `我想在注册`,
    },
    resignReason2: {
        ko: "수수료가 비쌉니다",
        en: `commision is high.`,
        ja: `手数料が高いです.`,
        chi: `手续费贵.`,
    },
    customerCeneterInfo: {
        ko: "고객센터 운영안내",
        en: `Customer Service Center managing Guide`,
        ja: `カスタマーサービスセンターご案内`,
        chi: `[中]客户服务中心 运营`,
    },
    customerCeneterData: {
        ko: `고객센터 kgcenter727@gmail.com/051-715-0727 상담 가능
        시간 오전9~오후6시(주말, 공휴일 제외)`,
        en: `Customer Center available
        Hours 9 am to 6 pm (excluding weekends and holidays)
        Email : kgcenter727@gmail.com Tel : 051-715-0727 `,
        ja: `カスタマーセンターkgcenter727@gmail.com/051-715-0727相談可能
        営業時間午前9時から午後6時（週末と祝日を除く）`,
        chi: `客户中心 kgcenter727@gmail.com/051-715-0727 可咨询
        营业时间 上午 9 点至下午 6 点（周末和节假日除外）`,
    },
    noIntroductionForLanguage: {
        ko: "해당언어에 자기소개가 없습니다.",
        en: `There is no introduction in this language.`,
        ja: `この言語での紹介はありません.`,
        chi: `[中]这个语言，没有自我介绍.`,
    },
    viewGuideTours: {
        ko: "가이드님의 투어들을 만나보세요.",
        en: `Meet your guide's tours.`,
        ja: `現地ガイドが直接企画したツアーをおすすめします`,
        chi: `请您见当地导游的旅行.`,
    },
    guideTours: {
        ko: "서비스 상품",
        en: `Service tours`,
        ja: `サービスツアー`,
        chi: `服务之旅`,
    },
    peopleSelectTitle: {
        ko: "아래에서 투어 인원을 선택해주세요.",
        en: `Please select the number of people on your tour.`,
        ja: `ツアーの人数を選択してください.`,
        chi: `[中]请您选择一下旅行人数 `,
    },
    peopleSelectDesc: {
        ko: "원하는 인원 만큼 선택할 수 없을경우에 문의 부탁드립니다.",
        en: `If you cannot select the number of people you want, please contact us.`,
        ja: `希望人数の選択が不可能な場合、お問い合わせください。`,
        chi: `如果您无法选择您想要的人数，请与我们联系。`,
    },
    regionLineTitle: {
        ko: "지역의 투어를 만나보세요.",
        en: `Choose a local tour.`,
        ja: `ローカルツアーを選択してみましょう`,
        chi: `选择当地旅游.`,
    },
    regionGuide: {
        ko: "가이드",
        en: `Guide`,
        ja: `ガイド`,
        chi: `导游`,
    },
    regionLineDesc: {
        ko: "선택 지역의 상품들을 만나보세요.",
        en: `Discover products from selected regions`,
        ja: `選択地域の商品検索.`,
        chi: `发现来自选定地区的产品.`,
    },
    replaied: {
        ko: "답변완료",
        en: `replied`,
        ja: `回答完了`,
        chi: `回复了`,
    },
    unReplaied: {
        ko: "미답변",
        en: `unanswered`,
        ja: `未回答`,
        chi: `未答复`,
    },
    tourRange: {
        ko: "투어기간",
        en: `Tour Period`,
        ja: `ツアー期間`,
        chi: `旅行期间`,
    },
    dayUnit: {
        ko: "일",
        en: `day`,
        ja: `日`,
        chi: `日`,
    },
    singleDay: {
        ko: "당일",
        en: `OneDay`,
        ja: `一日ツアー`,
        chi: `一天`,
    },
    // 8월 31일 전달사항
    // 8월 31일 전달사항
    notificationTitle: {
        ko: "아래 목록에서 중요한 소식을 확인 해보세요.",
        en: `Check out the important news from the list below.`,
        ja: `以下のリストから重要な知らせをチェックしてください.`,
        chi: `在下面的目录，请您确认一下重要的信息.`,
    },
    notificationList: {
        ko: "알림 리스트",
        en: `Notification list`,
        ja: `通知リスト`,
        chi: `通知目录`,
    },
    noNewNotificationList: {
        ko: "새로운 알림이 존재하지 않습니다.",
        en: `no new notifications.`,
        ja: `新しい通知はありません.`,
        chi: `没有新通知.`,
    },
    noMessage: {
        ko: "대화 내용이 없습니다.",
        en: `No message.`,
        ja: `メッセージなし.`,
        chi: `没有对话内容.`,
    },
    concept: {
        ko: "여행컨셉",
        en: `travel concept`,
        ja: `旅行のコンセプト`,
        chi: `旅游理念`,
    },
    category: {
        ko: "카테고리",
        en: `category`,
        ja: `カテゴリー`,
        chi: `类别`,
    },
    filter: {
        ko: "필터",
        en: `filter`,
        ja: `フィルター`,
        chi: `筛选`,
    },
    reset: {
        ko: "초기화",
        en: `reset`,
        ja: `リセット`,
        chi: `重启`,
    },
    schedule: {
        ko: "일정",
        en: `スケジュール`,
        ja: `[일]일정`,
        chi: `日程`,
    },
    price: {
        ko: "가격",
        en: `price`,
        ja: `価格`,
        chi: `价钱`,
    },
    region: {
        ko: "지역",
        en: `region`,
        ja: `エリア`,
        chi: `地区`,
    },
    rating: {
        ko: "평점",
        en: `rating`,
        ja: `評価`,
        chi: `评分`,
    },
    lang: {
        ko: "언어",
        en: `language`,
        ja: `言語`,
        chi: `语言`,
    },
    content: {
        ko: "언어",
        en: `language`,
        ja: `言語`,
        chi: `语言`,
    },
    requested: {
        ko: "요청됨",
        en: `requested`,
        ja: `要請`,
        chi: `要求了`,
    },
    noWishList: {
        ko: "위시리스트에 추가된 상품이 없습니다.",
        en: `No products have been added to your wishlist.`,
        ja: `ウウィッシュリストに追加された商品がありません.`,
        chi: `在您的愿望清单没有任何添加产品.`,
    },
    wishContent: {
        ko: "희망내용",
        en: `Desired content`,
        ja: `希望内容`,
        chi: `想要的内容`,
    },
    customTourCreateCompleted: {
        ko: "커스텀 투어 신청이 완료되었습니다.",
        en: `Your custom tour request has been completed.`,
        ja: `カスタムツアー申し込み完了しました.`,
        chi: `您的定制旅游请求已完成了.`,
    },
    memo: {
        ko: "메모",
        en: `memo`,
        ja: `メモ`,
        chi: `备忘录`,
    },
    secondBefore: {
        ko: "초전",
        en: `seconds ago`,
        ja: `秒前`,
        chi: `几秒前`,
    },
    hourBefore: {
        ko: "시전",
        en: `hours ago`,
        ja: `時間前`,
        chi: `几个小时前`,
    },
    daybeforeBefore: {
        ko: "일전",
        en: `days ago`,
        ja: `前日`,
        chi: `前一天`,
    },
    //9월 4일 전달사항
    emailFind: {
        ko: "이메일찾기",
        en: `Find Email`,
        ja: `メール検索`,
        chi: `寻找邮件`,
    },
    pwFind: {
        ko: "패스워드찾기",
        en: `Find Password`,
        ja: `暗号検索`,
        chi: `寻找密码`,
    },
    emailFindDescription: {
        ko: "핸드폰 번호로 이메일이 발송 됩니다.",
        en: `An email will be sent to your mobile number.`,
        ja: `あなたの携帯電話にメールが送信されます。`,
        chi: `邮件地址即将会到您的手机号码`,
    },
    pwFindDescription: {
        ko: "이메일로 임시 비밀번호를 보내드립니다.",
        en: `We will send you a temporary password by email.`,
        ja: `メールで臨時番号をお送りします`,
        chi: `我们将通过电子邮件向您发送一个临时密码。`,
    },
    emailSendedByPhone: {
        ko: "핸드폰 번호로 이메일이 발송 되었습니다.",
        en: `An email has been sent to your mobile number.`,
        ja: `携帯電話にメールが送信されました。`,
        chi: `把邮件地址已经发到您的手机号码了`,
    },
    pwSendedByEmail: {
        ko: "가입 하셨던 이메일로 임시 비밀번호를 발송했습니다. \n 임시 비밀번호는 일회용이니 로그인후 비밀번호를 변경하시길 바랍니다.",
        en: `A temporary password has been sent to the email you registered with. \n The temporary password is one-time only, so please change the password after logging in.`,
        ja: `登録したメールに臨時パスワードを送信しました。 臨時パスワードなので、ログインした後、パスワードを変更してください`,
        chi: `把临时密码已经发到您注册的时候写的邮件了。临时密码是一次性的，所以登录之后，请您把密码改变一下`,
    },
    tourView: {
        ko: "투어보기",
        en: `View Tour`,
        ja: `ツアーを見る`,
        chi: `看旅游商品`,
    },
    customLanguage: {
        ko: "언어 직접입력 ",
        en: `Direct input of language`,
        ja: `言語を直接入力`,
        chi: `自己直接写语言`,
    },
    emailVerificationTittle: {
        ko: "이메일 인증을 진행해주세요. ",
        en: `Please verify your email`,
        ja: `Eメール認証を進めてください`,
        chi: `请您进行一下邮件验证`,
    },
    emailVerificationDesc: {
        ko: "이메일로 보내드린 링크를 승인 하시면 됩니다.",
        en: `Please confirm the link sent to you by e-mail.`,
        ja: `メールでお送りしたリンクを承認ください`,
        chi: `把我们发给您的邮件上的链接地址，请您承认一下`,
    },
    newPassword: {
        ko: "새 비밀번호",
        en: `New password`,
        ja: `新しいパスワード`,
        chi: `新密码`,
    },
    newPasswordCheck: {
        ko: "새 비밀번호 확인",
        en: `New password confirmation`,
        ja: `新しいパスワードの確認`,
        chi: `确认新的密码`,
    },
    checkEmailAndName: {
        ko: "이메일/이름을 확인하세요.",
        en: `Please check your email/name.`,
        ja: `メール/名前を確認してください。`,
        chi: `请您确认一下邮件和名字`,
    },
    willTravel: {
        ko: "예정된 여행",
        en: `Upcoming Trip`,
        ja: `予定された旅行`,
        chi: `即将到来的旅行`,
    },
    pastTravel: {
        ko: "지나간여행",
        en: `Past Trip`,
        ja: `過ぎし旅`,
        chi: `过去的旅行`,
    },
    mainTitle: {
        ko: "이메일/이름을 확인해주세요.",
        en: `Please check your email/name.`,
        ja: `メール/名前を確認してください。`,
        chi: `请检查您的电子邮件/姓名。`,
    },
    cancelTravel: {
        ko: "취소된 여행",
        en: `Cancelled trip`,
        ja: `キャンセルされた旅行`,
        chi: `取消的行程`,
    },
    tourDiffByDateWarn: {
        ko: "투어 날짜별 내용이 조금씩 차이날 수 있습니다.",
        en: `The contents of each tour date may slightly different.`,
        ja: `ツアー日によって内容が異なる場合があります`,
        chi: `每个旅游日期的内容可能略有不同.`,
    },
    travelPolicy: {
        ko: "투어 날짜별 내용이 조금씩 차이날 수 있습니다.",
        en: `The contents of each tour date may slightly different.`,
        ja: `ツアー日によって内容が異なる場合があります`,
        chi: `每个旅游日期的内容可能略有不同.`,
    },
    personalInformationGetter: {
        ko: "개인정보수집약관",
        en: `Privacy Policy`,
        ja: `プライバシーポリシー`,
        chi: `隐私政策`,
    },
    pleaseLoginTitle: {
        ko: "로그인 후 이용해주세요.",
        en: `please try again after sign in.`,
        ja: `ログインしてからサービスを利用してください`,
        chi: `请登录后重试.`,
    },
    pleaseLoginDesc: {
        ko: "로그인 하셔야 이용하실 수 있습니다.",
        en: `You must sign in for the service.`,
        ja: `ログインしてからサービスが利用可能です`,
        chi: `您必须登录才能使用该服务.`,
    },
    bookNameIsRequired: {
        ko: "여행자의 성함은 필수 입니다.",
        en: `Traveler's name is required.`,
        ja: `旅行者の名前は必要です.`,
        chi: `旅客姓名为必填项.`,
    },
    representerContactIsRequired: {
        ko: "예약대표자의 연락처는 필수 입니다.",
        en: `Representative contact information is required.`,
        ja: `予約代表者の連絡先情報が必要です.`,
        chi: `需要代表联系信息.`,
    },
    representerBirthDateIsRequired: {
        ko: "예약대표자의 생년월일은 필수 입니다.",
        en: `The date of birth of the representative is required.`,
        ja: `予約代表者の生年月日が必要です.`,
        chi: `代表的出生日期是必需的.`,
    },
    bookerInfoCheck: {
        ko: "여행자정보 확인하기",
        en: `Check traveler information`,
        ja: `旅行者情報確認`,
        chi: `查看旅客信息`,
    },
    function: {
        ko: "기능",
        en: `function`,
        ja: `機能`,
        chi: `功能`,
    },
    tourInfo: {
        ko: "투어정보",
        en: `Tour information`,
        ja: `ツアー情報`,
        chi: `旅游信息`,
    },
    tourDate: {
        ko: "투어일",
        en: `Tour date`,
        ja: `ツアー日`,
        chi: `旅行日期`,
    },
    createdDate: {
        ko: "생성일",
        en: `created date`,
        ja: `作成日`,
        chi: `创建日期`,
    },
    proposalList: {
        ko: "받은 신청목록",
        en: `Received offer`,
        ja: `提案受付`,
        chi: `收到的您申请的目录`,
    },
    proposalListDesc: {
        ko: "가이드가 보내준 제안목록 입니다.",
        en: `List of suggestions sent by the guides.`,
        ja: `ガイドから送られた提案のリスト.`,
        chi: `导游发送的建议目录.`,
    },
    guideView: {
        ko: "가이드 살펴보기",
        en: `guide detail`,
        ja: `ガイドの詳細`,
        chi: `导游的详细信息`,
    },
    verificationEmailTitel: {
        ko: "가입하시려는 이메일 주소가 올바르다면, 아래 버튼을 클릭하여 이메일 인증을 진행해주세요.",
        en: `If the email address is correct, click the button below to verify your email..`,
        ja: `登録したいメールアドレスを確認後、以下のボタンをクリックしてメール認証を進めてください。", `,
        chi: `如果电子邮件地址正确，请单击下面的按钮以验证您的电子邮件。`,
    },
    verificationEmailSendComplete: {
        ko: "이메일로 인증링크를 발송하였습니다. 이메일을 확인 해주세요.",
        en: `A verification link has been sent to your email. please check your email.`,
        ja: `メールで認証リンクを送信しました。 メールを確認してください`,
        chi: `验证链接地址已通过电子邮件发送给您。请查看你的邮箱.`,
    },
    sendVerificationEmail: {
        ko: "이메일 인증하기",
        en: `email verification`,
        ja: `メールによる確認`,
        chi: `电子邮件验证`,
    },
    digit: {
        ko: "자리",
        en: `digit`,
        ja: `桁`,
        chi: `数字`,
    },
    numAndEnglish: {
        ko: "영문 숫자 조합",
        en: `Alphanumeric combination`,
        ja: `英数字の組み合わせ`,
        chi: `英文字母数字组合`,
    },
    BANK_TRANSFER: {
        ko: "무통장입금",
        en: `Deposit without bankbook`,
        ja: `振込み`,
        chi: `无存折存款`,
    },
    CARD: {
        ko: "카드결제",
        en: `pay by credit card`,
        ja: `クレジットカードで支払う`,
        chi: `用信用卡支付`,
    },
    PAY_PAL: {
        ko: "페이팔",
        en: `paypal`,
        ja: `paypal`,
        chi: `paypal`,
    },
    bookingHasCanceld: {
        ko: "예약을 취소하였습니다.",
        en: `reservation cancellation.`,
        ja: `予約キャンセル.`,
        chi: `预订取消了.`,
    },
    // 9/18 전달
    shopping: {
        ko: "쇼핑",
        en: `Shopping`,
        ja: `買い物`,
        chi: `购物`,
    },
    everyGuide: {
        ko: "모든가이드",
        en: `EveryGuides`,
        ja: `買い物`,
        chi: `购物`,
    },
    LanguagesOpsTitle: {
        ko: "원하시는 언어를 선택해주세요.",
        en: "Please choose a language",
        ja: "言語を選択してください",
        chi: "请您选择一下语言",
    },

    LanguagesOps: {
        ko: "언어 다중선택",
        en: "multiple language choice",
        ja: "言語多重選択",
        chi: "重复选择语言",
    },
    LanguagesBtn: {
        ko: "변경하기",
        en: "Change",
        ja: "変更",
        chi: "改变",
    },
    kpopCulture: {
        ko: "K-POP & 컬쳐",
        en: "K-POP & Culture",
        ja: "K-POP &カルチャー",
        chi: "K-POP & 文化",
    },
    travelerInfo: {
        ko: "여행자정보",
        en: "Traveler info",
        ja: "旅行者情報",
        chi: "旅客信息",
    },
    noProductInArea: {
        ko: "해당지역에 상품이 없습니다.",
        en: "There are no products in your chosen area.",
        ja: "該当地域の商品がありません",
        chi: "该地区没有旅游商品.",
    },
    write: {
        ko: "글쓰기",
        en: "Write",
        ja: "書く",
        chi: "写传栏",
    },
    writeCustomTour: {
        ko: "커스텀 투어 작성하기",
        en: "Write a custom tour",
        ja: "カスタムツアーを作成する",
        chi: "编写自己游览",
    },
    noSuggestOffer: {
        ko: "제안하신 맞춤 상품이 없습니다.",
        en: "There is no custom product you have suggested.",
        ja: "ご希望のオーダーメイド商品がありません",
        chi: "您想要的定制商品不存在。",
    },
    nightUnit: {
        ko: "박",
        en: "N",
        ja: "N",
        chi: "N",
    },

    itsguide_bank: {
        ko: "농협 351-1150-2295-63",
        en: `NH 351-1150-2295-63`,
        ja: `NH 351-1150-2295-63`,
        chi: `NH 351-1150-2295-63`,
    },
    itsguide_FAX: {
        ko: "070-4850-8788",
        en: `(+82) 070-4850-8788`,
        ja: `(+82) 070-4850-8788`,
        chi: `(+82) 070-4850-8788`,
    },
    itsguide_phone: {
        ko: "051-715-0727",
        en: `(+82) 051-715-0727`,
        ja: `(+82) 051-715-0727`,
        chi: `(+82) 051-715-0727`,
    },
    noBookedTour: {
        ko: "에약하신 투어가 없습니다.",
        ja: `データなし.`,
        en: `There are no tours booked..`,
        chi: `没有数据.`,
    },
    customTourRequestSucessed: {
        ko: "성공적으로 맞춤투어 신청이 신청 되었습니다.",
        ja: `カスタムツアーアプリケーションが正常に適用されました。.`,
        en: `Your custom tour application has been successfully applied.`,
        chi: `您的自定义游览应用程序已成功应用。.`,
    },
    enterPricePls: {
        ko: "예산을 입력 해주세요.",
        ja: `予算を入力してください。`,
        en: `Please enter your budget.`,
        chi: `请输入您的预算。.`,
    },
    reallyWantToDeleteCustomTour: {
        ko: "정말로 맞춤투어 신청을 삭제하십니까?",
        ja: `カスタムツアーアプリケーションを本当に削除していますか？`,
        en: `Are you really deleting your custom tour application?`,
        chi: `您真的要删除自定义旅游应用程序吗？`,
    },
    hourAgo: {
        ko: "시간전",
        ja: `hours ago`,
        en: `hours ago`,
        chi: `hours ago`,
    },
    minAgo: {
        ko: "분전",
        ja: `mins ago`,
        en: `mins ago`,
        chi: `mins ago`,
    },
    secAgo: {
        ko: "초전",
        ja: `seconds ago`,
        en: `seconds ago`,
        chi: `seconds ago`,
    },
    OPEN: {
        ko: "진행중",
        ja: `進行中`,
        en: `Proceeding`,
        chi: `进行中`,
    },
    ACCEPTED: {
        ko: "완료",
        ja: `完了`,
        en: `Completed`,
        chi: `完全的`,
    },
    CANCACLED: {
        ko: "취소",
        ja: `キャンセル`,
        en: `Cancel`,
        chi: `取消`,
    },
    fourUpper: {
        ko: "4점이상",
        ja: `4点以上`,
        en: `4 point up`,
        chi: `4分以上`,
    },
    only5: {
        ko: "5점",
        ja: `5点`,
        en: `5 point`,
        chi: `5分`,
    },
    selectDates: {
        ko: "날짜 선택하기",
        ja: `日付を選択`,
        en: `Choose Date`,
        chi: `选择日期`,
    },
    searchDetail: {
        ko: "상세검색",
        ja: `詳細検索`,
        en: `Search Detail`,
        chi: `高级搜索`,
    },
    searchHowAboutCustomHead: {
        ko: "원하시는 결과를 찾을 수 없나요?",
        ja: `必要な結果が見つかりませんか？`,
        en: `Can't find the results you're looking for?`,
        chi: `找不到您要找的结果？`,
    },
    searchHowAboutCustomLink: {
        ko: "원하시는 결과를 찾을 수 없나요?",
        ja: `カスタムツアーをリクエストしてみませんか？`,
        en: `How about requesting a custom tour?`,
        chi: `申请定制旅游怎么样？`,
    },
    naverPay: {
        ko: "네이버 페이",
        en: `Naver Pay`,
        ja: `Naver Pay`,
        chi: `Naver Pay `,
    },
    kakaoPay: {
        ko: "카카오 페이",
        en: `Kakao Pay`,
        ja: `Kakao Pay`,
        chi: `Kakao Pay `,
    },
    ifOverPeople: {
        ko: "예약가능한 최대인원보다 더 많은 예약을 원하시면 고객센터로 전화문의 (051-715-0727) 부탁드립니다.",
        en: `If you would like to make a reservation for more than the maximum number of people available, please call us.(051-715-0727)`,
        ja: `予約可能な最大人数よりも多くの予約をご希望の場合は、お問い合わせください。(051-715-0727)`,
        chi: `如果您想预订的人数超过最大人数，请致电我们。(051-715-0727)`,
    },
    wrongPayWarnTitle: {
        ko: "코리아가이드센터를 통하지 않은 직접 결제금지",
        en: `Direct payment not through the KoreaGuideCenter is prohibited.`,
        ja: `コリアガイドセンターを通らない直接決済禁止`,
        chi: `禁止不通过KoreaGuideCenter结账可能引起消费者的受害（现场结账，个人转账等等）`,
    },
    wrongPayWarnDesc: {
        ko: "현장 결제·개인 계좌이체 등 코리아가이드 센터를 통하지 않은 결제는 소비자 피해로 이어질 수 있으니 반드시 코리아가이드센터를 통해 예약/결제해 주세요.",
        en: `Payments that are not made through the ‘KoreaGuideCenter’, such as on-site payments and personal accounts transfer, may lead to consumer suffer, so please make a reservation/payment through the ‘KoreaGuideCenter’ website.`,
        ja: `現地決済や個人口座の振込みなど、コリアガイドセンターを経由しない決済は消費者の被害につながることがありますので、必ずコリアガイドセンターを通じて予約決済をご利用ください`,
        chi: `禁止不通过KoreaGuideCenter结账可能引起消费者的受害（现场结账，个人转账等等）`,
    },
    seeMoreProduct: {
        ko: "상품 더보기",
        ja: `続けて見る`,
        en: `see more`,
        chi: `查看更多`,
    },
    newBorn: {
        ko: "최신",
        en: `new`,
        ja: `最新`,
        chi: `最近的`,
    },
    KAKAO: {
        ko: "카카오페이",
        en: `kakao`,
        ja: `kakao`,
        chi: `kakao`,
    },
    NAVER: {
        ko: "네이버페이",
        en: `Naver`,
        ja: `Naver`,
        chi: `Naver`,
    },
    logOutCompleted: {
        ko: "로그아웃 되었습니다.",
        en: `You are logged out.`,
        ja: `ログアウトしました。`,
        chi: `您已注销。`,
    },
    profileHasChanged: {
        ko: "프로필이 변경되었습니다.",
        en: `Your profile has changed.`,
        ja: `あなたのプロフィールが変更されました。`,
        chi: `您的个人资料已更改。`,
    },
    require: {
        ko: "필수",
        en: `required`,
        ja: `必要`,
        chi: `必需的`,
    },
    isAlreadyUseNickName: {
        ko: "은 이미 생성된 닉네임 입니다.",
        en: ` is an name that has already been created.`,
        ja: `はすでに作成されているメールです。`,
        chi: `是已经创建的电子邮件。`,
    },
    isAlreadyUseEmail: {
        ko: "은 이미 생성된 이메일 입니다.",
        en: ` is an email that has already been created.`,
        ja: `はすでに作成されているメールです。`,
        chi: `是已经创建的电子邮件。`,
    },
    isAvailable: {
        ko: "은 사용 가능합니다.",
        en: ` is available`,
        ja: `利用可能です`,
        chi: `可用`,
    },
    signUpCompleted: {
        ko: "회원가입이 완료되었습니다.",
        en: ` is available`,
        ja: `利用可能です`,
        chi: `可用`,
    },
    signUpCompletedMessage: {
        ko: "회원가입이 완료되어 코리아 가이드센터의 모든 기능을 이용하실 수 있습니다. 활동하실 수 있습니다.",
        en: `You can use all the features of the Korea Guide Center. can be active after login`,
        ja: `韓国ガイドセンターのすべての機能を使用できます。ログイン後にアクティブにすることができます`,
        chi: `您可以使用韩国指南中心的所有功能。登录后可以激活`,
    },
    useAsAnonymouse: {
        ko: "비회원으로 계속하기",
        en: `Continue as a non-member`,
        ja: `非会員として継続`,
        chi: `以非会员身份继续`,
    },
    continue: {
        ko: "계속하기",
        en: `continue`,
        ja: `続ける`,
        chi: `继续`,
    },
    MiddleTextTop: {
        ko: "우리는 코리아가이드 입니다.",
        en: "We are the Korea Guide.",
        ja: "私たちはコリアガイドです。",
        chi: "我们是韩国导游。",
    },
    MiddleTextMd: {
        ko: "여행의 시작부터 끝까지 코리아가이드와 함께!",
        en: "From the beginning to the end of the trip, with the Korea Guide!",
        ja: "旅の始まりから最後までコリアガイドとともに！",
        chi: "从旅行开始到结束，与韩国导游一起！",
    },
    MiddleTextBottom: {
        ko: "가이드와 함께 대한민국 전역의 여행지에서 특별한 추억을 만들어보세요.",
        en: "Make special memories at travel destinations all over Korea with your guide.",
        ja: "ガイドと一緒に大韓民国全域の旅行先で特別な思い出を作ってみてください。",
        chi: "和导游一起在大韩民国全境旅行地制造特别的回忆吧。",
    },
    introHeaderTitle: {
        ko: (
            <span>
                모처럼 찾은 한국여행은 더욱 즐거운 여행, <br /> 더 안전한 여행,
                새롭게 한국을 발견하는
                <br /> 여행을 지향합니다.
            </span>
        ),
        en: (
            <span>
                We, KoreaGuide, support <br />
                your ‘Trip to Korea’ should be enjoyable, safe,
                <br /> and a new chance to discover Korea.
            </span>
        ),
        ja: (
            <span>
                せっかくの韓国旅が、より楽しい旅行、
                <br />
                感動のある旅行にならなければならないと思います。
            </span>
        ),
        chi: (
            <span>
                尊敬的游客们美丽的韩国旅行不仅是单纯的开心
                <br />
                是让人内心不由而觉发出强烈冲动的旅行
            </span>
        ),
    },
    introHeaderExplain: {
        ko: (
            <span>
                더욱 즐거운 한국여행. 더 안전한 한국여행, 새롭게 한국을 발견하는
                여행을 위해 각 분아별 <br />
                전문가이드들이 여러분의 여행을 서포트합니다. <br />
                여행일정에 커미션투어, 쇼핑은 처음부터 없습니다. <br />
                한국 여행 전문 프래너들과 프리미엄 가이드들이 자신의 재능을
                발휘하여 프라이빗 여행. <br />
                로컬여행, 리얼한 한국을 경험해 보시기 바랍니다.
            </span>
        ),
        en: (
            <span>
                Let ‘KoreaGuide’ start a special trip focused on the visitors
                to Korea <br />
                to provide both exiting fun and deep impression.
                <br /> The travel schedule has no commission shopping from the
                beginning to the end.
                <br /> Korean travel planners and professional premium guides
                are
                <br /> always waiting for you, hoping to experience the pleasure
                of private travel <br />
                in Korea that suits your own purpose and taste.
            </span>
        ),
        ja: (
            <span>
                新しいあたらしいく韓国を発見できる旅行
                <br />
                韓国を訪ねてくださった貴重なお客様の同伴者として、
                <br />
                楽しくて感動で残る旅行となるために お客様が
                <br />
                中心となるツアーを「コリアガイド」が始めます。
                <br />
                旅行日程に、コミッションツアーのショッピング日程は初めからありません。
                <br />
                韓国旅行専門プランナーと専門プレミアムガイドをが用意されております。
                <br />
                自分の旅行の目的、お好みに合わせたプライベート旅行,
                <br />
                オーダーメイド旅行の楽しさを韓国で体験してみてください。
            </span>
        ),
        chi: (
            <span>
                欢迎各位尊敬的游客们  来韩国旅游   <br />
                为了能给游客们留下即有意义和美好深刻的回忆旅行 <br />  "Korea
                guide"特别为游客们 设计了唯我中心的旅游行程的光观. <br />
                游客们可自行选择喜欢或是爱好的光观地  可在韩国本土体验
                韩国的传统文化 美食 人文社会  还可 欣赏韩国美丽的本土山水等.{" "}
                <br />
                我们旅行社从来不要求游客强行购物   <br />
                我们旅行社为了接待尊贵游客们的行程 <br />
                我们准备好了专业的旅游行程规划和优秀的导游会为尊贵的游客们提供最优质的服务.
            </span>
        ),
    },
    introCompany: {
        ko: (
            <span>
                단순한 정보는  구글등 웹사이트만으로도 충분합니다. <br />
                사람의 여행에 통역 앱, 지도 앱, AI의 안내만으로는 소통, 체험,
                교류등 궁극의 여행에 다 다를수 없습니다.
                <br />
                ‘KoreaGuide’에서는 여러 가지 형태의 여행을 위해 전원이 국가고시
                자격취득 전문 지식가이드가 안내합니다.
                <br />
                이제 한국여행도 'Korea Guide'를 선택하시면 <br /> 획일적인 여행,
                커미션베이스의 쇼핑과 옵션투어에서 벗어날 수 있습니다. <br />
                여행사가 가이드를 랜덤으로 배정하는 구조가 아닌 방문 목적,
                취향중심의 맞춤 서비스로
                <br />
                지금까지의 패키지투어 가이드와는 다른 프리미엄 가이드투어를
                경험해 보시기 바랍니다.
                <br /> 저렴하지는 않습니다. 그러나 그만큼 가치가 있는 여행이 될
                것 입니다.
                <br />
                더 다양하게 행복한 세상을 위해 개인의 취향이 존중받고
                <br />
                여행의 다름을 인정받기 위해 다양한 한국여행을 만드는 회사
                'KoreaGuide'입니다.
            </span>
        ),
        en: (
            <span>
                For the simple information, a Web (e.g. Google or Naver) is
                enough. <br />
                However, for the interpretation, maps, AI guidances, it is not
                enough.
                <br />
                In ‘KoreaGuide’, professional guides certified by national
                license will guide you.
                <br />
                We, ‘KoreaGuide’ support your trip to Korea should be more
                enjoyable and inspiring.
                <br />
                As a companion of precious visitor to Korea, we will start a
                traveler-oriented tour. <br />
                Now, if you choose the 'KoreaGuide' for the travel, you can be
                free from the cliche tour, commission-based shopping and
                optional tours.
                <br />
                Let’s try a premium guided tour different from the previous
                package tours:A structure in which a travel agency sells,
                recruits clients and passes it to a local land company assigning
                a guide.\nOurs are not cheap. But it will be worthwhile to
                travel.
                <br />
                <br />
                We, 'KoreaGuide', are a company that makes various tours to
                Korea and creates a more diverse world where everyone’s
                differences are recognized and individual tastes are respected.
                <br />
                <br />
            </span>
        ),
        ja: (
            <span>
                単純解説は、グーグルなどウェブサイトの情報だけでも十分です。
                <br />
                でも、旅行に通訳アプリ、地図アプリ、
                <br />
                AIの案内だけでは物足りないのです(さびしいです)。 <br />
                「Korea
                Guide」では、韓国の文化解説と現地ローカル体験専門旅行のため、
                <br />
                すべての会員が(ガイドが)、国家試験資格取得の専門知識ガイドがご案内します。
                <br />
                せっかく訪れた韓国旅行を、より楽しい旅行、アクティブな旅行(感動の旅)にするために、
                <br />
                韓国を訪ねてくださった貴重なお客様の同伴者として、面白くて感動的な、
                <br />
                また、思い出に残る旅行にするために、お客様が行ってみたい、体験したい、
                <br />
                食べてみたいという思いをかなえるためのツアーを「コリアガイド」で、始めてみましょう。?
                <br />
                もし、韓国旅行を'Korea
                guide'選択したら画一的な旅行、コミッションベースのショッピングとオプショナルツアーから抜け出しましょう。
                <br />
                旅行日程とコミッションベース買い物は最初からありません。
                <br />
                旅行代理店が販売して、代理店が集客して現地の旅行社で配定した(割り当てられた)現地ガイドが、
                <br />
                決まったコースを案内する(フレームから離れてみましょう。)
                これまでの一般パッケージツアーガイドとは違うプレミアムガイドツアーをご体験ください。
                <br />
                安くはありません。
                しかし、その価値を感じることができる素敵な旅行になるでしょう。
                <br />
                より多様な幸せな世の中のために、個人の好みが尊重されなければならず、
                <br />
                今までの旅とは違いを感じてもらうために、多様な韓国旅行を作るする会社「Korea
                guide」です。
            </span>
        ),
        chi: (
            <span>
                单纯信息从谷歌等网站上也可以获得。
                <br />
                人在旅行中，仅靠翻译软件，地图应用程序，人工智能的指南就显得空荡荡的。
                <br />
                （枯燥无味） 在“Korea
                guide”中连接人与人，为了进行韩国的文化解说和当地体验，
                <br />
                全员由通过国家考试资格获取专业知识导游带路。
                <br />
                我认为大家抽空来到的韩国旅行应该成为更加愉快的旅行和感动的旅行。
                <br />
                作为访问韩国的贵宾们的伴侣，为了更有趣更安全的旅行
                作为前来韩国旅行的贵宾们的伴侣，
                <br />
                Korea
                guide将为您实现您想去的、想体验的、想去吃的、有趣、感动的安全旅行。
                <br />
                为了人与人一起旅行，“Korea guide”来开始以游客为中心的旅行。
                <br />
                现在韩国旅行也选择'korea
                guide’，就可以摆脱单一的旅行和佣金为基础的选择观光或购物观光。
                <br />
                在旅行日程中，从一开始就没有佣金基础上的购物。
                <br />
                请您摆脱旅行社销售，在代理店招揽游客到当地旅行社，还有被分配的导游引导的单一（显而易见的日程）日程（脱离框架）趋势，体验一下与之前的旅游指南不同的，本公司优质导游之旅。
                <br />
                我们旅行社商品不便宜，但这将会成为能够感受到其价值的精彩旅行。
                <br />
                我们认为为了更加多样幸福的世界，个人喜好应该得到尊重。
                <br />
                为了获得认可旅行的与众不同，打造多样韩国旅行的公司"Korea
                guide"。
            </span>
        ),
    },
    introGuideTour: {
        ko: (
            <span>
                역사를 좋아하는데 쇼핑 얘기만 하는 <br />
                가이드가 담당하면 어떨까요?
                <br /> 쇼핑을 좋아하는데 역사 얘기만 하는 <br /> 여행 지루하지
                않을까요?
                <br /> 한국 로컬여행과 체험은 어려워요
                <br />
                쉽게, 간단하게 갈수는 없나요?
                <br />
                한국여행의 시작부터 끝까지 전문가이드가 <br />
                직접 기획, 안내를 전담하는 ‘현지가이드투어’입니다. <br />
                현지 가야만 느낄 수 있는
                <br /> 리얼한 한국로컬여행,
                <br /> 현지인에게도 인기있는 <br />
                한국 도시 명소 여행, <br />
                여행자 중심 여행을 <br /> 만끽하시기 바랍니다.
            </span>
        ),
        en: (
            <span>
                You like history, <br />
                but have you ever experienced <br />a tour in charge of a guide
                who <br />
                only talks about shopping? <br />
                You like shopping,
                <br /> but have you ever been tired of <br />
                your whole trip just because
                <br /> they talked about history? <br />
                How can I go to experience a Korean local travel?
                <br /> Every kind of ‘local guide tour’ is <br />
                prepared by an expert guide who <br />
                is in charge of planning and <br />
                guiding from the beginning <br />
                to the end of the Korean tour.
                <br /> The money to be paid in the destination is <br />
                indicated on the travel product.
                <br /> Rejoice your own trip to Korean local tour <br />
                with the humanities.
            </span>
        ),
        ja: (
            <span>
                歴史が好きなのに、 <br />
                ショッピングの話ばかりするガイドが担当したことはありませんでしたか？{" "}
                <br />
                ショッピングが好きなのに、
                <br />
                歴史の話ばかりで旅行が始終退屈だったことはなかったですか?
                <br />
                韓国ローカルツアーと、
                <br />
                ローカル体験プログラムはどうやって行けますか?
                <br />
                韓国旅行の始まりから終わりまで、 専門ガイドが直接企画、
                <br />
                案内を担当する「現地ガイドツアー」が用意されております。
                <br />
                旅行商品に、
                <br />
                お客様の現地でお支払いいただく金額を表記しております。
                <br />
                現地へ行ってはじめて感じられるローカル旅行、
                <br />
                専門ガイドが解釈してくれる韓国の文化や歴史を知ることができる旅行。
                <br />
                お客様が求める旅行を満喫してください。
            </span>
        ),
        chi: (
            <span>
                是不是 游客们对韩国的历史特别感兴趣
                <br />
                但是导游只给游客们讲购物的的事情呢? <br />
                是不是游客喜欢购物 <br />
                但是 导游只讲韩国历史 <br />
                所以感到 旅行很乏味没有意思呢? <br />
                尊敬的游客您们
                <br /> 觉得美丽而匆满活力的韩国本土旅游怎么开始好呢?
                <br />
                我们旅行社从旅游的开始到结束
                <br />  都是专业规划和引导游客们提供
                <br />
                韩国本土观光旅行提供优质的服务. <br />
                在旅游商品中  我们记载了 <br />
                游客要支付的所有金额  <br /> 这样才能到美丽的韩国本土 <br />
                体验和光观   那里有专业的观光导游会为游客们介绍韩国本土
                传统文化和旅行.
            </span>
        ),
    },
    introGuideTourText: {
        ko: "가이드 여행",
        en: `Guide Tour`,
        ja: "ガイドツアー",
        chi: "当地导游旅行",
    },
    introPackageText: {
        ko: "패키지 여행",
        en: `Package Tour`,
        ja: "パッケージ旅行",
        chi: "包干旅行",
    },
    introCustomText: {
        ko: "커스텀 여행",
        en: `Custom Tour`,
        ja: "カスタム旅行",
        chi: "定制旅行",
    },
    theYear_2020: {
        ko: "2020년",
        en: "2020 Year",
        ja: "2020年",
        chi: "2020年",
    },
    theYear_2021: {
        ko: "2021년",
        en: "2021 Year",
        ja: "2021年",
        chi: "2021年",
    },
    theYear_2022: {
        ko: "2022년",
        en: "2022 Year",
        ja: "2022年",
        chi: "2022年",
    },
    introPackage: {
        ko: (
            <span>
                획일적 패턴의 일정, 쇼핑커미션과 옵션으로 <br />
                채워진 관습적 여행구조에서 벗어나 <br />
                개별 여행의 자유로움과 패키지여행의 편리함을
                <br /> 모두 담았지만 <br />
                단순하게 결합한 것이 아닌 <br />
                한국 여행 전문 플래너들의 기획과
                <br />
                전문 가이드들이 안내해 드리는
                <br />
                한국의, 명소, 테마로, 맛집으로 체험으로 즐길 수 있는
                <br /> '패키지투어'는 어떠실까요~
            </span>
        ),
        en: (
            <span>
                Break away from the old customary travel structure
                <br /> filled with the same schedule,
                <br /> shopping commissions and unwanted options! <br />
                With the schedule for a client-oriented trip,
                <br /> we are ready to start the ‘package tour’ <br />
                that you can enjoy with famous restaurants,
                <br /> various themes, and activities. <br />
                The money that <br /> the traveler has to pay <br /> on the
                destination is specified on the travel product. <br /> Combining
                the freeness of individual travel
                <br /> and the convenience of package travel, <br />  it is not
                a simply combined travel.
                <br /> Planners and professional guides specializing
                <br /> in the travel to Korea will guide you.
            </span>
        ),
        ja: (
            <span>
                今までのパッケージが画一的な日程.
                <br />
                ショッピングコミッションとオプションなどで組まれた、
                <br />
                パターンのようにパッケージ旅行がほとんでしたら、
                <br />
                お客様中心の内容として 場所、テーマ、
                <br />
                グルメなどを楽しむことができる'ツアー'はいかがでしょうか~
                <br />
                旅行商品には、お客様が現地でお支払いいただく金額を表記しております。
                <br />
                個別旅行の自由(リベラル)と、
                <br />
                パッケージ旅行の利便さを、
                <br />
                兼ね備えた韓国旅行専門プランナーに
                <br />
                よる企画と専門ガイドがご案内いたします。
            </span>
        ),
        chi: (
            <span>
                到目前为止，在套餐中规定的日程中，
                <br />
                大部分都是以购物和旅行方式填充佣金基础的购物和选择，
                <br />
                但从现在开始，以游客为中心，可以享受场所，主题，美食巡游等的旅行怎么样？
                <br />
                摆脱旅行结构，以游客为中心的旅行日程，准备了可作为美食店，
                <br />
                主题旅行，体验观光等为中心的跟团游。
                <br />
                包含个人旅行的自由和旅行的便利性，但并非简单结合,
                <br />
                而是由韩国旅行专家策划，并由专业导游为您介绍
            </span>
        ),
    },
    introCustom: {
        ko: (
            <span>
                '커스텀투어'로 여행지 일정, 목적 취향을 주문하면
                <br /> 전문 가이들이 제안서를 받아볼 수 있습니다. <br />
                프라이빗 여행을 할 수 있습니다. <br />
                내가 원하는 날짜에, 나의 비지니스를 위해 <br />
                지역의 특색을 탐험하기위해 <br />
                선택할 수 있습니다. <br />
                현지 전문 가이드의 서포트를 당신에게 <br />
                포커스를 맞춘 프라이빗 여행을 경험해 보시기 바랍니다.
            </span>
        ),
        en: (
            <span>
                You can travel privately on the date
                <br /> you want, eat the food you want, <br />
                and take only the trip you want to go on.
                <br /> In addition, you can experience a customized tour <br />
                where you can get high level of explanation, guidance,
                <br /> and new inspiration during the trip. <br />
                Experience a tour focused on you
                <br /> with the support of a professional local guide.
            </span>
        ),
        ja: (
            <span>
                私が旅行したいときに、好きなものを食べ、行ってみたかった所に行く、私だけのための（プライベート）旅行ができます(旅行を楽しめます)。
                <br />
                さらに、旅行を通じて、新しい発見や事なる解説や案内、新たなインスピレーションを得ることができる「カスタムツアー」を
                経験してみてください。経験してみてはいかがでしょうか。(?!)
                <br />
                現地では、明るい(詳らかな)ガイドのサポートで旅行にフォーカスを合わせた皆さんが中心となる旅行をご(経)験ください.
                <br />
                あなた（私たち、皆さん）にフォーカスを合わせた旅行を経験してみてください。
            </span>
        ),
        chi: (
            <span>
                在我想去的日期，吃我想吃的食物，只装上我想去的旅行地，
                <br />
                我们就可以独自去（私人）旅行。
                <br />
                同时通过旅行可体验到新发现，品味不同的解说和指引，
                <br />
                获得新灵感的"Custom Tour"定制型旅游。 <br />
                （体验一下怎么样？） 以当地（当地专业）导游的support，
                <br />
                可享受安心快乐的旅行。 请体验一下为您定制的旅行
            </span>
        ),
    },
    introEveryYear: {
        ko: "매년",
        en: "Per Year",
        ja: "毎年",
        chi: "每年",
    },
    introPeople: {
        ko: "명",
        en: "people",
        ja: "人",
        chi: "人",
    },
    introNationWide: {
        ko: "전국",
        en: "Global",
        ja: "全国",
        chi: "战国",
    },

    introTourNumber: {
        ko: "전문가이드 수",
        en: "Expert Guides",
        ja: "専門家の数",
        chi: "专家人数",
    },
    introGuideNumber: {
        ko: "서비스 카테고리",
        en: (
            <span>
                Service
                <br /> Category
            </span>
        ),
        ja: "サービスカテゴリ",
        chi: "服务类别",
    },
    introTourNumberzz: {
        ko: "",
        en: "",
        ja: "",
        chi: "",
    },
    introCompanyHistory: {
        ko: "회사연혁",
        en: `Company History`,
        ja: `会社沿革`,
        chi: `公司沿革`,
    },
    introCompanyHistory2020_1: {
        ko: "코리아가이드센터 설립",
        en: `Established under the name of ‘KoreaGuideCenter`,
        ja: `コリアガイドセンター設立`,
        chi: `设立「Korea　guide」中心`,
    },
    introCompanyHistory2020_2: {
        ko: "자유 개별여행 가이드를 위한 부산 가이드대상 설명회 개최",
        en: `Hold a briefing session for the FIT guides  in Busan`,
        ja: `自由個別旅行ガイドのための、釜山ガイド対象説明会開催`,
        chi: `设立「Korea　guide」中心`,
    },
    introCompanyHistory2020_3: {
        ko: "자유 개별여행 가이드를 위한 전국 가이드대상 ON. OFF 라인 동시 설명회 개최",
        en: `Hold a briefing session for the FIT guides in nation-wide both on and off line`,
        ja: `自由個別旅行ガイドのための、全国ガイド対象ON.OFFライン同時説明会開催`,
        chi: `为了自由私人旅行导游，举办釜山导游说明会`,
    },
    introCompanyHistory2020_4: {
        ko: "자유 개별여행 가이드를 위한 블러그 운영등 심화교육 개최",
        en: `Hold in-depth education such as blog operation for the FIT guides`,
        ja: `自由個別旅行ガイドのための、ブログ運営などの補修教育開催`,
        chi: `为了自由私人旅行导游，举办运营博客等深化教育`,
    },

    introCompanyHistory2021_1: {
        ko: "제주 가이드대상  교육 및 플랫폼 설명회 개최",
        en: `Hold company platform briefing and education session for the Jeju guides`,
        ja: `済州ガイド対象の、教育および説明会開催`,
        chi: `举办济州导游教育或平台说明会`,
    },
    introCompanyHistory2021_2: {
        ko: "소그룹 자유여행기획투어 개발 자체공모전 시행",
        en: `Executed a in-company contest for FIT planning & development`,
        ja: `小グループの自由旅行企画ツアー開発、独自公募展実施`,
        chi: `实行小集团自由旅行计划旅游开发自主征集展`,
    },
    introCompanyHistory2021_3: {
        ko: "한국관광공사 주최 랜선투어 공모전 합격",
        en: `Won the prize of the Online Tour Contest hosted by Korea Tourism Organization`,
        ja: `韓国観光公社主催のLAN線ツアー公募展に合格`,
        chi: `韩国观光公社举办的网上旅行征集展合格`,
    },
    introCompanyHistory2021_4: {
        ko: "랜선투어 실행 영어. 인니어",
        en: `Run Online tour in English and Indonesian`,
        ja: `LAN線ツアー実行英語,ハングル素材のハングル道ツアー開発。インニアー`,
        chi: `实行网上旅行 （英语，印度尼西亚语）`,
    },
    introCompanyHistory2021_5: {
        ko: "경남 함안군 지원 로컬여행상품 개발 가이드 투어",
        en: `Explored the Local Tour Course of Gyeongnam Haman for foreigners with guides   supported by Haman county government office with guides`,
        ja: `ガイドたちと一緒に、慶尚南道咸安（キョンサンナムド·ハムアン）踏査`,
        chi: `观光导游一起考察庆尚南道咸安`,
    },

    introCompanyHistory2021_6: {
        ko: "로컬여행개발 외국인들대상 모니터투어 시행",
        en: `Conducted monitoring tour of Gyeongnam Haman for foreigners`,
        ja: `ローカル旅行開発、外国人を対象にモニターツアー実施`,
        chi: `为了开发本地旅行，以外国人为对象实行当地旅行`,
    },
    introCompanyHistory2021_7: {
        ko: "한국관광공사 ICT공모전 합격",
        en: `Korea Tourism Organization ICT Competition Passed`,
        ja: `韓国観光公社ICTコンペティションに合格`,
        chi: `韩国观光公社ICT竞赛通过`,
    },
    introCompanyHistory2022_1: {
        ko: "가이드대상 대구시 지원 메디컬 상품 기획 개발 팸투어",
        en: `Guide Target Daegu City Support Medical Product Planning and Development Familiar Tour`,
        ja: `ガイド対象大邱市支援医療製品企画・開発おなじみツアー`,
        chi: `Guide Target 大邱市支援医疗产品企划开发 熟悉之旅`,
    },
    selectStartDate: {
        ko: "출발일 선택하여 여행하기",
        en: `Choose a departure date to travel`,
        ja: `旅行する出発日を選択してください`,
        chi: `选择出发日期旅行`,
    },
    selectDateIsTravelingDate: {
        ko: "날짜 기준은 출발일 입니다.",
        en: `The date is the departure date.`,
        ja: `日付は出発日です。`,
        chi: `日期为出发日期。`,
    },
    noTourDateIsAvailable: {
        ko: "해당 날짜에는 투어가 없습니다.",
        en: `There are no tours on that date.`,
        ja: `その日に商品はありません。`,
        chi: `该日期没有产品。`,
    },
    seeMoreAboutGuide: {
        ko: "프로필 보기",
        en: `Profile`,
        ja: `Profile`,
        chi: `Profile`,
    },
    tourTitleSubTitle: {
        ko: "한국을 찾아주신 귀한 손님들의 동반자로써 재능있는 가이드가 제공하는 <br> 풍부한 정보와 함께 진정한 경험과 감동으로 남는 현대 여행자에게 적합한 서비스를 <br> ‘코리아가이드‘가 시작 하겠습니다.",
        en: "As a companion to the precious guests who came to Korea <br> Real experience and emotion with abundant information talented guides will provide services suitable <br> for modern travelers who are 'Korea Guide' will travel with you. ",
        ja: "韓国を訪れた貴重なお客様の同伴者として、様々な専門ガイドが提供する豊<br> 富な情報とともに真の経験と感動で残る現代旅行者に適したサービスを <br>'コリアガイド'が始めます.",
        chi: "Koreaguide作为来到韩国的贵宾的伙伴,为了体验专业导游提供的丰富信息和真<br>正的感动,将提供适合现代旅行者的服务",
    },
    everyGuideHasLicense: {
        ko: "(전원 관광안내통역사 자격증 보유)",
        en: "(all guides possess national certified Tourism interpreter guide certificate)",
        ja: "(全員国家観光通訳案内士資格保有)",
        chi: "(全员持有国家观光翻译导游资格证)",
    },
    guideNotFoundInArea: {
        ko: "해당 지역에 가이드가 없습니다.",
        en: `No guide in that region.`,
        ja: `No guide in that region.`,
        chi: `No guide in that region.`,
    },
    verification: {
        ko: "인증하기",
        en: `certification`,
        ja: `認証`,
        chi: `认证`,
    },
    bestGuideTitle: {
        ko: "추천 가이드",
        en: `Best Guides`,
        ja: `Best Guides`,
        chi: `Best Guides`,
    },
    bestSubGuideTitle: {
        ko: "코리아 가이드센터 추천 가이드들 입니다.",
        en: `These are guides recommended by the Korea Guide Center.`,
        ja: `コリアガイドセンターおすすめガイドです。`,
        chi: `这些是韩国指南中心推荐的指南。`,
    },
    mianGuideLineTitle2: {
        ko: "스페셜가이드",
        en: `Special Guides`,
        ja: `特別ガイド`,
        chi: `特别指南`,
    },
    mianSubGuideLineTitle2: {
        ko: "코리아 가이드센터의 가이드들을 만나보세요.",
        en: `Meet the guides at the Korea Guide Center.`,
        ja: `韓国ガイドセンターのガイドに会いましょう。`,
        chi: `在韩国导游中心与导游会面。`,
    },
    regionGuideTitle: {
        ko: "지역의 투어를 만나보세요.",
        en: `Choose a local tour.`,
        ja: `ローカルツアーを選択してみましょう`,
        chi: `选择当地旅游.`,
    },
    regionGuideDescribe: {
        ko: "지역 전문 가이드들을 만나보세요.",
        en: `Meet local guides.`,
        ja: `地域のガイドに会いましょう。`,
        chi: `与当地导游会面。`,
    },
    bookFind: {
        ko: "예약조회",
        en: `Book Search`,
        ja: `予約照会`,
        chi: `预订查询`,
    },
    bookFindTitle: {
        ko: "예약조회",
        en: `Book Search`,
        ja: `予約照会`,
        chi: `预订查询`,
    },
    bookFindDescription: {
        ko: "비회원 예약조회 입니다. 회원님은 로그인 하신후 내예약 부분에서 확인 하실 수 있습니다.",
        en: `This is a non-member reservation inquiry. Members can check in My Reservation after logging in.`,
        ja: `非会員予約照会です。あなたはログインしてから私の予約部分で確認することができます。`,
        chi: `这是非会员预订查询。会员登录后可在“我的预订”中查看。`,
    },
    mainCityTour: {
        ko: "지역별 투어",
        en: "Regional Tour",
        ja: "地域別ツアー",
        chi: "各地旅游",
    },
    mainLatestTour: {
        ko: "최신 투어",
        en: "Latest Tour",
        ja: "最新ツアー",
        chi: "最新巡演",
    },
    mainLocalGuides: {
        ko: "지역별 가이드",
        en: "Guides by Region",
        ja: "地域別ガイド",
        chi: "各地导游",
    },
    mainRecommendGuides: {
        ko: "추천 가이드",
        en: "Recommended Guide",
        ja: "おすすめガイド",
        chi: "推荐指南",
    },
    profileAboutMe: {
        ko: "자기 소개",
        en: "Introduce",
        ja: "自己紹介",
        chi: "自我介绍",
    },
    profileGuideArea: {
        ko: "활동지역",
        en: "Main Area",
        ja: "主な活動地域",
        chi: "主要活动地区",
    },
    profileCategory: {
        ko: "카테고리",
        en: "Category",
        ja: "カテゴリー",
        chi: "范畴",
    },
    locationalGuidePopularGuide: {
        ko: "인기 가이드",
        en: "Popular Guides",
        ja: "人気ガイド",
        chi: "热门导游",
    },
    aboutKoreaGuide: {
        ko: "코리아 가이드",
        en: "Korea Guide",
        ja: "コリアガイド",
        chi: "韩国导游",
    },
    aboutKoreaGuideDetail: {
        ko: "자세히 알아보기",
        en: "Show More",
        ja: "詳しく調べる",
        chi: "详细了解",
    },
    aboutKoreaGuideAmazingCities: {
        ko: "대한민국의 놀라운 도시들",
        en: "Amazing Cities in Korea",
        ja: "大韓民国の驚くべき都市",
        chi: "韩国惊人的城市",
    },
    aboutKoreaGuideHighTour: {
        ko: "현지 가이드와 함께하는 최고급 투어",
        en: "Top-of-the-line tour with local guides",
        ja: "現地ガイド付きの最高級ツアー",
        chi: "与当地导游一起进行的最高级旅行",
    },
    aboutKoreaGuideTop: {
        ko: "모처럼 찾은 한국여행 더욱 즐거운 여행, 더 안전한 여행, 새롭게 한국을 발견하는 여행을 지향합니다.",
        en: "We aim for a more enjoyable trip to Korea, a safer trip, and a new trip to Korea.",
        ja: "せっかく訪れた韓国旅行、より楽しい旅行、より安全な旅行、新たに韓国を発見する旅行を目指します。",
        chi: "好不容易找到的韩国旅行指向更愉快的旅行、更安全的旅行、新发现韩国的旅行。",
    },
    aboutKoreaGuideBottom: {
        ko: "더욱 즐거운 한국여행 더 안전한 한국여행 새롭게 한국을 발견하는 여행을 위해 각 분야별 전문 가이드들이 여러분의 여행을 서포트 합니다. 여행일정에 커미션투어, 쇼핑은 처음부터 없습니다. 한국 여행 전문 프레너들과 프리미엄 가이드들이 자신의 재능을 발휘하여 프라이빗 여행, 로컬 여행, 리얼한 한국을 경험해 보시기 바랍니다.",
        en: "For a more enjoyable trip to Korea, a safer trip to Korea, and a trip to discover new Korea, professional guides in each field support your trip. There is no commission tour or shopping in the itinerary from the beginning. I hope that Korean travel professionals and premium guides will use their talents to experience private travel, local travel, and real Korea.",
        ja: "より楽しい韓国旅行、より安全な韓国旅行、新たに韓国を発見する旅行のために、各分野の専門ガイドが皆様の旅行をサポートしています。 旅行日程にコミッションツアー、ショッピングは初めからありません。 韓国旅行専門のプレナーとプレミアムガイドが自分の才能を発揮してプライベート旅行、ローカル旅行、リアルな韓国を体験してみてください。",
        chi: "为了更愉快的韩国旅行、更安全的韩国旅行、新发现韩国的旅行,各领域的专业导游将支持各位的旅行。 旅行日程上没有佣金旅行和购物。 希望韩国旅行专门记者和高级导游发挥自己的才能,体验私人旅行、当地旅行、真实的韩国。",
    },
    footerCities: {
        ko: "도시",
        en: "Cities",
        ja: "都市",
        chi: "城市",
    },
    footerServices: {
        ko: "서비스",
        en: "Services",
        ja: "サービス",
        chi: "服务",
    },
    SNSYoutube: {
        ko: "코리아 가이드 유튜브",
        en: "Korea Guide Youtube",
        ja: "コリアガイドユーチューブ",
        chi: "韩国导游YouTube",
    },
    youtubeSubscribe: {
        ko: "구독하기",
        en: "Subscribe",
        ja: "購読",
        chi: "订阅",
    },
    SNSInstagram: {
        ko: "코리아 가이드 인스타그램",
        en: "Korea Guide Instagram",
        ja: "コリアガイドインスタグラム",
        chi: "韩国导游Instagram",
    },
    instaFollow: {
        ko: "팔로우",
        en: "Follow",
        ja: "フォロー",
        chi: "关注",
    },
    citySeoul: {
        ko: "서울",
        en: "Seoul",
        ja: "ソウル",
        chi: "首爾",
    },
    cityIncheon: {
        ko: "인천",
        en: "Incheon",
        ja: "インチョン",
        chi: "仁川",
    },
    cityBusan: {
        ko: "부산",
        en: "Busan",
        ja: "プサン",
        chi: "釜山",
    },
    cityDaegu: {
        ko: "대구",
        en: "Daegu",
        ja: "テグ",
        chi: "大邱",
    },
    cityUlsan: {
        ko: "울산",
        en: "Ulsan",
        ja: "ウルサン",
        chi: "蔚山",
    },
    cityDaejeon: {
        ko: "대전",
        en: "Daejeon",
        ja: "テジョン",
        chi: "大田",
    },
    cityJeju: {
        ko: "제주",
        en: "Jeju",
        ja: "チェジュド",
        chi: "济州道",
    },
    cityGwangju: {
        ko: "광주",
        en: "Gwangju",
        ja: "クァンジュ",
        chi: "广州",
    },
    citySejong: {
        ko: "세종",
        en: "Sejong",
        ja: "世宗市",
        chi: "世宗",
    },
    cityGyeonggi: {
        ko: "경기도",
        en: "Gyeonggi-Do",
        ja: "京畿道",
        chi: "京畿道",
    },
    cityGangwon: {
        ko: "강원도",
        en: "Gangwon-Do",
        ja: "江原道",
        chi: "江原道",
    },
    cityNorthChungCheon: {
        ko: "충청북도",
        en: "Chungcheongbuk-Do",
        ja: "忠清北道",
        chi: "忠清北道",
    },
    citySouthChungCheon: {
        ko: "충청남도",
        en: "Chungcheongnam-Do",
        ja: "忠清南道",
        chi: "忠清南道",
    },
    cityNorthGyeonSang: {
        ko: "경상북도",
        en: "Gyeonsangbuk-Do",
        ja: "慶尚北道",
        chi: "慶尚北道",
    },
    citySouthGyeonSang: {
        ko: "경상남도",
        en: "Gyeonsangnam-Do",
        ja: "慶尚南道",
        chi: "慶尚南道",
    },
    cityNorthJeonla: {
        ko: "전라북도",
        en: "Jeonlabuk-Do",
        ja: "全羅北道",
        chi: "全羅北道",
    },
    citySouthJeonla: {
        ko: "전라남도",
        en: "Jeonlanam-Do",
        ja: "全羅南道",
        chi: "全羅南道",
    },
    findGuidesTitle: {
        ko: "파트너 가이드를 찾습니다.",
        en: "Locate the Partner Guide.",
        ja: "パートナーガイドを探します。",
        chi: "寻找合作伙伴指南。",
    },
    findGuidesDesc: {
        ko: "Korea Guide Center는 전 세계의 현명한 여행자와 연결 할 수 있는 무한한 가능성을 열어줍니다. 투어 가이딩은 신선한 공기를 마시며 사랑하는 그 지역을 거닐며, 그 지역여행을 즐기는 사람들과 매혹적인 지역의 문화, 역사 와 즐거움 발견하는 동시에 전 세계 사람들과 공유할 수 있는 가장 보람 있고 즐거움을 선사합니다. 도시와 그 역사에 대해 깊은 관심과 스토리텔링에 대한 소질, 매력적이고 재미있는 방식으로 정보를 전달할 수 있는 능력을 Korea Guide Center에서 펼쳐 보시기 바랍니다. Korea Guide Center와 함께 가이드님의 여행을 홍보하세요. 우리는 당신의 지역을, 여행을 세계와 공유할 것입니다!",
        en: "The Korea Guide Center opens up endless possibilities for connecting with smart travelers around the world. Tour Guiding takes a stroll through the area, breathing fresh air, discovering the culture, history and enjoyment of the area and its fascinating local culture, history, and enjoyment, while providing the most rewarding and enjoyable experience to share with people around the world. We invite you to develop your deep interest in cities and their history, your talent for storytelling, and your ability to deliver information in an attractive and interesting way at the Korea Guide Center. Promote your trip with the Korea Guide Center. We will share your region, travel with the world!",
        ja: "KoreaGuideCenterは、世界中の賢明な旅行者と繋がる無限の可能性を切り開きます。 ツアーガイドは新鮮な空気を吸いながら愛するその地域を歩き、その地域旅行を楽しむ人々と魅惑的な地域の文化、歴史と楽しさを発見すると同時に、世界中の人々と共有できる最もやりがいのある楽しさをお届けします。 都市とその歴史について深い関心とストーリーテリングに対する素質、魅力的で面白い方法で情報を伝える能力をKoreaGuideCenterで広げてみてください。 KoreaGuideCenterと一緒にガイドさんの旅行を広報してください。 私たちはあなたの地域を、旅行を世界と共有します！",
        chi: "Korea Guide Center为连接全世界明智的旅行者提供了无限的可能性。 导游可以呼吸新鲜空气,漫步于心爱的那个地区,与喜欢旅行的人一起发现迷人的地区文化、历史和快乐,同时带来与全世界人民共享的最有意义和快乐。 请在Korea Guide Center上展开对城市及其历史的深切关心和对讲故事的素质,以有魅力、有趣的方式传达信息的能力。 请与Korea Guide Center一起宣传导游的旅行。 我们将与世界分享您的地区，旅行！",
    },
    findGuidesButton: {
        ko: "가이드 지원하기",
        en: "To register a Guide",
        ja: "ガイド登録",
        chi: "注册向导",
    },
    LookAround: {
        ko: "둘러보기",
        en: "Look Around",
        ja: "見回す",
        chi: "浏览",
    },
    AboutAndSchedule: {
        ko: "정보 & 예약하기",
        en: "About & Schedule",
        ja: "情報&予約",
        chi: "信息&预约",
    },
    ServicesDriving: {
        ko: "드라이빙가이드",
        en: "Driving Guide",
        ja: "ドライビングガイド",
        chi: "驾驶导游",
    },
    ServicesMICE: { ko: "MICE", en: "MICE", ja: "MICE", chi: "MICE" },
    ServicesTranlate: {
        ko: "통역&가이드",
        en: "Interpreter & Guide",
        ja: "通訳&ガイド",
        chi: "翻译导游",
    },
    ServicesBarrierFree: {
        ko: "Barrier-Free",
        en: "Barrier-Free",
        ja: "Barrier-Free",
        chi: "Barrier-Free",
    },
    ServicesVIP: {
        ko: "VIP의전",
        en: "VIP exhibition",
        ja: "VIP儀典",
        chi: "VIP礼宾",
    },
    ServicesWellness: {
        ko: "웰니스&의료관광",
        en: "Wellness&Medical",
        ja: "ウェルネス&メディカル",
        chi: "健康与医疗",
    },
    ServicesPrivate: {
        ko: "프라이빗 투어",
        en: "Private Tour",
        ja: "プライベートツアー",
        chi: "私人旅游",
    },
    ServicesLocalFestival: {
        ko: "로컬페스티벌",
        en: "LocalFestival",
        ja: "ローカルフェスティバル",
        chi: "当地庆典",
    },
    ServicesRealEstate: {
        ko: "부동산",
        en: "Real estate",
        ja: "不動産",
        chi: "房地产",
    },
    ServicesStudyingAbroad: {
        ko: "유학",
        en: "Studying abroad",
        ja: "留学",
        chi: "留学",
    },
    ServicesLongStay: {
        ko: "장기체류",
        en: "LongStay",
        ja: "長期滞在",
        chi: "长期滞留",
    },
    ServicesCook: {
        ko: "요리투어",
        en: "Cooking tour",
        ja: "料理ツアー",
        chi: "料理旅行",
    },
    ServicesCustom: {
        ko: "커스텀투어",
        en: "Custom tour",
        ja: "カスタムツアー",
        chi: "定制旅游",
    },
};

export const info = {
    ...utils_message,
};

export const langInfo = info;

export const staticInfo =
    (lang: "ko" | "en" | "ja" | "chi" | "ot") => (key: keyof typeof info) => {
        if (lang === "ot") lang = "en";
        if (!info[key]) return "";
        return info[key][lang];
    };

export default info;

export const unStaticInfo = (lang: "ko") => (obj: Flangs) => {
    return obj[lang];
};
