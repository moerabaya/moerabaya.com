import '../styles/app.scss'
import type { AppProps } from 'next/app'
import Layout from '../templates/Layout'
import App from 'next/app'

import Cookies from "universal-cookie"
import consts from "consts";
// prevent TypeScript errors on the css prop on arbitrary elements
// import {} from 'styled-components/cssprop'

function MyApp({ Component, pageProps }: AppProps) {
  return <Layout pageProps={pageProps}><Component {...pageProps} /></Layout>
}

MyApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext);

  const cookies = new Cookies(appContext.ctx.req.headers.cookie);
  const password = cookies.get(consts.SiteReadCookie) ?? '';

  if (password === process.env.REACT_APP_LOGIN_CREDENTIALS) {
    appProps.pageProps.hasReadPermission = true;
  }

  return { ...appProps };
}


export default MyApp
