'use client';

import { useState } from 'react';
import FollowList from './FollowList';

const FollowContainer = ({ follow }: { follow: string }) => {
  const [count, setCount] = useState(1);
  const [hasMoreFollows, setHasMoreFollows] = useState(true);

  const pages = [];
  for (let i = 0; i < count; i++) {
    pages.push(
      <FollowList
        index={i}
        follow={follow}
        key={i}
        setHasMoreFollows={setHasMoreFollows}
      />,
    );
  }

  return (
    <div>
      {pages}
      {hasMoreFollows && (
        <div className="text-center mb-4">
          <button
            className="p-3 bg-slate-800 text-white rounded-lg"
            onClick={() => setCount(count + 1)}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default FollowContainer;
