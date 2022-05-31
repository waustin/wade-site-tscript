import { ReactNode } from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';

type Props = {
  routeClass?: string;
  children: ReactNode;
};


function Layout({routeClass, children}: Props) {
  return (
    <>
      <Header />
      <main className={routeClass}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout