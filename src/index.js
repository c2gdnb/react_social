import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const postData = [
  { id: 1, message: "Hi how are you ?", likesCount: "10" },
  { id: 2, message: "Good morning", likesCount: "3" },
];

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

ReactDOM.render(
  <App
    postData={postData}
    messagesData={messagesData}
    dialogsData={dialogsData}
  />,
  document.getElementById("root")
);

reportWebVitals();
