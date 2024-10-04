import React, { useContext } from "react";
import { LevelContext } from "../../contexts/LevelContext";

export default function Text() {
  // pobieramy sobie wartosc contextu LevelContext z provider'a w Section
  const level = useContext(LevelContext);
  return <p>Jestem na poziomie {level}</p>;
}