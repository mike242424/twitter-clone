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
      <div className="flex flex-col min-h-screen">
        <Header />
        <Navbar />
        <main className="flex flex-1 bg-white text-slate-900 justify-center">
          <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </SWRConfig>
  );
};

export default PrivateLayout;
