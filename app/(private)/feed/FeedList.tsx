'use client';

import Post from '@/app/components/Post';
import PostLoading from '@/app/components/PostLoading';
import { PostInterface } from '@/app/types/types';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import useSWR from 'swr';

const FeedList = ({
  index,
  setHasMorePosts,
  onError,
}: {
  index: number;
  setHasMorePosts: Dispatch<SetStateAction<boolean>>;
  onError: () => void;
}) => {
  const { data, error, isValidating } = useSWR(`/api/posts/feed?page=${index}`);

  useEffect(() => {
    if (error) {
      onError();
    } else if (data?.data.length < 5) {
      setHasMorePosts(false);
    }
  }, [data, error, onError, setHasMorePosts]);

  if (isValidating) {
    return <PostLoading />;
  }

  return (
    <ul>
      {data?.data.map((post: PostInterface) => (
        <li className="m-4" key={post.id}>
          <Post showEditButton={false} post={post} />
        </li>
      ))}
    </ul>
  );
};

export default FeedList;
