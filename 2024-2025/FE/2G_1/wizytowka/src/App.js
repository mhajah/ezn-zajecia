import './App.css';
import Header from './components/Header/header';
import { GiWorld } from "react-icons/gi";

function App() {
  const names = ['Jane', 'Michal', 'Natalia'];
  // const newNames = names.map((name) => name.toUpperCase());
  const newNames = names.map((name) => name + ' Nowak');
  return (
    <>
      <GiWorld fontSize={56}/>
      {
        newNames.map((name) => (
          <Header title={name} subtitle="Subtitle" />
        ))
      }
    </>
  );
}

export default App;
