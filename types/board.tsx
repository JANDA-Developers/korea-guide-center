import {
    Flex,
    JDalign,
    JDbadge,
    JDbutton,
    JDselect,
    opFind,
} from "@janda-com/front";
import { IselectedOption } from "@janda-com/front/dist/components/select/SelectBox";
import { TElements } from "@janda-com/front/dist/types/interface";
import { LineCutter } from "../atom/LineCutter";
import { IBreadLink } from "../component/breadColumn/BreadColumn";
import { LanguageSelecter } from "../component/langSelecter/LangSelecter";
import { IContext, TStaticLangFn } from "../context/context";
import { TUseBoardDocManage } from "../hook/useBoardDoc";
import { Paths } from "../pages/index[depre]";
import { staticInfo } from "../static.json";
import { LanguagesOps } from "../utils/enumToKr";
import { FboardDoc, LANGUAGES, UserRole, _BoardDocFilter } from "./api";
import { boardKeys } from "./const";

export enum QuestionTypes {
    "TOUR" = "TOUR",
    "PAY" = "PAY",
    "ELSE" = "ELSE",
}

export interface IBoardFacotry {
    withName?: boolean;
    canSeePrevList: boolean;
    hasAnswer: boolean;
    listTitle: string;
    writeTitle: string;
    getFixingFilter?: (context: IContext) => _BoardDocFilter;
    editor?: (manageHook: TUseBoardDocManage) => TElements;
    breadColumnsList: IBreadLink[];
    breadColumnsWrite: IBreadLink[];
    breadColumnsView: IBreadLink[];
    writePermission?: UserRole[]; // default Admin Only
    ContentRender?: (item: FboardDoc) => TElements;
}
export class BoardFacotry {
    public s: TStaticLangFn;
    constructor(s: TStaticLangFn) {
        this.s = s;
    }

