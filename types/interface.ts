import { QueryHookOptions } from "@apollo/client";
import { CSSProperties, Dispatch } from "react";
import { ListInitOptions } from "../hook/useListQuery";
import {
    Fmodal,
    NotificationTriggerEvent,
    productList_ProductList_pageInfo,
} from "../types/api";
import { genrateOption } from "../utils/query";
export interface ILi extends React.HTMLAttributes<HTMLLIElement> {}
export interface IRef<T = HTMLDivElement> extends React.MutableRefObject<T> {}
export declare type TElements = string | JSX.Element | JSX.Element[] | string[];
export interface IDiv extends React.HTMLAttributes<HTMLDivElement> {}
export interface IImg extends React.HTMLAttributes<HTMLImageElement> {}
export interface IPageInfo extends productList_ProductList_pageInfo {}

export type TCount = {
    name: string;
    value: number;
};

export type TBracketItem = {
    id: string;
    name: string;
    price: number;
    count: TCount[];
};

export interface IHumanCount {
    adult: number;
    kids: number;
    baby: number;
}

export enum QStatus {
    "PROCESSING" = "PROCESSING",
    "DONE" = "DONE",
}
export declare type ISet<T> = Dispatch<React.SetStateAction<T>>;

export type TPageKeys =
    | "payment"
    | "event"
    | "ticket"
    | "guideMain"
    | "anonymouseFindBook"
    | "mypageLayout"
    | "findmember"
    | "announce"
    | "qna"
    | "question"
    | "portfolio"
    | "join"
    | "login"
    | "tourView"
    | "tourWrite"
    | "search"
    | "searchAll"
    | "news"
    | "site-info"
    | "main"
    | "portfolio"
    | "tourMain"
    | "tourWrite"
    | "tourList";

export type TLangs = "kr" | "en" | string;
interface Foo {
    style?: CSSProperties;
}
interface TInfoCell extends Foo {
    [key: string]: any;
}
export type TStieInfo = {
    [key: string]: TInfoCell;
};

export type E_INPUT = React.ChangeEvent<HTMLInputElement>;

export interface IlistQueryInit<F, S, Q, V>
    extends Partial<ListInitOptions<F, S>> {
    options?: QueryHookOptions<Q, V>;
}

export type TListQueryVariables<F, S, Q, V> = [
    Partial<ListInitOptions<F, S>>,
    genrateOption<Q, V>
];
