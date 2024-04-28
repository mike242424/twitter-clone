import Link from 'next/link';

const Home = () => {
  return (
    <main className="flex text-center min-h-screen justify-center items-center">
      <div className="flex flex-col gap-2 bg-slate-800 p-12">
        <h1 className="text-3xl text-white pb-6 font-bold">Twitter Clone</h1>
        <Link
          href={'/signup'}
          className="border-2 border-white bg-blue-900 text-white p-2 mb-4 md:w-[400px] font-bold"
        >
          Sign Up
        </Link>
        <Link
          href={'/login'}
          className="border-2 border-white bg-blue-900 text-white p-2 md:w-[400px] font-bold"
        >
          Log In
        </Link>
      </div>
    </main>
  );
};

export default Home;
