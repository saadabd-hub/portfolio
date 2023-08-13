import dynamic from 'next/dynamic';
import Head from 'next/head';

const RootLayout = dynamic(() => import('@/components/layout'))

export default function App() {
  return (
    <>
      <Head>
        <title>Abdullah Saad | Portfolio</title>
      </Head>
      <RootLayout/>
    </>
  )
}
