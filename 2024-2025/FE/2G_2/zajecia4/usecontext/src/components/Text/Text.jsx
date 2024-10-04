import React, { useContext } from 'react';
import { LevelContext } from '../../contexts/LevelContext';

export default function Text() {
  const level = useContext(LevelContext);
  return (
    <p>Jestem na poziomie {level}</p>
  )
}