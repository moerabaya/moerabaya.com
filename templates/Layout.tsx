import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { default as ThemeContextProvider, ThemeContext } from './ThemeProvider';
import Footer from '../components/Footer';
import MenuList from '../components/Menu';
import { theme as styledTheme } from 'styles/theme';
import { useContext, useEffect } from 'react';

export default function Layout({ children, pageProps }:any) {
  const {theme} = useContext(ThemeContext);
  useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
  }, [theme])
  return (
    <ThemeProvider theme={styledTheme}>
      <div className={`content`}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
          <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
        </Head>
        <MenuList  {...pageProps} />
        <main>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}