import GlobalStyle from "../components/GlobalStyle";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
        <Head>
            <link // Leaving in incase FOUC fix found other than using woff.
                rel="preload"
                href="/fonts/OpenSans.ttf"
                as="font"
                type="font/truetype"
                crossorigin="anonymous"
            />
            <link 
                rel="preload"
                href="/fonts/OpenSans.woff"
                as="font"
                type="font/woff"
                crossorigin="anonymous"
            />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
    </>
  );
}
