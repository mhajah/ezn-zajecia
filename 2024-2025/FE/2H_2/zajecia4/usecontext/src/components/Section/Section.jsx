import { LevelContext } from "../../LevelContext";
import { useContext } from 'react';

export default function Section({children}) {
  const level = useContext(LevelContext);
  return (
    <LevelContext.Provider value={level+1}>
      <div>
        {children}
      </div>
    </LevelContext.Provider>
  )
}