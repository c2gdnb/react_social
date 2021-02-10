import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "../DialogItem/DialogItem";
import Message from "../Message/Message";
import "./Dialogs.css";

class Dialogs extends Component {
  render() {
    const dialogsData = [
      { id: 1, name: "Valera" },
      { id: 2, name: "Sasha" },
      { id: 3, name: "Viktor" },
      { id: 4, name: "Andrey" },
      { id: 5, name: "Sergey" },
    ];

    const messagesData = [
      { id: 1, message: "Hi" },
      { id: 2, message: "Message 2" },
      { id: 3, message: "How are you ?" },
      { id: 4, message: "Hello" },
      { id: 5, message: "Message 4" },
      { id: 6, message: "Mesaage 5" },
    ];

    return (
      <div className="dialogs">
        <div className="dialogs-items">
          {dialogsData.map((item) => (
            <DialogItem name={item.name} id={item.id} />
          ))}
        </div>
        <div className="messages">
          {messagesData.map((item) => (
            <Message message={item.message} />
          ))}
        </div>
      </div>
    );
  }
}

export default Dialogs;
