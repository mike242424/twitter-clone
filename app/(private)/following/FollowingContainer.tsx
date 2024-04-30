'use client';

import { useState } from 'react';
import FollowingList from './FollowingList';

const FollowingContainer = () => {
  const [count, setCount] = useState(1);

  const pages = [];
  for (let i = 0; i < count; i++) {
    pages.push(<FollowingList index={i} />);
  }
  return (
    <div>
      {pages}
      <div className="text-center mb-4">
        <button
          className="p-4 bg-slate-800 text-white rounded-lg"
          onClick={() => setCount(count + 1)}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default FollowingContainer;
