import { SSRProvider } from '@restart/ui/ssr';
import { AppProps } from 'next/app';
import Head from 'next/head';

import './styles.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to untitled!</title>
      </Head>
      <SSRProvider>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </SSRProvider>
    </>
  );
}

export default CustomApp;
