import React, { Component } from "react";
import DialogItem from "../DialogItem/DialogItem";
import Message from "../Message/Message";
import "./Dialogs.css";

class Dialogs extends Component {
  render() {
    const dialogsElements = this.props.dialogsData.map((item) => (
      <DialogItem name={item.name} id={item.id} />
    ));

    const messageElements = this.props.messagesData.map((item) => (
      <Message message={item.message} />
    ));

    return (
      <div className="dialogs">
        <div className="dialogs-items">{dialogsElements}</div>
        <div className="messages">{messageElements}</div>
      </div>
    );
  }
}

export default Dialogs;
