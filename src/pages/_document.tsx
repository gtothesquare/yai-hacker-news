import { Html, Head, Main, NextScript } from 'next/document';

function MyDocument() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Yet another implementation of Hacker News"
        />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
