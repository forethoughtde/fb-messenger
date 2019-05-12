import React, { Component } from "react";
import { Route } from "react-router";
import PropTypes from "prop-types";

import ChatBar from "./ChatBar";
import UserDetail from "./UserDetail";
import Messages from "./Messages";
import Modal from "../../Modal";

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
      <div className="conversation">
        <ChatBar username={username} match={match} />
        <div className="conversation-content">
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
        </div>
      </div>
    );
  }
}

Chat.propTypes = {
  messages: PropTypes.array,
  match: PropTypes.object.isRequired
};

export default Chat;

// const Conversation = ({ conversation, match }) => {
//   const { username } = match.params;

//   return (
//     <div className="conversation">
//       <ConversationBar key="bar" username={username} match={match} />
//       <ConversationContent
//         key="content"
//         match={match}
//         conversation={conversation}
//         username={username}
//       />
//     </div>
//   );
// };
