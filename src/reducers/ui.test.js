import {
  toggleMessageDetail,
  TOGGLE_MESSAGE_DETAIL,
} from '../actions/ui'

import uiReducer, { getInitialState } from './ui'

/*

What BEHAVIOUR do we have to test?

Task 1, write the describe and its
Task 2, implement the expectations

*/
describe('UI reducer', () => {
  it(`should set the initial state when the state is undefined`, () => {
    const state = undefined;
    const actual = uiReducer(state);
    const expected = getInitialState();
    expect(actual).toEqual(expected);
  });

  it(`should return the previous state if the action is not handled`, () => {
    const state = getInitialState();
    const actual = uiReducer(state, { type: 'SOME_ACTION'});
    expect(actual).toBe(state);
  });

  it(`should return a new state if the action is ${TOGGLE_MESSAGE_DETAIL}`, () => {
    const state = getInitialState();
    const actual = uiReducer(state, { type: TOGGLE_MESSAGE_DETAIL});
    expect(actual).toEqual({ isMessageDetailOpen: false});
    const actual2 = uiReducer(actual, { type: TOGGLE_MESSAGE_DETAIL});
    expect(actual2).toEqual({ isMessageDetailOpen: true});
  });

// BONUS
  it(`it should not mutate the state or the action`, () => {});
})
