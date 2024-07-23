import { Head, Html, Main, NextScript } from 'next/document';
import randomBytes from 'randombytes';

export default function Document() {
  const nonce = randomBytes(128).toString('base64');
  const cspConfig = `connect-src 'self' vitals.vercel-insights.com; object-src 'none'; base-uri 'none'; script-src 'self' 'unsafe-inline' 'nonce-${nonce}' 'strict-dynamic'`

  return (
    <Html lang="en">
      <Head nonce={nonce}>
        {(process.env.NODE_ENV === 'development' || process.env.VERCEL_ENV === 'preview') && (
          // eslint-disable-next-line @next/next/no-sync-scripts
          <>
            <script
              data-project-id={process.env.METICULOUS_PROJECT_ID}
              data-is-production-environment="false"
              src="https://snippet.meticulous.ai/v1/meticulous.js"
            />
          </>
        )}
        {process.env.NODE_ENV === 'production' && (
          <>
            <meta httpEquiv='Content-Security-Policy' content={cspConfig} />
          </>
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
