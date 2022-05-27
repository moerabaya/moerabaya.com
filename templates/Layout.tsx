import Footer from '../components/Footer';
import Menu from '../components/Menu';

export default function Layout({ children }:any) {
  return (
    <div className='content'>
      <Menu />
      <main>{children}</main>
			<Footer />
    </div>
  );
}