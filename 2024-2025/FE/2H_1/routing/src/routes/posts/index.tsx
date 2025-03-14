import {
  createFileRoute,
  Link,
} from '@tanstack/react-router';
import posts from '../../posts.json';

export const Route = createFileRoute('/posts/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-xl text-fuchsia-900">
        Lista postów
      </h1>
      {posts.map((post) => (
        <div
          key={post._id}
          className="border border-gray-300 p-2 m-2"
        >
          <h2>{post.title}</h2>
          <Link
            to={`/posts/${post._id}`}
            className="text-blue-500"
          >
            Przejdź do artykułu
          </Link>
        </div>
      ))}
    </div>
  );
}
