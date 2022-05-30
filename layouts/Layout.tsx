import { ReactNode } from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';

type Props = {
  children: ReactNode;
};


function Layout({children}: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout