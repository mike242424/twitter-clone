'use client';

import { useState } from 'react';
import SearchBar from '../SearchBar';
import FeedContainer from './FeedContainer';
import NotFound from '../../components/UnauthorizedPage';

const Feed = () => {
  const [error, setError] = useState(false);

  const handleFeedError = () => {
    setError(true);
  };

  if (error) {
    return <NotFound />;
  }

  return (
    <>
      <h1 className="text-center text-3xl text-slate-900 my-8 font-bold">
        Feed
      </h1>
      <SearchBar />
      <FeedContainer onError={handleFeedError} />
    </>
  );
};

export default Feed;
