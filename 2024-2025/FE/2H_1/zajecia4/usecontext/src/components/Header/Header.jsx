import React, { useContext } from 'react';
import { LevelContext } from '../../contexts/LevelContext';

export default function Header() {
  const level = useContext(LevelContext);
  switch (level) {
    case 1:
      return <h1>Header 1 {level}</h1>;
    case 2:
      return <h2>Header 2 {level}</h2>;
    case 3:
      return <h3>Header 3 {level}</h3>;
    case 4:
      return <h4>Header 4 {level}</h4>;
    case 5:
      return <h5>Header 5 {level}</h5>;
    case 6:
      return <h6>Header 6 {level}</h6>;
    default:
      return <h1>Header 1 {level}</h1>;
  }
}