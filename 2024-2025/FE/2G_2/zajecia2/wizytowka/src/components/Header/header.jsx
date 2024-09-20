import './header.css';

function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1>
      <p>Moja pierwsza wizytówka w React</p>
    </header>
  );
}

export default Header;
