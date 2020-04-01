import React, { Component } from 'react'

import * as api from '../../../api/message'
import Chat from './Chat'

class ChatContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      messages: [],
    }
  }

  componentDidMount() {
    this.fetchMessages(this.props.match.params.username)
  }

  fetchMessages = username => {
    this.setState({
      messages: [],
    })
    // the following setTimeout is to simulate network latency in order to show a "loading" component
    setTimeout(() => {
      api.fetchMessages(username).then(messages => {
        this.setState({
          messages,
        })
      })
    }, 1000)
  }

  // https://reactjs.org/docs/react-component.html#componentdidupdate
  componentDidUpdate(prevProps) {
    /* Hint. Now you don't need to iterate the messages array
    to see if the username in the url is different from the username's conversation you
    are displaying. Use the prevProps parameter and the this.props in the following condition to
    replace the hardcoded false  */
    /*const needsToFetchUser =  false
    if (needsToFetchUser) {
      this.fetchMessages(this.props.match.params.username)
    }*/
  }

  render() {
    const { messages } = this.state
    const { match } = this.props

    // QUESTION 6. Do you think this is a good place to have this needsToFetchUser logic?
    // Can you please move needsToFetchUser condition to ChatContainer.componentDidUpdate method?
    // https://reactjs.org/docs/react-component.html#componentdidupdate
   /* const needsToFetchUser =
      messages.length &&
      !messages.find(({ from, to }) => to === username || from === username)
    if (needsToFetchUser) {
      this.fetchMessages(this.props.match.params.username)
    }*/

    return (
        <Chat messages={messages} match={match} />
      // hint, which component and props do you think we should return here?
    )
  }
}

export default ChatContainer
