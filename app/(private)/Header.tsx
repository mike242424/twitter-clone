'use client';
import useSWR from 'swr';
import User from '../components/User';

const Header = () => {
  const { data, error, isLoading } = useSWR('/api/users/profile');

  if (isLoading || error)
    return (
      <header className="flex flex-row w-full p-2 py-4 bg-slate-800 justify-between items-center">
        <h1 className="text-3xl font-bold ml-11">Twitter Clone</h1>
        <div className="mr-12">
          <>
            <div className="flex flex-col font-bold">
              <div
                className={`flex flex-row self-center gap-4 items-center my-4 ml-4`}
              >
                <div className="bg-slate-600 rounded-full h-[50px] w-[50px]"></div>
                <p>{isLoading ? 'Loading...' : 'Unauthorized'}</p>
              </div>
            </div>
          </>
        </div>
      </header>
    );

  return (
    <header className="flex flex-row w-full p-3 bg-slate-800 justify-between items-center">
      <h1 className="text-3xl font-bold ml-10">Twitter Clone</h1>
      <div className="mr-10">
        <User user={data.data} href="account" />
      </div>
    </header>
  );
};

export default Header;
