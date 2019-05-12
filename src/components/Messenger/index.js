import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import styled from "styled-components";

import colours from "../../styles/export/colours.css";
import ThreadsContainer from "./ThreadsContainer";
import ChatContainer from "./Chat/ChatContainer";

const MessengerWrapper = styled.div`
  display: flex;
  flex: 1;
  border-right: 1px solid ${colours.mediumGrey};
`;

const Messenger = ({ match }) => (
  <MessengerWrapper>
    <ThreadsContainer />
    <Route path={`${match.url}/:username`} component={ChatContainer} />
  </MessengerWrapper>
);

Messenger.propTypes = {
  match: PropTypes.object.isRequired
};

export default Messenger;
