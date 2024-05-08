'use client';

import { useState } from 'react';
import FollowList from './FollowList';

const FollowContainer = ({
  follow,
  onError,
}: {
  follow: string;
  onError: () => void;
}) => {
  const [count, setCount] = useState(1);
  const [hasMoreFollows, setHasMoreFollows] = useState(true);

  const handleFeedError = () => {
    onError();
  };

  const handleLoadMore = () => {
    setCount(count + 1);
  };

  const pages = [];
  for (let i = 0; i < count; i++) {
    pages.push(
      <FollowList
        index={i}
        follow={follow}
        key={i}
        setHasMoreFollows={setHasMoreFollows}
        onError={handleFeedError}
      />,
    );
  }

  return (
    <>
      {pages}
      {hasMoreFollows && (
        <div className="text-center mb-4">
          <button
            className="p-3 bg-slate-800 text-white rounded-lg"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default FollowContainer;
