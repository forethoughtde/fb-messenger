import React, { Component } from "react";
import { Route } from "react-router";
import PropTypes from "prop-types";
import styled from "styled-components";

import ChatBar from "./ChatBar";
import UserDetail from "./UserDetail";
import Messages from "./Messages";
import Modal from "../../Modal";

const MessagesWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 70%;
`;

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  };

  render() {
    const { messages = [], match } = this.props;
    const { username } = match.params;
    const { showModal } = this.state;

    if (!messages.length) {
      return <h2>Loading...</h2>;
    }

    return (
      <ChatWrapper>
        <ChatBar username={username} match={match} />
        <MessagesWrapper>
          <Modal show={showModal} toggleModal={this.toggleModal} />
          <Messages
            messages={messages}
            username={username}
            toggleModal={this.toggleModal}
          />
          <Route
            path={`${match.url}/detail`}
            component={() => (
              <UserDetail username={username} toggleModal={this.toggleModal} />
            )}
          />
        </MessagesWrapper>
      </ChatWrapper>
    );
  }
}

Chat.propTypes = {
  messages: PropTypes.array,
  username: PropTypes.string.isRequired,
  match: PropTypes.object.isRequired
};

export default Chat;
