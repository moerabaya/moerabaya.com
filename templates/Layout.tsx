import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Footer from '../components/molecules/Footer';
import { theme } from 'styles/theme';
import dynamic from 'next/dynamic';
const Navigation = dynamic(() => import("../components/molecules/Navigation"), {
  ssr: false,
});
export default function Layout({ children, pageProps }:any) {
  return (
    <ThemeProvider theme={theme}>
      <div className={`content`}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
          <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
        </Head>
        <Navigation  {...pageProps} />
        <main>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}