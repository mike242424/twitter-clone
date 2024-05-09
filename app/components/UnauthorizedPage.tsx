import Link from 'next/link';
import React from 'react';

const UnauthorizedPage = () => {
  return (
    <>
      <h1 className="text-center text-3xl text-slate-900 my-8 font-bold">
        Unauthorized
      </h1>
      <div className="flex justify-center items-center gap-6">
        <div className="text-center text-xl text-slate-900 my-8 font-bold">
          Please log in
        </div>
        <div>
          <Link
            className="p-3 bg-slate-800 text-white rounded-lg"
            href={'/login'}
          >
            Log In
          </Link>
        </div>
      </div>
    </>
  );
};

export default UnauthorizedPage;
