import { LevelContext } from "../../contexts/LevelContext"
import { useContext } from 'react';
import Text from '../Text/Text';

export default function Header() {
  // pobieramy sobie wartosc contextu LevelContext z provider'a w Section
  const level = useContext(LevelContext);
  switch (level) {
    case 1:
      return (
        <h1>Header 1 {level} <Text /></h1>
      )
    case 2:
      return (
        <h2>Header 2 {level} <Text /></h2>
      )
    case 3:
      return (
        <h3>Header 3 {level} <Text /></h3>
      )
    case 4:
      return (
        <h4>Header 4 {level} <Text /></h4>
      )
    case 5:
      return (
        <h5>Header 5 {level} <Text /></h5>
      )
    case 6:
      return (
        <h6>Header 6 {level} <Text /></h6>
      )
    default:
      return (
        <h1>Header 1 {level} <Text /></h1>
      )
  }
}