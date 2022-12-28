import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

let posts = [
  { message: "It's my first post" },
  { message: "It's my second post" },
  { message: "It's my third post" },
  { message: "It's my fourth post" },
];

let dialogs = [
  { id: 1, name: "Evgenii" },
  { id: 2, name: "Sasha" },
  { id: 3, name: "Ann" },
  { id: 4, name: "Rita" },
  { id: 5, name: "Masha" },
  { id: 6, name: "Kate" },
];
let messages = [
  { message: "Hello" },
  { message: "My name in Evgenii" },
  { message: "Hello world" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export { posts, dialogs, messages };
