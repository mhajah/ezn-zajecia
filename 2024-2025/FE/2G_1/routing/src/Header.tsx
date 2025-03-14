import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <header className="flex bg-amber-300 gap-4 p-2 sticky top-0 z-10">
      <h1>My App</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/posts">Posts</Link>
    </header>
  )
}