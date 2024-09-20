import './App.css';
import Header from './components/Header/header';
import { GiWorld } from "react-icons/gi";
import { BsFillTelephoneFill } from "react-icons/bs";

function App() {
  const names = ["Natalia", "Kasia", "Ola"];
  const newNames = names.map((name) => name + ' Nowak');
  return (
    <>
      <img src='https://picsum.photos/200/300' alt='random' />

      <GiWorld className='abc' fontSize={90} />
      <BsFillTelephoneFill fontSize={90} />
      {
        newNames.map((name) => (
          <Header tytul={name} subtitle="12312312"/>
        ))
      }
    </>
  );
}

export default App;
