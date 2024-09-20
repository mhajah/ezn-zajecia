import './header.css';

function Header({ title, subtitle }) {
  return (
    <header>
      <h1>{ title }</h1>
      <p>{ subtitle }</p>
      <img src="https://via.placeholder.com/150" alt="placeholder" />
    </header>
  )
}

export default Header;