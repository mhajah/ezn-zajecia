import './App.css';
import Section from './components/Section/Section';
import Header from './components/Header/Header';

function App() {
  return (
    // automatycznie powieksza level
    // w zaleznosci od zagniezdzenia
    // dzieki contextowi
    // na poczatku domyslnie jest level = 0
    // i z kazdym zagniezdzeniem zwieksza sie o 1
    <Section>
      <Header/>
      <Section>
        <Header/>
        <Header/>
        <Header/>
        <Section>
          <Header/>
          <Header/>
          <Header/>
          <Section>
            <Header/>
            <Header/>
            <Header/>
            <Section>
              <Header/>
              <Header/>
              <Header/>
              <Section>
                <Header/>
                <Header/>
                <Header/>
                <Header/>
              </Section>
            </Section>
          </Section>
        </Section>
        </Section>
    </Section>
  );
}

export default App;
