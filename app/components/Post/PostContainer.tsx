'use client';

import { useState } from 'react';
import PostList from './PostList';

const PostContainer = ({
  username,
  showEditButton,
}: {
  username: string;
  showEditButton?: boolean;
}) => {
  const [count, setCount] = useState(1);
  const [hasMorePosts, setHasMorePosts] = useState(true);

  const pages = [];
  for (let i = 0; i < count; i++) {
    pages.push(
      <PostList
        key={i}
        index={i}
        username={username}
        showEditButton={showEditButton}
        setHasMorePosts={setHasMorePosts}
      />,
    );
  }

  return (
    <div>
      {pages}
      {hasMorePosts && (
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

export default PostContainer;
