import './App.css';
import Header from './components/Header/header';
import { BsFillTelephoneFill } from "react-icons/bs";

function App() {
  const imiona = ['michal', 'natalia', 'janek'];
  // const imionaPlusA = imiona.map((imie) => imie + 'a');
  return (
    <>
      { imiona.map((imie) => <Header title={imie} />) }
    </>
  );
}

export default App;
