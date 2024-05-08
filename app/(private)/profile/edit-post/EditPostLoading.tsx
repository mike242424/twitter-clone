const EditPostLoading = () => {
  return (
    <>
      <h1 className="text-center text-3xl text-slate-900 my-8 font-bold">
        Edit Post
      </h1>
      <form className="flex flex-col items-center m-4">
        <textarea
          className="p-4 bg-slate-200 text-slate-900 rounded-lg w-full border-2 border-slate-500"
          placeholder="Edit post..."
          value="Loading..."
          disabled
        />
        <div className="flex mt-3 w-full justify-between">
          <button
            className="p-3 mt-1 bg-slate-800 text-white rounded-lg"
            type="submit"
            disabled
          >
            Save Post
          </button>

          <button
            className="p-3 mt-1 bg-slate-800 text-white rounded-lg"
            type="submit"
            disabled
          >
            Delete Post
          </button>
        </div>
      </form>
    </>
  );
};

export default EditPostLoading;
