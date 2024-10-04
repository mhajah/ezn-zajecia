import { LevelContext } from "../../contexts/LevelContext";
import { useContext } from "react";

// children - pozwala by komponent przyjmował inne komponenty jako swoje dzieci
// lub elementy htmla
// wystarczy uzyc {children} wewnatrz komponentu
// np. <Section> <h1> Hello </h1> </Section>
export default function Section({children}) {
  const level = useContext(LevelContext);
  return (
    // nazwa contextu musi byc taka sama jak w LevelContext.Provider
    // Context ten jest utworzony w contexts/LevelContext.jsx
    <LevelContext.Provider value={level + 1}>
      <div>
        {children}
      </div>
    </LevelContext.Provider>
  )
}