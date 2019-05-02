import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ConversationBar from "./ConversationBar";
import ConversationContent from "./Content";

const ConversationSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 70%;
`;

const Conversation = ({ conversation, match }) => {
  const { username } = match.params;

  return (
    <ConversationSection>
      <ConversationBar key="bar" username={username} match={match} />
      <ConversationContent
        key="content"
        match={match}
        conversation={conversation}
        username={username}
      />
    </ConversationSection>
  );
};

Conversation.propTypes = {
  conversation: PropTypes.array,
  match: PropTypes.object.isRequired
};

export default Conversation;
