import React, { Component } from 'react'

import ChatBar from './ChatBar';
import Messages from './Messages';
import UserDetail from './UserDetail';

class Chat extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { match } = this.props
    const { username } = match.params
    const { messages } = this.props

    if (!messages.length) {
      return <h2>Loading...</h2>
    }

    return (
      <div className="chat">
        {<ChatBar username={username} match={match} totalMessages={messages.length} />}
        <div className="chat-content">
        <Messages messages={messages} username={username} />
        <UserDetail username={username} />
        </div>
      </div>
    )
  }
}

export default Chat
