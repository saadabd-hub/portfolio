import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { AppProps } from 'next/app';
import '~/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      {process.env.NODE_ENV === 'production' && (
        <Analytics mode={'production'} />
      )}
      <SpeedInsights />
    </>
  )
}
