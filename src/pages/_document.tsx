import { Head, Html, Main, NextScript } from 'next/document';
import randomBytes from 'randombytes';
import { promisify } from 'util';

const randomBytesAsync = promisify(randomBytes);

export default async function Document() {
  const generateNonce = async () => {
    const bytes = await randomBytesAsync(16);
    return bytes.toString('base64');
  };

  const getCspConfig = async () => {
    const nonce = await generateNonce();
    return `connect-src 'self' vitals.vercel-insights.com; object-src 'none'; base-uri 'none'; script-src 'self' 'unsafe-inline' 'nonce-${nonce}' 'strict-dynamic'`;
  };

  const loadMeticulousScript = (cspConfig: string) => {
    if (process.env.NODE_ENV === 'development' || process.env.VERCEL_ENV === 'preview') {
      return (
        <>
          <script
            data-project-id={process.env.METICULOUS_PROJECT_ID}
            data-is-production-environment="false"
            src="https://snippet.meticulous.ai/v1/meticulous.js"
          />
          <meta httpEquiv='Content-Security-Policy' content={cspConfig} />
        </>
      );
    }
    return null;
  };


  return (
    <Html lang="en">
      <Head>
        {loadMeticulousScript(await getCspConfig())}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
