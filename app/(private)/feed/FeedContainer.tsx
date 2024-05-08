'use client';

import { useState } from 'react';
import FeedList from './FeedList';

const FeedContainer = ({ onError }: { onError: () => void }) => {
  const [count, setCount] = useState(1);
  const [hasMorePosts, setHasMorePosts] = useState(true);

  const handleLoadMore = () => {
    setCount(count + 1);
  };

  const handleFeedError = () => {
    onError();
  };

  return (
    <div>
      <FeedList
        index={count}
        setHasMorePosts={setHasMorePosts}
        onError={handleFeedError}
      />
      {hasMorePosts && (
        <div className="text-center mb-4">
          <button
            className="p-3 bg-slate-800 text-white rounded-lg"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default FeedContainer;
