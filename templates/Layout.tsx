import Footer from '../components/Footer';
import Menu from '../components/Menu';

export default function Layout({ children, pageProps }:any) {
  return (
    <div className='content'>
      <Menu  {...pageProps} />
      <main>{children}</main>
			<Footer />
    </div>
  );
}