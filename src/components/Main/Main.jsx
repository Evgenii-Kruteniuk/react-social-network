import React from "react";
import newMain from "./Main.module.css";
import MyPosts from "./MyPosts/MyPosts";

function Main() {
  return (
    <main className={newMain.main}>
        <div>
          <img
            className={newMain.mainImg}
            src="https://sun9-64.userapi.com/c836236/v836236980/ded1/BmN9vD2UYR0.jpg"
            alt="#"
          />
        </div>
        <div>ava+dis</div>
        <MyPosts />
    </main>
  );
}

export default Main;
