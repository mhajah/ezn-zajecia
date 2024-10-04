import { useContext } from 'react';
import { LevelContext } from '../../LevelContext';

export default function Header() {
  const level = useContext(LevelContext);
  switch (level) {
    case 1:
      return <h1>Header {level}</h1>;
    case 2:
      return <h2>Header {level}</h2>;
    case 3:
      return <h3>Header {level}</h3>;
    case 4: 
      return <h4>Header {level}</h4>;
    case 5: 
      return <h5>Header {level}</h5>;
    case 6:
      return <h6>Header {level}</h6>;
    default:
      return <h6>Header {level}</h6>;
  }
}