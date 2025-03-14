import { createFileRoute } from '@tanstack/react-router'
import posts from '../../posts.json'

export const Route = createFileRoute('/posts/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams();
  const post = posts.find((post) => post._id === id);
  if (!post) return;
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Author: {post.author.name}</p>
      <img src={`${post.author.avatar}`} alt={`${post.author.name}'s avatar`} />
    </div>
  )
}
