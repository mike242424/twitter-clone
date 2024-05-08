'use client';

import Footer from './(private)/Footer';
import Navbar from './(private)/Navbar';

const NotFound = () => {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <header className="flex flex-row w-full p-3 py-8 bg-slate-800 justify-between items-center">
        <h1 className="text-3xl font-bold ml-10">Twitter Clone</h1>
        <div className="mr-10">
          <div className="flex bg-slate-600 rounded-full h-[50px] w-[50px] items-center justify-center">
            <p>404</p>
          </div>
        </div>
      </header>
      <Navbar />
      <div className="flex-grow bg-white">
        <h1 className="text-center text-3xl text-slate-900 font-bold pt-8">
          404 Not Found
        </h1>
        <p className="text-center text-xl text-slate-900 mt-8 font-bold">
          This page doesn't exist
        </p>
      </div>
      <Footer />
    </main>
  );
};

export default NotFound;
