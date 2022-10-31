import {
    DocumentNode,
    LazyQueryHookOptions,
    MutationHookOptions,
    QueryHookOptions,
    useMutation,
} from "@apollo/client";
import { ListInitOptions, useListQuery } from "../hook/useListQuery";
import { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { DEFAULT_PAGE_INFO } from "@janda-com/front";
import { FoffsetPagingInfo } from "../types/api";
import { getOperationName } from "@apollo/client/utilities";
import { completeMsg } from "./onCompletedMessage";

export const pageLoadingEffect = (loading: boolean, operationName: string) => {
    if (typeof document === "undefined") return;

    const MuPageLoading = document.getElementById("MuPageLoading");
    if (MuPageLoading) {
        const fetches = MuPageLoading.dataset.fetchingid?.split(",");
        if (loading) {
            MuPageLoading.style.display = "flex";
            if (!fetches?.includes(operationName)) {
                fetches?.push(operationName);
                MuPageLoading.dataset.fetchingid =
                    fetches?.filter((f) => f)?.join(",") || "";
            }
        } else {
            MuPageLoading.dataset.fetchingid =
                fetches?.filter((fetch) => fetch !== operationName).join(",") ||
                "";
            setTimeout(() => {
                if (!MuPageLoading.dataset.fetchingid) {
                    MuPageLoading.style.display = "none";
                }
            }, 300);
        }
    }
};

const usePageLoadingEffect = (on: boolean, operationName: string) => {
    pageLoadingEffect(on, operationName);
    useEffect(() => {
        return () => {
            pageLoadingEffect(false, operationName);
        };
    }, []);
};

export const getQueryName = (QUERY: DocumentNode) => {
    const operation = QUERY.definitions[0];

    // @ts-ignore
    const operationName = operation && operation.name.value;

    return capitalize(operationName);
};

export const capitalize = (s: string) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
};

export interface genrateOption<Q, V> extends QueryHookOptions<Q, V> {
    queryName?: string;
    skipInit?: boolean;
    overrideVariables?: Partial<V>;
    skipLoadingEffect?: boolean;
}

const dataCheck = (
    data: any,
    operationName: string,
    checkProperty?: string[]
) => {
    try {
        if (data?.hasOwnProperty(operationName) === false) {
            throw Error(
                `result data object dose not have property ${operationName} look this above object ↑ `
            );
        }

        checkProperty &&
            checkProperty.forEach((p) => {
                if (data?.[operationName].hasOwnProperty(p) === false) {
                    console.error(p);
                    throw Error(
                        `result data object dose not have property ${p} look this above object ↑ `
                    );
                }
            });
    } catch (e) {
        console.error("==========FATAL ERROR==========");
        console.error(e);
    }
};

export const generateListQueryHook = <F, S, Q, V, R>(
    QUERY: DocumentNode,
    queryInit: Partial<ListInitOptions<F, S>> = {},
    defaultOptions?: genrateOption<Q, V>
) => {
    const listQueryHook = (
        {
            initialPageIndex = queryInit.initialPageIndex || 0,
            initialSort = queryInit.initialSort || [],
            initialFilter = queryInit.initialFilter || ({} as F),
            initialViewCount = queryInit.initialViewCount || 10,
            fixingFilter,
            random,
        }: Partial<ListInitOptions<F, S>> = { ...queryInit },
        options: genrateOption<Q, V> = { ...defaultOptions }
    ) => {
        let _option = { ...defaultOptions, ...options };
        const { variables, overrideVariables, ...ops } = _option;
        const { integratedVariable, ...params } = useListQuery({
            initialFilter,
            initialPageIndex,
            initialSort,
            initialViewCount,
            fixingFilter,
            random,
        });

        const [getData, { data, loading: getLoading, ...queryElse }] =
            useLazyQuery<Q, V>(QUERY, {
                fetchPolicy: "no-cache",
                // @ts-ignore
                variables: {
                    ...integratedVariable,
                    ...variables,
                    ...overrideVariables,
                },
                ...ops,
            });

        const operationName = defaultOptions?.queryName || getQueryName(QUERY);

        dataCheck(data, operationName, ["items", "pageInfo"]);
        // @ts-ignore
        const items: R[] = data?.[operationName]?.items || [];
        const pageInfo: FoffsetPagingInfo =
            (data as any)?.[operationName]?.pageInfo || DEFAULT_PAGE_INFO;

        if (!defaultOptions?.skipLoadingEffect)
            usePageLoadingEffect(getLoading, operationName);

        useEffect(() => {
            if (options?.skip) return;
            if (getLoading) return;
            getData();
        }, [
            params.filter,
            params.sort,
            params.paginatorHook.pageCount,
            params.paginatorHook.page,
        ]);

        useEffect(() => {
            params.paginatorHook.setPage(0);
        }, [params.paginatorHook.pageCount, params.filter]);

        return {
            getData,
            pageInfo,
            getLoading,
            items,
            ...params,
            ...queryElse,
        };
    };

    return listQueryHook;
};

