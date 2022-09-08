import Head from 'next/head';
import Footer from '../components/Footer';
import Menu from '../components/Menu';

export default function Layout({ children, pageProps }:any) {
  return (
    <div className='content'>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />

      </Head>
      <Menu  {...pageProps} />
      <main>{children}</main>
			<Footer />
    </div>
  );
}