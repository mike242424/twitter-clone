import useSWR from 'swr';
import { PostInterface } from '../types';
import Post from './Post';

const PostList = ({ index, username }: { index: number; username: string }) => {
  const { data, error, isLoading } = useSWR(
    () => `/api/posts?page=${index}&username=${username}`,
  );

  if (error) return <div>failed to load</div>;
  if (isLoading || !data) return <div>loading...</div>;

  return (
    <ul>
      {data.data.map((post: PostInterface) => {
        return (
          <li className="m-4" key={post.id}>
            <Post post={post} />
          </li>
        );
      })}
    </ul>
  );
};

export default PostList;
