'use client';

import { useState } from 'react';
import AvatarForm from './AvatarForm';
import NotFound from '../../components/UnauthorizedPage';

const Account = () => {
  const [error, setError] = useState(false);

  const handleFeedError = () => {
    setError(true);
  };

  if (error) return <NotFound />;

  return (
    <>
      <h1 className="text-center text-3xl text-slate-900 my-8 font-bold">
        Account
      </h1>
      <div className="flex flex-col gap-4  bg-slate-200 m-4 p-8 rounded-lg">
        <AvatarForm onError={handleFeedError} />
      </div>
    </>
  );
};

export default Account;
