import React, {Component} from 'react'

import * as api from '../../../api/message'
import Chat from './Chat'

class ChatContainer extends Component {
    constructor(props){
        super(props)

        this.state = {
            messages : [],
        }
    }

    componentDidMount(){
        this.fetchMessages(this.props.match.params.username)
    }

    fetchMessages = username=>{
        this.setState({
            messages : [],
        })
        // the following setTimeout is to simulate network latency in order to show a "loading" component
        setTimeout(()=>{
            api.fetchMessages(username).then(messages=>{
                this.setState({
                    messages,
                })
            })
        }, 1000)
    }

    // https://reactjs.org/docs/react-component.html#componentdidupdate
    componentDidUpdate(prevProps){
        /* Hint. Now you don't need to iterate the messages array
        to see if the username in the url is different from the username's conversation you
        are displaying. Use the prevProps parameter and the this.props in the following condition to
        replace the hardcoded false  */
        const needsToFetchUser = prevProps !== this.props
        if (needsToFetchUser) {
            this.fetchMessages(this.props.match.params.username)
        }
    }

    render(){
        const { messages } = this.state
        const { match } = this.props

        return (
            <Chat messages={messages} match={match}/>
            // hint, which component and props do you think we should return here?
        )
    }
}

export default ChatContainer
