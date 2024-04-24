import Link from 'next/link';

const Home = () => {
  return (
    <main className="flex min-h-screen justify-center items-center">
      <div className="flex flex-col gap-4 bg-slate-800 p-28">
        <h1 className="text-3xl text-white pb-10 font-bold">Twitter Clone</h1>
        <Link
          href={'/login'}
          className="border-2 border-white bg-blue-900 text-white p-4 mb-4 md:w-[500px] font-bold"
        >
          Log In
        </Link>
        <Link
          href={'/signup'}
          className="border-2 border-white bg-blue-900 text-white p-4 md:w-[500px] font-bold"
        >
          Sign In
        </Link>
      </div>
    </main>
  );
};

export default Home;
