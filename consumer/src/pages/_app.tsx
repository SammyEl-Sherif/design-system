import '@workpace/design-system/styles';
import '@workpace/design-system/fonts';
import type { AppProps } from 'next/app';

import type { ComponentType } from 'react';

const App = ({ Component, pageProps }: AppProps & { Component: ComponentType }): JSX.Element => {
  return <Component {...pageProps} />;
};

export default App;
