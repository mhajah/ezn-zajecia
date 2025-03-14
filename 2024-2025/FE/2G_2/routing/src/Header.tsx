import { Link, useParams } from "@tanstack/react-router";

export function Header() {
  const { id } = useParams({ strict: false });
  return (
    <header className="flex gap-4 bg-amber-500 p-2">
      {id ? <p>{id}</p> : null}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/posts">Posts</Link>
    </header>
  )
}