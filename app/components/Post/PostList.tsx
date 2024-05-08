import useSWR from 'swr';
import { PostInterface } from '../../types/types';
import Post from './Post';
import { Dispatch, SetStateAction } from 'react';
import PostLoading from './PostLoading';

const PostList = ({
  index,
  username,
  showEditButton,
  setHasMorePosts,
}: {
  index: number;
  username: string;
  showEditButton?: boolean;
  setHasMorePosts: Dispatch<SetStateAction<boolean>>;
}) => {
  const { data, error, isLoading } = useSWR(
    () => `/api/posts?page=${index}&username=${username}`,
  );

  if (error) return <div>failed to load</div>;
  if (isLoading || !data) return <PostLoading />;

  if (data.data.length < 5) {
    setHasMorePosts(false);
  }

  return (
    <ul>
      {data.data.map((post: PostInterface) => {
        return (
          <li className="m-4" key={post.id}>
            <Post showEditButton={showEditButton} post={post} />
          </li>
        );
      })}
    </ul>
  );
};

export default PostList;
