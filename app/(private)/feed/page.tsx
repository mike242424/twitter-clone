import FeedContainer from './FeedContainer';

const Feed = async () => {
  return (
    <main className="lg:w-6/12">
      <h1 className="text-center text-3xl text-slate-900 my-8 font-bold">
        Feed
      </h1>
      <FeedContainer />
    </main>
  );
};

export default Feed;
