const testMode = true;
export const TOSS_ENV = {
    TOSS_WIDGET_CLIENT_KEY: testMode
        ? process.env.NEXT_PUBLIC_TOSS_WIDGET_CLIENT_TEST_KEY!
        : process.env.NEXT_PUBLIC_TOSS_WIDGET_CLIENT_KEY!,
    TOSS_NON_WIDGET_CLIENT_KEY: testMode
        ? process.env.NEXT_PUBLIC_TOSS_NON_WIDGET_CLIENT_TEST_KEY!
        : process.env.NEXT_PUBLIC_TOSS_NON_WIDGET_CLIENT_KEY!,
};
