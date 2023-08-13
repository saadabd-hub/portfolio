import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ['latin'] })
const Header = dynamic(() => import('@/components/layout/Header'))
const Layout = dynamic(() => import('@/components/layout/Layout'))
const Footer = dynamic(() => import('@/components/layout/Footer'))

const RootLayout = () => {
  return (
    <>
      <main
        className={`${inter.className}`}
      >
        <Header/>
        <Layout/>
        <Footer/>
      </main>
    </>
  )
}

export default RootLayout;