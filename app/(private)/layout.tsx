'use client';
import { SWRConfig } from 'swr';
import { ReactNode } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import { fetcher } from '../utils/fetcher';

const PrivateLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SWRConfig value={{ fetcher: fetcher }}>
      <div>
        <Header />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </SWRConfig>
  );
};

export default PrivateLayout;
