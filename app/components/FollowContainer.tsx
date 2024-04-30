'use client';

import { useState } from 'react';
import FollowList from './FollowList';

const FollowContainer = ({follow}: {follow: string}) => {
  const [count, setCount] = useState(1);

  const pages = [];
  for (let i = 0; i < count; i++) {
    pages.push(<FollowList index={i} follow={follow}/>);
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

export default FollowContainer;
