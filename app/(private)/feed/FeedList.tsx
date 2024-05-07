import Post from '@/app/components/Post';
import { PostInterface } from '@/app/types';
import { Dispatch, SetStateAction } from 'react';
import useSWR from 'swr';

const FeedList = ({
  index,
  setHasMorePosts,
}: {
  index: number;
  setHasMorePosts: Dispatch<SetStateAction<boolean>>;
}) => {
  const { data, error, isLoading } = useSWR(`/api/posts/feed?page=${index}`);

  if (error) {
    return <div>failed to load</div>;
  }

  if (isLoading) {
    return <div>loading..</div>;
  }

  if (data.data.length < 5) {
    setHasMorePosts(false);
  }

  return (
    <ul>
      {data.data.map((post: PostInterface) => {
        return (
          <li className="m-4" key={post.id}>
            <Post showEditButton={false} post={post} />
          </li>
        );
      })}
    </ul>
  );
};

export default FeedList;
