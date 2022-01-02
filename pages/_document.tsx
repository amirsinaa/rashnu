import NextDocument, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends NextDocument {
  static async getInitialProps(ctx) {
    return await NextDocument.getInitialProps(ctx)
  }
  render() {
    const { locale } = this.props.__NEXT_DATA__
    const dir = locale === "en" ? "ltr" : "rtl"
    return (
      <Html dir={dir} lang={locale}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
