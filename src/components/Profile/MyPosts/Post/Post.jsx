import React from "react";
import post from "./Post.module.css";
import { useState } from "react";

function Post(props) {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const likez = () => {
    setLike(like + 1);
  };
  const dislikez = () => {
    setDislike(dislike - 1);
  };
  return (
    <div className={post.item}>
      <img src="https://android-obzor.com/wp-content/uploads/2022/03/28e4ac42f547e6ac0f50f7cfa916ca93.jpg" />
      {props.message}
      <div>
        <span>Count likes: {like}</span>
        <button onClick={likez}>like</button>
        <span>Count dislikes: {dislike}</span>
        <button onClick={dislikez}>dislike</button>
      </div>
    </div>
  );
}

export default Post;
