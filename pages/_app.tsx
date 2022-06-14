import type { AppProps } from 'next/app';
import { useElrondNetworkSync } from '../hooks/auth/useElrondNetworkSync';

import '../styles/globals.css';

function PandawansDapp({ Component, pageProps }: AppProps) {
  useElrondNetworkSync();
  return <Component {...pageProps} />;
}

export default PandawansDapp;
