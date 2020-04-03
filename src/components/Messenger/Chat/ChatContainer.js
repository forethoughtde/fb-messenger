import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// You'll implement the receiveMessages in part 2 question 3
import {receiveMessages, receiveThread} from '../../../actions';
import * as api from "../../../api/message";
import Chat from "./Chat";

// This is a selector function
function selectMessages(state) {
  return state.messages;
}


const ChatContainer = props => {
  const { match } = props;
  const { username } = match.params;

  const messages = useSelector(selectMessages);
  const dispatch = useDispatch();

  useEffect(() => {
    api.fetchMessages(username).then(messages => dispatch(receiveMessages(messages)));
  }, [username]);

  return <Chat messages={messages} match={match} />;
};

export default ChatContainer;
