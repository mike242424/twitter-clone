import Post from '@/app/components/Post';
import { PostInterface } from '@/app/types';
import useSWR from 'swr';

const FeedList = ({ index }: { index: number }) => {
  const { data, error, isLoading } = useSWR(`/api/posts/feed?page=${index}`);

  if (error) {
    return <div>failed to load</div>;
  }

  if (isLoading) {
    return <div>loading..</div>;
  }

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

export default FeedList;
