import { renderHook, act } from '@testing-library/react-hooks'
import {useStates} from "./hook";

const states = {
  'state1': 'state1',
  'state2': 'state2',
  'state3': 'state3',
}

test('useStates hook', () => {
  describe('initialState', () => {
    const { result } = renderHook(() => useStates(states, 'state2'))

    expect(result.current[0]).toBe('state2');
  })

  describe('toggle state', () => {
    const { result } = renderHook(() => useStates(states, 'state2'))
    act(() => {
      result.current[1]("state3");
    });

    expect(result.current[0]).toBe('state3');
  })
})
