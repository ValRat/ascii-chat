import React, { Component } from "react";
import "../../../App.css";
import "./MessengeList.css"

class MessageList extends Component {
  render() {
      return (
          <ul id="style-2"className="message-list">
              {this.props.messages.map((message, index) => {
                  return (
                    <div className={this.props.username === message.senderId ? 'rightAlign' : 'leftAlign'}>
                    <li key={message.id} className="message">
                      <div>{message.senderId}</div>
                      <div>{message.text}</div>
                    </li>
                    </div>
                  )
              })}
          </ul>
      )
  }
}


export default MessageList;