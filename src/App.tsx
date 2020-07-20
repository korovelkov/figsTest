import React from 'react';
import {useStates} from "./hook";
import './App.css';

enum EStatesKeys {
  STATE_ONE,
  STATE_TWO,
  STATE_THREE
}

const states = {
  [EStatesKeys.STATE_ONE]: 'state1',
  [EStatesKeys.STATE_TWO]: ['state2'],
  [EStatesKeys.STATE_THREE]: {key: 'state3'}
};

function App() {
  const [currentState, setState] = useStates(states, EStatesKeys.STATE_THREE);
  setState(EStatesKeys.STATE_TWO);
  console.log(currentState);
  return (
    <>
      <button onClick={() => setState(EStatesKeys.STATE_ONE)}>setState 1</button>
      <button onClick={() => setState(EStatesKeys.STATE_TWO)}>setState 2</button>
      <button onClick={() => setState(EStatesKeys.STATE_THREE)}>setState 3</button>
    </>
  );
}

export default App;
