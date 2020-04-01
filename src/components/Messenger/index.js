import React from 'react'
import { Route } from 'react-router-dom'

import ThreadsContainer from './ThreadsContainer'
import ChatContainer from './Chat/ChatContainer'

const Messenger = () => (
  <div className="messenger">
    <ThreadsContainer />
    <Route path={`/messages/:username`} component={ChatContainer} />
  </div>
)

export default Messenger
