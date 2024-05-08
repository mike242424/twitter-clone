const FollowLoading = () => {
  const items = Array.from({ length: 10 }, (_, index) => index);

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {items.map((item, i) => {
        return (
          <div
            key={i}
            className="bg-slate-200 rounded-lg text-slate-800 p-5 mx-4 sm:mx-0"
          >
            <div className="bg-slate-600 rounded-full h-[50px] w-[50px]"></div>
          </div>
        );
      })}
    </div>
  );
};

export default FollowLoading;
