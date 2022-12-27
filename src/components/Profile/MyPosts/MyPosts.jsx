import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postData = [
    { message: "It's my first post" },
    { message: "It's my second post" },
    { message: "It's my third post" },
  ];
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
      <div className={s.posts}>
        <Post message={postData[0].message} />
        <Post message={postData[1].message} />
        <Post message={postData[2].message} />
      </div>
    </div>
  );
};

export default MyPosts;
