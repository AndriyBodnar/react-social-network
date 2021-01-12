import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import state from "./redux/state";
import { addPost } from "./redux/state";

// let dialogsData = [
//   { id: 1, name: "Dima" },
//   { id: 2, name: "Andrey" },
//   { id: 3, name: "Sveta" },
//   { id: 4, name: "Roflan" },
//   { id: 5, name: "Max" },
// ];

// let messagesData = [
//   { id: 1, message: "Hello! How are you?" },
//   { id: 2, message: "Hello! How are you?2" },
//   { id: 3, message: "Hello! How are you?3" },
//   { id: 4, message: "Hello! How are you?4" },
//   { id: 5, message: "Hello! How are you?5" },
// ];

// let postsData = [
//   { id: 1, message: "Hello! ", likesCount: "2" },
//   { id: 2, message: "How are you?", likesCount: "4" },
// ];

ReactDOM.render(
  <React.StrictMode>
    <App state={state} addPost={addPost} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
