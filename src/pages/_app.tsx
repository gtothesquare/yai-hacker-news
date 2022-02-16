import type { AppProps } from 'next/app';
import { usePanelbear } from '@panelbear/panelbear-nextjs';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'lib/theme';

function MyApp({ Component, pageProps }: AppProps) {
  // Load Panelbear only once during the app lifecycle
  usePanelbear(process.env.NEXT_PUBLIC_PANELBEAR_ID || '', {
    scriptSrc: '/teddy.js',
    honorDNT: true,
  });
  return (
    <>
      <Head>
        <title>YAI Hacker News</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
