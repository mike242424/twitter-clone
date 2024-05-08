const PostLoading = () => {
  const items = Array.from({ length: 5 }, (_, index) => index);
  return (
    <>
      {items.map((item, i) => {
        return (
          <div className="m-4" key={i}>
            <div className="flex justify-between p-4 pb-12 bg-slate-200 text-slate-900 rounded-lg">
              <div className="bg-slate-600 rounded-full h-[50px] w-[50px]"></div>
              <div>
                <div>Loading...</div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PostLoading;
