import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { default as ThemeContextProvider, ThemeContext } from './ThemeProvider';
import Footer from '../components/Footer';
import { theme as styledTheme } from 'styles/theme';
import { useContext, useEffect } from 'react';
import dynamic from 'next/dynamic';
const Navigation = dynamic(() => import("../components/Menu"), {
  ssr: false,
});
export default function Layout({ children, pageProps }:any) {
  return (
    <ThemeProvider theme={styledTheme}>
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