import { LevelContext } from "../../contexts/LevelContext"
import { useContext } from 'react';
import Text from '../Text/Text';

export default function Header() {
  const level = useContext(LevelContext);
  switch (level) {
    case 1:
      return <h1>Header {level} <Text /> </h1>
    case 2:
      return <h2>Header {level} <Text /> </h2>
    case 3:
      return <h3>Header {level} <Text /> </h3>
    case 4:
      return <h4>Header {level} <Text /> </h4>
    case 5:
      return <h5>Header {level} <Text /> </h5>
    case 6:
      return <h6>Header {level} <Text /> </h6>
    default:
      return <h1>Header {level} <Text /> </h1>
  }
}