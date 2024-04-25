import Form from './form';

const LogIn = async () => {
  return (
    <main className="flex min-h-screen justify-center items-center">
      <div className="flex flex-col gap-4 bg-slate-800 p-20">
        <h3 className="text-3xl text-white font-bold mb-4">Log In</h3>
        <Form />
      </div>
    </main>
  );
};

export default LogIn;
