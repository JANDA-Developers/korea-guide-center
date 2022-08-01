const isDev = process.env.NODE_ENV === "development";
export const ifDev = <T>(dev: T) => (isDev ? dev : null);

export const devConsole = (msg: string): any =>
    isDev ? devConsole(msg) : null;

export const ifProd = <T>(prod: T) =>
    process.env.NODE_ENV === "production" ? prod : null;
