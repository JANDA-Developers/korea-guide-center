import { usePagination } from "@janda-com/front";
import { ISet } from "@janda-com/front/dist/types/interface";
import { useState } from "react";
import { OffsetPagingInput } from "../types/api";
import { IUseQueryFilter, useQueryFilter } from "./useQueryFilter";
import { IUseQuerySort, useQuerySort } from "./useQuerySort";

export interface ListInitOptions<F, S> {
    initialPageIndex: number;
    initialViewCount: number;
    initialFilter: F;
    initialSort: S[];
    fixingFilter?: F;
    random?: boolean;
}

export interface IListHook<F, S> extends IUseQueryFilter<F>, IUseQuerySort<S> {
    sort: S[];
    page: number;
}

export function useListQuery<F, S>({
    initialFilter,
    initialPageIndex,
    initialSort,
    initialViewCount,
    fixingFilter,
    random,
}: ListInitOptions<F, S>) {
    const {
        filter,
        setFilter: _setFilter,
        ...useFilters
    } = useQueryFilter<F>({ ...initialFilter, ...fixingFilter } || ({} as F));
    const { sort, ...useSort } = useQuerySort<S>(initialSort);
    const [viewCount, setViewCount] = useState(initialViewCount);
    const paginatorHook = usePagination(initialPageIndex, viewCount);
    const { page, pageCount } = paginatorHook;

    const pagingInput: OffsetPagingInput = {
        pageIndex: page,
        pageItemCount: pageCount,
    };

    const filterFn: any = (filter: F) => {
        _setFilter({ ...filter, ...fixingFilter });
    };

    const setFilter: ISet<F> = filterFn;

    const integratedVariable = {
        pagingInput,
        filter,
        sort,
        random,
    };

    return {
        viewCount,
        setViewCount,
        filter,
        page,
        integratedVariable,
        sort,
        paginatorHook,
        setFilter,
        ...useFilters,
        ...useSort,
    };
}