    getBoard(boardKey: boardKeys) {
        const BoardFactory: Record<boardKeys, IBoardFacotry> = {
            guideAlert: {
                hasAnswer: false,
                listTitle: this.s("guideAnnounce"),
                writeTitle: this.s("guideAnnounce"),
                breadColumnsList: [
                    { label: this.s("guideAnnounce") },
                    { label: this.s("announceList") },
                ],
                breadColumnsView: [
                    { label: this.s("customerCenter") },
                    {
                        label: this.s("questions"),
                        link:
                            Paths.boardList +
                            "?boardKey=" +
                            boardKeys.guideAlert,
                    },
                    { label: this.s("guideAnnounce") },
                ],
                breadColumnsWrite: [
                    { label: this.s("customerCenter") },
                    {
                        label: this.s("announceList"),
                        link:
                            Paths.boardList +
                            "?boardKey=" +
                            boardKeys.guideAlert,
                    },
                ],
                canSeePrevList: true,
            },
            alert: {
                getFixingFilter: ({ locale }) => {
                    return {
                        lang__eq: locale || LANGUAGES.ko,
                    };
                },
                editor: ({ boardDoc, docInput, setDocInput }) => {
                    const lang = boardDoc?.lang;
                    return (
                        <div>
                            <JDselect
                                mb
                                z={5}
                                label="어떤 언어로 쓰여졌나요?"
                                onChange={(op) => {
                                    docInput["lang"] = op.value;
                                    setDocInput({ ...docInput });
                                }}
                                options={LanguagesOps}
                                lang={lang}
                            />
                        </div>
                    );
                },
                hasAnswer: false,
                listTitle: this.s("announce"),
                writeTitle: this.s("announce"),
                breadColumnsList: [
                    { label: this.s("customerCenter") },
                    { label: this.s("announceList") },
                ],
                breadColumnsView: [
                    { label: this.s("customerCenter") },
                    {
                        label: this.s("questions"),
                        link: Paths.boardList + "?boardKey=" + boardKeys.alert,
                    },
                    { label: this.s("announce") },
                ],
                breadColumnsWrite: [
                    { label: this.s("customerCenter") },
                    {
                        label: this.s("announceList"),
                        link: Paths.boardList + "?boardKey=" + boardKeys.alert,
                    },
                ],
                canSeePrevList: true,
            },
            travelInfo: {
                getFixingFilter: ({ locale }) => {
                    return {
                        lang__eq: locale || LANGUAGES.ko,
                    };
                },
                editor: ({ boardDoc, docInput, setDocInput }) => {
                    const lang = boardDoc?.lang;
                    return (
                        <div>
                            <JDselect
                                mb
                                z={5}
                                label="어떤 언어로 쓰여졌나요?"
                                onChange={(op) => {
                                    docInput["lang"] = op.value;
                                    setDocInput({ ...docInput });
                                }}
                                options={LanguagesOps}
                                lang={lang}
                            />
                        </div>
                    );
                },
                hasAnswer: false,
                listTitle: this.s("announce"),
                writeTitle: this.s("announce"),
                breadColumnsList: [
                    { label: this.s("customerCenter") },
                    { label: this.s("announceList") },
                ],
                breadColumnsView: [
                    { label: this.s("customerCenter") },
                    {
                        label: this.s("questions"),
                        link: Paths.boardList + "?boardKey=" + boardKeys.alert,
                    },
                    { label: this.s("announce") },
                ],
                breadColumnsWrite: [
                    { label: this.s("customerCenter") },
                    {
                        label: this.s("announceList"),
                        link: Paths.boardList + "?boardKey=" + boardKeys.alert,
                    },
                ],
                canSeePrevList: true,
            },
            frequentQuestion: {
                hasAnswer: false,
                listTitle: this.s("frequentQuestion"),
                writeTitle: this.s("frequentQuestion"),
                breadColumnsList: [
                    { label: this.s("customerCenter") },
                    { label: this.s("announce") },
                ],
                breadColumnsView: [
                    { label: this.s("customerCenter") },
                    { label: this.s("frequentQuestion") },
                ],
                breadColumnsWrite: [
                    { label: this.s("customerCenter") },
                    { label: this.s("frequentQuestion") },
                ],
                canSeePrevList: true,
            },
            question: {
                withName: true,
                editor: ({ docInput, boardDoc, setDocInput }) => {
                    const type = docInput.type;

                    const options: IselectedOption[] = [
                        {
                            value: QuestionTypes.TOUR,
                            label: "투어",
                        },
                        {
                            value: QuestionTypes.PAY,
                            label: "결제",
                        },
                        {
                            value: QuestionTypes.ELSE,
                            label: "기타",
                        },
                    ];

                    return (
                        <div>
                            <JDselect
                                mb
                                label="어떤 종류의 문의 인가요?"
                                options={options}
                                selectedOption={opFind(type, options, true)}
                                onChange={(op) => {
                                    setDocInput({
                                        ...docInput,
                                        type: op.value,
                                    });
                                }}
                            />
                        </div>
                    );
                },
                ContentRender: ({ title, recentComment }) => {
                    const hasReplay = recentComment.length > 0;
                    return (
                        <LineCutter style={{ width: "100%" }} line={1}>
                            <Flex style={{ width: "100%" }} between>
                                <JDalign mr>{title || "타이틀 없음"}</JDalign>
                                <span>
                                    <JDbadge
                                        size="tiny"
                                        thema={hasReplay ? "primary" : "grey2"}
                                    >
                                        {hasReplay
                                            ? this.s("replaied")
                                            : this.s("unReplaied")}
                                    </JDbadge>
                                </span>
                            </Flex>
                        </LineCutter>
                    );
                },
                writePermission: [
                    UserRole.BUYER,
                    UserRole.GUIDE,
                    UserRole.ADMIN,
                ],
                hasAnswer: true,
                listTitle: this.s("question"),
                writeTitle: this.s("question"),
                breadColumnsList: [
                    { label: this.s("customerCenter") },
                    { label: this.s("question") },
                ],
                breadColumnsView: [
                    { label: this.s("customerCenter") },
                    { label: this.s("question") },
                ],
                breadColumnsWrite: [
                    { label: this.s("customerCenter") },
                    { label: this.s("question") },
                ],
                canSeePrevList: true,
            },
        };
        return BoardFactory[boardKey];
    }
}
