'use client';

import AvatarForm from './AvatarForm';
import LogoutButton from './LogoutButton';

const Account = () => {
  return (
    <>
      <h1 className="text-center text-3xl text-slate-900 my-8 font-bold">
        Account
      </h1>
      <div className="flex flex-col gap-4  bg-slate-200 m-4 p-8 rounded-lg">
        <AvatarForm />
        <LogoutButton />
      </div>
    </>
  );
};

export default Account;
