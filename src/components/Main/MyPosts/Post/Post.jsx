import React from "react";
import post from "./Post.module.css";

function Post() {
  return (
    <div className={post.item}>
      <img src="https://android-obzor.com/wp-content/uploads/2022/03/28e4ac42f547e6ac0f50f7cfa916ca93.jpg" />
      Post 1
    </div>
  );
}

export default Post;
