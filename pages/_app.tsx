import '../styles/app.scss'
import type { AppProps } from 'next/app'
import Layout from '../templates/Layout'
import App from 'next/app'

import Cookies from "universal-cookie"
import consts from "consts";

function MyApp({ Component, pageProps }: AppProps) {
  console.log(process.env.LOGIN_CREDENTIALS);
  return <Layout pageProps={pageProps}><Component {...pageProps} /></Layout>
}

MyApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext);

  const cookies = new Cookies(appContext.ctx.req.headers.cookie);
  const password = cookies.get(consts.SiteReadCookie) ?? '';

  if (password === process.env.LOGIN_CREDENTIALS) {
    appProps.pageProps.hasReadPermission = true;
  }
  
  alert(process.env.LOGIN_CREDENTIALS);

  return { ...appProps };
}


export default MyApp
