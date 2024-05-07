import Image from 'next/image';
import { PostInterface } from '../types';
import Link from 'next/link';

const Post = ({
  post,
  showEditButton,
}: {
  post: PostInterface;
  showEditButton?: boolean;
}) => {
  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 || 12;

    return `${month}/${day}/${year} ${formattedHours}:${minutes} ${ampm}`;
  }

  return (
    <div className="p-4 bg-slate-200 text-slate-900 rounded-lg my-4 relative">
      <div className="flex flex-row items-center justify-between mb-2">
        <div className="flex items-center gap-4">
          {post.avatar ? (
            <Link href={`/${post.username}`}>
              <Image
                className="rounded-full"
                src={post.avatar}
                alt={post.username}
                width={50}
                height={50}
              />
            </Link>
          ) : (
            <Link
              href={`/${post.username}`}
              className="bg-slate-600 rounded-full h-[50px] w-[50px]"
            ></Link>
          )}
          <div>
            <Link className="font-bold" href={`/${post.username}`}>
              {post.username}
            </Link>
          </div>
        </div>
        <div>
          <p>{formatDate(post.created_at)}</p>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="w-8/12 self-end">{post.content}</p>
        {showEditButton && (
          <Link
            className="p-3 bg-slate-800 text-white rounded-lg self-end"
            href={`/profile/edit-post/${post.id}`}
          >
            Edit Post
          </Link>
        )}
      </div>
    </div>
  );
};

export default Post;
