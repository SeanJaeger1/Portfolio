import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="bg-[#0B0A09]">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#0B0A09" />
        <style
          dangerouslySetInnerHTML={{
            __html: `.gsap-hidden { visibility: hidden; }`,
          }}
        />
      </Head>
      <body className="bg-[#0B0A09]">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
