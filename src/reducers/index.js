import { combineReducers } from "redux";
import {
  RECEIVE_THREAD,
  TOGGLE_MESSAGE_DETAIL,
  RECEIVE_MESSAGE,
  RECEIVE_MESSAGES
} from "../actions";

export function uiReducer(state = { isMessageDetailOpen: false }, action) {
  switch (action.type) {
      case TOGGLE_MESSAGE_DETAIL:
        return { isMessageDetailOpen: !state.isMessageDetailOpen };
    default:
      return state;
  }
}

export function threadReducer(state = null, action) {
  switch (action.type) {
      case RECEIVE_THREAD:
          return action.thread;
      default:
          return state;
  }
}

export function messagesReducer(state = [], action) {
  switch (action.type) {
      case RECEIVE_MESSAGES:
          return action.messages;
      case RECEIVE_MESSAGE:
          return [...state, action.message];
      default:
          return state;
  }
};

export default combineReducers({
  ui: uiReducer,
  thread: threadReducer,
  messages: messagesReducer
  // combineReducers can combine as many reducers as you need
});
