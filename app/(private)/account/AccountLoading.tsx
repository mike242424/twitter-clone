const AccountLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="mb-4 font-bold text-xl">Loading...</h3>
      <div className="flex flex-col gap-4  bg-slate-200 m-4 rounded-lg">
        <div className="bg-slate-600 rounded-full h-[200px] w-[200px]"></div>
      </div>
    </div>
  );
};

export default AccountLoading;
