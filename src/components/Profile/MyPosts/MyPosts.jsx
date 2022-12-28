import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { posts } from "../../..";

const MyPosts = () => {
  let postsElement = posts.map((p) => <Post message={p.message} />);

  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElement}</div>
    </div>
  );
};

export default MyPosts;
