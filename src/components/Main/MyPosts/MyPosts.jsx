import React from "react";
import post from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts() {
  return (
    <div>
      My post
      <div>New post</div>
      <div>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default MyPosts;
