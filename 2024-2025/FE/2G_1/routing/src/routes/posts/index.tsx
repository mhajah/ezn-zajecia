import { createFileRoute, Link } from '@tanstack/react-router'
import posts from '../../posts.json'

export const Route = createFileRoute('/posts/')({
  component: RouteComponent,
})

function RouteComponent() {
  console.log('posts:', posts)
  return (
    <div className='flex items-center gap-4 flex-col p-4'>
      {
        posts.map((post) => (
          <div key={post._id} className=' bg-amber-200 border-1 p-2 rounded-xl'>
            <h2>{post.title}</h2>
            <Link to='/posts/$id' params={{id: post._id}} className='text-blue-500'>
            Read more
            </Link>
          </div>
        ))
      }
    </div>
  )
}
