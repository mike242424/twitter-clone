import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <>
      <h1 className="text-center text-3xl text-slate-900 my-8 font-bold">
        Access Denied
      </h1>
      <p className="text-center text-xl text-slate-900 my-8 font-bold">
        Please log in
      </p>
      <div className="text-center">
        <Link
          className="p-3 bg-slate-800 text-white rounded-lg"
          href={'/login'}
        >
          Log In
        </Link>
      </div>
    </>
  );
};

export default NotFound;
