import './App.css';
import Header from './components/Header/header';
// https://react-icons.github.io/react-icons/
import { DiAndroid } from "react-icons/di";
import Contact from './components/Contact/contact';
import About from './components/About/about';
import Skills from './components/Skills/skiils';

function App() {
  const imiona = ['michal', 'natalia', 'janek']
  // tablica 'imiona', ale kazdy element ma dodane 'a'
  const imionaplusa = imiona.map((imie) => imie + 'a');

  return (
    <main>
      <section className='myCard'>
        <Header 
          img="https://cdn.onemars.net/sites/perfect-fit_pl_W7ZCj_JAs8/image/nadpobudliwy-pies_1633946158412.png"
          title="Michał"
          subtitle="Frontend Developer"
        />

        <Contact 
          phone="123123123" 
          website="www.google.com"  
        />

        <About />

        <Skills skillsList={['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']} />
      </section>
    </main>
  );
}

export default App;
