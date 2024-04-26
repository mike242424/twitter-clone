import { ReactNode } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

const PrivateLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </main>
  );
};

export default PrivateLayout;
