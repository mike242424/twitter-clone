'use client';

import AvatarForm from './AvatarForm';
import LogoutButton from './LogoutButton';

const Account = () => {
  return (
    <main className="lg:w-6/12">
      <h1 className="text-center text-3xl text-slate-900 my-8 font-bold">
        Account
      </h1>
      <div className="flex flex-col gap-4  bg-slate-300 m-4 p-8 rounded-lg">
        <AvatarForm />
        <LogoutButton />
      </div>
    </main>
  );
};

export default Account;
