import { React, useContext } from 'react';
import { LevelContext } from '../../contexts/LevelContext';

export default function Section({ children }) {
  const level = useContext(LevelContext);
  return (
  <LevelContext.Provider value={level + 1}>
    <section>
      {children}
    </section>
  </LevelContext.Provider>
  );
}