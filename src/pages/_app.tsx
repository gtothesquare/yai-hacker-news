import type { AppProps } from 'next/app';
import { usePanelbear } from '@panelbear/panelbear-nextjs';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'lib/theme';
import { useCronitor } from '@cronitorio/cronitor-rum-nextjs';

function MyApp({ Component, pageProps }: AppProps) {
  // Load CRONITOR only once during the app lifecycle
  useCronitor(process.env.NEXT_PUBLIC_CRONITOR_ID || '');
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
