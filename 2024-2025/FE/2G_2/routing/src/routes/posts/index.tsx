import { createFileRoute, Link } from '@tanstack/react-router'
import posts from '../../posts.json'
export const Route = createFileRoute('/posts/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    // list of posts
    <div className='flex items-center flex-col gap-4'>
      {posts.map((post) => (
        <div key={post._id} className='flex flex-col gap-2 bg-amber-100 border-2 p-2'>
          <h3>{post.title}</h3>
          <Link to='/posts/$id' params={{ id: post._id }} className='text-blue-500'>
            Read more
          </Link>
        </div>
      ))}
    </div>
  )
}
