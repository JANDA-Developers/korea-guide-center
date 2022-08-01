import { autoComma } from "@janda-com/front";
import dayjs from "dayjs";
import { Fbooking } from "../types/api";
import { payMethodKr } from "../types/const";
import { yyyymmddHHmm } from "./dateFormat";

export const getExcelByBookings = (items: Fbooking[]): any[] => {
    const columns = [
        "코드",
        "예약자",
        "연락처",
        "이메일",
        "상품",
        "예약일",
        "결제완료금액",
        "결제수단",
        "환불금액",
        "주문자 전달사항",
        "판매자메모",
        "여행자정보",
    ];

    const datas = items.map((item): string[] => {
        return [
            item.code,
            item.buyerName || "",
            item.buyerPhone,
            item.buyerEmail || "",
            item.tourTitle.ko || "",
            dayjs(item.createdAt).format("YYYY-MM-DD:HH:mm"),
            autoComma(item.paidPrice),
            payMethodKr[item.paymethod],
            autoComma(item.refundPrice),
            item.buyerMessage || "",
            item.buyerEmail || "",
            item?.travlers?.map((travler) => travler.name).join() || "",
        ];
    });
    return [
        {
            columns,
            data: datas,
        },
    ];
};
