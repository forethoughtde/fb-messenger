import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router";

import ThreadsContainer from "./ThreadsContainer";
import ConversationContainer from "./Conversation/ConversationContainer";

const Messenger = ({ match }) => (
  <div className="messenger">
    <ThreadsContainer />
    <Route path={`${match.url}/:username`} component={ConversationContainer} />
  </div>
);

Messenger.propTypes = {
  match: PropTypes.object.isRequired
};

export default Messenger;
