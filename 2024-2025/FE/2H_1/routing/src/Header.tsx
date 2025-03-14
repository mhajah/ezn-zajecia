import { Link } from '@tanstack/react-router';

export function Header() {
  return (
    <header
      style={{
        display: 'flex',
        gap: 10,
        backgroundColor: 'lightgray',
        padding: 10,
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/posts">Posts</Link>
    </header>
  );
}
