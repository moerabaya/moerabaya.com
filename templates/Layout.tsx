import Head from 'next/head';
import Footer from '../components/Footer';
import Menu from '../components/Menu';

export default function Layout({ children, pageProps }:any) {
  return (
    <div className='content'>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/muc0qsa.css" />
      </Head>
      <Menu  {...pageProps} />
      <main>{children}</main>
			<Footer />
    </div>
  );
}