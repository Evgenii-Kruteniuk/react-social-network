import React from "react";
import post from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts() {
  return (
    <div>
      My post
      <div>New post</div>
      <div>
        <Post message="It's my first post" />
        <Post message="It's my second post" />
        <Post message="It's my third post" />
      </div>
    </div>
  );
}

export default MyPosts;
