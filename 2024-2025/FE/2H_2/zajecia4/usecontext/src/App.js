import './App.css';
import Section from './components/Section/Section';
import Header from './components/Header/Header';

function App() {
  return (
    <Section>
      <Header/>
      <Section>
        <Header />
        <Header />
        <Header />
        <Section>
          <Header />
          <Header />
          <Header />
          <Section>
            <Header />
            <Header />
            <Header />
          </Section>
        </Section>
      </Section>
    </Section>
  );
}

export default App;
