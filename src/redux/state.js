import { renderIntireTree } from "../render";
let state = {
  profilePage: {
    posts: [
      { id: 1, message: "It's my first post" },
      { id: 2, message: "It's my second post" },
      { id: 3, message: "It's my third post" },
      { id: 4, message: "It's my fourth post" },
    ],
  },

  dialogsPage: {
    messages: [{ message: "Hello, my name is... and I'm from Russia" }],
    dialogs: [
      { id: 1, name: "Evgenii" },
      { id: 2, name: "Sasha" },
      { id: 3, name: "Ann" },
      { id: 4, name: "Rita" },
      { id: 5, name: "Masha" },
      { id: 6, name: "Kate" },
    ],
  },
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
  };
  state.profilePage.posts.push(newPost);
  renderIntireTree(state);
};

export default state;
