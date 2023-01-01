import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElement = props.posts.map((p) => <Post message={p.message} />);

  /*Говорим React создай ссылку на newPostElement */
  let newPostElement = React.createRef();

  const addPost = () => {
    /*Присваиваем переменной значение, которое будет в ссылке */
    let text = newPostElement.current.value;
    alert(text);
  };
  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          {/*Привязываем ссылку newPostElement к textarea */}
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElement}</div>
    </div>
  );
};

export default MyPosts;
