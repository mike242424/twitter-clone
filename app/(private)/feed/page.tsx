import SearchBar from '../SearchBar';
import FeedContainer from './FeedContainer';

const Feed = async () => {
  return (
    <>
      <h1 className="text-center text-3xl text-slate-900 my-8 font-bold">
        Feed
      </h1>
      <SearchBar />
      <FeedContainer />
    </>
  );
};

export default Feed;
