import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import state, { subscribe } from "./redux/state";
import { BrowserRouter } from "react-router-dom";
import {
  addPost,
  updateNewPostText,
  clearMessage,
  updateNewMessageText,
} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));
export let renderIntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          updateNewPostText={updateNewPostText}
          updateNewMessageText={updateNewMessageText}
          addPost={addPost}
          clearMessage={clearMessage}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};

renderIntireTree(state);
subscribe(renderIntireTree);
