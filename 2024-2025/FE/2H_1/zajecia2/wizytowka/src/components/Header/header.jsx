import './header.css';

// function Header(props) {...}
function Header({ title, subtitle, img }) {
  return (
      <section>
        <img src={img} alt="zdjęcie"/>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </section>
  );
}

export default Header;