import {
  createFileRoute,
  useParams,
} from '@tanstack/react-router';
import posts from '../../posts.json';

export const Route = createFileRoute('/posts/$id')({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = useParams({ strict: false });
  const post = posts.find((post) => post._id === id);
  return (
    <div className="flex justify-center items-center flex-col">
      <img src={post?.coverImage} alt={post?.title} />
      <h1 className="text-xl text-fuchsia-900">
        {post?.title}
      </h1>
      <p>{post?.content}</p>
    </div>
  );
}
