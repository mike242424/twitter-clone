import Form from './form';

const SignUp = async () => {
  return (
    <main className="flex min-h-screen justify-center items-center">
      <div className="flex flex-col gap-4 bg-slate-800 p-12">
        <h3 className="text-3xl text-white font-bold mb-2">Sign Up</h3>
        <Form />
      </div>
    </main>
  );
};

export default SignUp;
