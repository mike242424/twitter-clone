const AccountLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex gap-6 items-center mb-5">
        <h3 className="font-bold text-xl">Loading...</h3>
        <button
          className="p-3 bg-slate-800 text-white rounded-lg"
          type="button"
          disabled
        >
          Log Out
        </button>
      </div>

      <div className="flex flex-col gap-4  bg-slate-200  rounded-lg">
        <div className="bg-slate-600 rounded-full h-[200px] w-[200px] mb-9"></div>
      </div>
      <div className="flex flex-col gap-4 bg-slate-200 rounded-lg">
        <form className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center justify-between">
            <input className="w-8/12" name="file" type="file" disabled />
            <button
              className="p-3 bg-slate-800 text-white rounded-lg"
              type="submit"
              disabled
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountLoading;
