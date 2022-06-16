import '@fontsource/poppins/100.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';

import type { AppProps } from 'next/app';
import { useElrondNetworkSync } from '../hooks/auth/useElrondNetworkSync';

import '../styles/globals.css';

function PandawansDapp({ Component, pageProps }: AppProps) {
  useElrondNetworkSync();
  return <Component {...pageProps} />;
}

export default PandawansDapp;
