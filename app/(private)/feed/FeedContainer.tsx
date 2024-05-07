'use client';

import { useState } from 'react';
import FeedList from './FeedList';

const FeedContainer = () => {
  const [count, setCount] = useState(1);
  const [hasMorePosts, setHasMorePosts] = useState(true);

  const pages = [];
  for (let i = 0; i < count; i++) {
    pages.push(<FeedList index={i} key={i} setHasMorePosts={setHasMorePosts}/>);
  }

  return (
    <div>
      {pages}
      {hasMorePosts && <div className="text-center mb-4">
        <button
          className="p-3 bg-slate-800 text-white rounded-lg"
          onClick={() => setCount(count + 1)}
        >
          Load More
        </button>
      </div>}
    </div>
  );
};

export default FeedContainer;
