import type { AppProps } from 'next/app';

import GlobalStyle from 'src/GlobalStyle';
import DefaultLayout from '@Layouts/DefaultLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <GlobalStyle />
      <Component {...pageProps} />
    </DefaultLayout>
  );
}

export default MyApp;
