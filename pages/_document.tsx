import "../utils/console-config";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { LoadingPage } from "../component/pageLoading/PageLoading";

class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html id="KoreaGuideCeneter" lang="ko">
                <Head>
                    <link
                        rel="canonical"
                        href="https://www.koreaguide.center"
                    />
                    <link
                        rel="preload"
                        href="/fonts/dogdo.ttf"
                        as="font"
                        type="fonts/ttf"
                    />

                    <meta
                        property="og:title"
                        content="코리아가이드센터 - Koreaguide Center"
                        key="title"
                    />
                    <meta
                        property="og:description"
                        content="한국 가이드 여행의 모든것"
                    />
                    <title>코리아가이드센터 - Koreaguide Center</title>
                    <meta
                        name="description"
                        content="Korea Guide Center Korea Travel GuideFind a professional travel guide - 코리아가이드센터"
                    />
                    <meta name="keywords" content="Korea, Guide, Travel" />
                    <meta
                        name="naver-site-verification"
                        content="1a6c047bd032992b86444ad02dfd0219f12084dc"
                    />
                    <meta
                        name="google-site-verification"
                        content="9QoGTV1O39B1yv4uH30oyAtfL8A4vVYvZ-MpTgK1yCU"
                    />
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
    page_path: window.location.pathname,
  });
`,
                        }}
                    />
                    <meta httpEquiv="x-ua-compatible" content="IE=edge" />
                </Head>
                <body id="root">
                    <Main />
                    <NextScript />
                </body>
                {/* <LoadingPage /> */}
                <div id="SELECTBOX_PORTAL" />
                <div id="MAP_PORTAL" />
            </Html>
        );
    }
}

export default MyDocument;
