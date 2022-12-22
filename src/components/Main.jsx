import React from "react";
import newMain from "./Main.module.css";

function Main() {
  return (
    <main className={newMain.main}>
      <div>
        <div>
          <img
            className={newMain.mainImg}
            src="https://sun9-64.userapi.com/c836236/v836236980/ded1/BmN9vD2UYR0.jpg"
            alt="#"
          />
        </div>
        <div>ava+dis</div>
        <div>
          my post
          <div>new post</div>
          <div>
            <div>post 1</div>
            <div>post 2</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
