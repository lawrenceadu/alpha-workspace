import { ToastContainer } from 'react-toastify';
import { SSRProvider } from '@restart/ui/ssr';
import { AppProps } from 'next/app';
import Head from 'next/head';

import StoreProvider from '../contexts/store';
import AppProvider from '../providers/app';

import './styles.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to untitled!</title>
      </Head>
      {/* get request caching config */}

      <SSRProvider>
        <StoreProvider>
          <AppProvider>
            <Component {...pageProps} />
            <ToastContainer hideProgressBar newestOnTop />
          </AppProvider>
        </StoreProvider>
      </SSRProvider>
    </>
  );
}

export default CustomApp;
