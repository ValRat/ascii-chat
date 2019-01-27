import React, { Component } from "react";
import "../../App.css";
import "./SidePanel.css"
import MessageList from "./Messenger/MessengeList";
import Title from "./Messenger/Title";
import SendMessageForm from "./Messenger/SendMessageForm";
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';


const instanceLocator = "v1:us1:1e3ffb93-6c72-4127-9fe8-357f6a6bd52b";

const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/1e3ffb93-6c72-4127-9fe8-357f6a6bd52b/token";

const username = "Nicholas";

const roomId = '19379139';


class SidePanel extends Component {
  constructor() {
    super()
    this.state = {
        messages: []
    }
    this.sendMessage = this.sendMessage.bind(this)
} 

componentDidMount() {


    const chatManager = new ChatManager({
        instanceLocator: instanceLocator,
        userId: username,
        tokenProvider: new TokenProvider({
            url: testToken
        })
    })
    
    chatManager.connect()
    .then(currentUser => {
        this.currentUser = currentUser
        console.log('Successful connection', currentUser);
        this.currentUser.subscribeToRoom({
        roomId: roomId,
        hooks: {
            onMessage: message => {
              console.log(message);
                this.setState({
                    messages: [...this.state.messages, message]
                })
            }
        }
    })
  })
}

sendMessage(text) {
    this.currentUser.sendMessage({
        text,
        roomId: roomId
    })
}

render() {
    return (
        <div className="SidePanel">
          <Title />
          <MessageList 
              roomId={this.state.roomId}
              messages={this.state.messages} />
          <SendMessageForm
              sendMessage={this.sendMessage} />
        </div>
    );
}
}



export default SidePanel;