import AvatarForm from './AvatarForm';

const AccountLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="mb-4 font-bold text-xl">Loading...</h3>
      <div className="flex flex-col gap-4  bg-slate-200  rounded-lg">
        <div className="bg-slate-600 rounded-full h-[150px] w-[150px]"></div>
      </div>
      <div className="flex flex-col gap-4 bg-slate-200 p-8 rounded-lg">
        <form className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center justify-center">
            <input className="w-8/12" name="file" type="file" disabled />
            <button
              className="p-3 bg-slate-800 text-white rounded-lg"
              type="submit"
              disabled
            >
              Upload
            </button>
          </div>

          <div className="text-center mt-6">
            <button
              className="p-3 bg-slate-800 text-white rounded-lg"
              type="button"
              disabled
            >
              Log Out
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountLoading;
