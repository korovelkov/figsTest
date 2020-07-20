import React, {useState} from 'react';

type Keys<T> = keyof T

export function useStates<T>(states: T, initialStateKey: Keys<T>): [T[Keys<T>], (stateKey: Keys<T>) => void] {
  const defaultState = states[initialStateKey];
  const [currentState, setState] = useState(defaultState);
  function getState(stateKey: Keys<T>): void {
    setState(states[stateKey]);
  }

  return [currentState, getState]
}
