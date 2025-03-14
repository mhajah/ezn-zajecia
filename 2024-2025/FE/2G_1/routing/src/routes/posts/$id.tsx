import { createFileRoute } from '@tanstack/react-router';
import posts from '../../posts.json';
export const Route = createFileRoute('/posts/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams();
  // call do API, zeby wyciagnal nam posta o danym ID
  const post = posts.find((post) => post._id === id);
  if (!post) return (
    <div>
      <h1 className='text-red-500'>Post not found!</h1>
      <p>Post with id "{id}" not found!</p>
    </div>
  )
  return (
    <div className='flex items-center gap-4 flex-col p-4'>
      <div className='bg-amber-200 border-1 p-2 rounded-xl'>
        <div className='flex items-center gap-4'>
          <img src={`${post.author.avatar}`} alt='avatar' className='rounded-full w-16 h-16' />
          <p>{post.author.name}</p>
        </div>
        <h2 className='font-bold'>{post.title}</h2>
        <p>{post.content}</p>
      </div>
    </div>
  )
}