export const generateQueryHook = <Q, R, V = undefined>(
    QUERY: DocumentNode,
    { skipInit, ...initOptions }: genrateOption<Q, V> | undefined = {}
) => {
    const queryHook = (defaultOptions?: QueryHookOptions<Q, V>) => {
        const [
            getData,
            { data: _data, error, loading: getLoading, ...context },
        ] = useLazyQuery<Q, V>(QUERY, {
            fetchPolicy: "no-cache",
            ...initOptions,
            ...defaultOptions,
        });

        const operationName = initOptions?.queryName || getQueryName(QUERY);
        dataCheck(_data, operationName);

        type Result = R extends Array<any> ? R : R | undefined;
        // @ts-ignore
        const data: Result = _data?.[operationName] || undefined;

        usePageLoadingEffect(getLoading, operationName);

        useEffect(() => {
            if (!defaultOptions?.skip) if (!skipInit) getData();
        }, []);

        return { getData, getLoading, data, ...context };
    };
    return queryHook;
};

// refetchQueries: [getOperationName(BOOKING_LIST) || ""],

interface GenerateMutationHookMu<M, V> extends MutationHookOptions<M, V> {
    skipLoadingEffect?: boolean;
    testAvailable?: boolean;
    stopUserAvailable?: boolean;
}

interface CustomMutationHookOption {
    skipMessage?: boolean;
    onCompleteSucess?: () => void;
}

export const generateMutationHook = <M, V = any>(
    MUTATION: DocumentNode,
    {
        skipLoadingEffect,
        testAvailable,
        stopUserAvailable,
        ...defaultOptions
    }: GenerateMutationHookMu<M, V> = {}
) => {
    const mutationHook = ({
        onCompleteSucess,
        skipMessage,
        ...options
    }: MutationHookOptions<M, V> & CustomMutationHookOption = {}) => {
        // const ga = useGA4React();
        const muhook = useMutation<M, V>(MUTATION, {
            awaitRefetchQueries: true,
            onCompleted: (data: any) => {
                const result = data[capitalize(operationName)];
                if (result) {
                    let msg = "";
                    if (!skipMessage) {
                        if (operationName.includes("Create")) msg = "생성완료";
                        if (operationName.includes("Update")) msg = "수정완료";
                        if (operationName.includes("Delete")) msg = "삭제완료";
                    }
                    const validResult = completeMsg(result, msg || undefined);
                    if (validResult) {
                        onCompleteSucess?.();
                    }
                }
            },
            ...defaultOptions,
            ...options,
        });
        const operationName = getOperationName(MUTATION)!;

        if (muhook[1]?.data) {
            const { data: resultData } = muhook[1] as any;
            const result = resultData[capitalize(operationName)];
            if (result?.ok === false) {
            }
        }

        const muFn = muhook[0];

        const duplicatePreventFn = (() => {
            if (muhook?.[1]?.loading) return () => {};
            return muFn;
        })() as typeof muFn;

        muhook[0] = duplicatePreventFn;

        if (!skipLoadingEffect)
            usePageLoadingEffect(muhook[1].loading, operationName);

        return muhook;
    };
    return mutationHook;
};

export const generateFindQuery = <Q, V, ResultFragment>(
    findBy: keyof V,
    QUERY: DocumentNode,
    _options?: LazyQueryHookOptions
) => {
    const findQueryHook = (key?: any, options: QueryHookOptions<Q, V> = {}) => {
        const [getData, { data, loading, error: apolloError, ...context }] =
            useLazyQuery<Q, V>(QUERY, {
                skip: !key,
                fetchPolicy: "no-cache",
                // @ts-ignore
                variables: findBy
                    ? {
                          [findBy]: key,
                      }
                    : undefined,
                ..._options,
                ...options,
            });

        const operationName = getQueryName(QUERY);

        const item: ResultFragment | undefined =
            // @ts-ignore
            data?.[operationName] || undefined;
        // @ts-ignore
        const errorFromServer: string = data?.[operationName]?.error;
        dataCheck(data, operationName);

        useEffect(() => {
            if (options.skip) return;
            if (key) getData();
        }, [key]);

        usePageLoadingEffect(loading, operationName);

        const error = apolloError || errorFromServer;

        return { item, loading, error, getData, ...context };
    };

    return findQueryHook;
};
