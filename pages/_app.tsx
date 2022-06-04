import '../styles/app.scss'
import type { AppProps } from 'next/app'
import Layout from '../templates/Layout'
import App from 'next/app'

import Cookies from "universal-cookie"
import consts from "consts";

function MyApp({ Component, pageProps }: AppProps) {
  return <Layout pageProps={pageProps}><Component {...pageProps} /></Layout>
}

MyApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext);

  const cookies = new Cookies(appContext.ctx.req.headers.cookie);
  const password = cookies.get(consts.SiteReadCookie) ?? '';

  if (password === 'letmein') {
    appProps.pageProps.hasReadPermission = true;
  }

  return { ...appProps };
}


export default MyApp
