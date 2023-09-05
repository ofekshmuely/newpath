import { Html, Head, Main, NextScript } from "next/document";
import { Script } from "next/script";
import { Analytics } from "@vercel/analytics/react";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <NextScript
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-7CKE5FMHP4`}
        />
        <NextScript id="ga-script" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-7CKE5FMHP4',
         {page_path: window.location.pathname,}); `}
        </NextScript>
        <Analytics />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
