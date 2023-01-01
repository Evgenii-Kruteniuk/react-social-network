import React from "react";
import s from "./Friends.module.css";
import { NavLink } from "react-router-dom";

let Friends = (props) => {
  return (
    <div>
      <div className={s.friends}>
        <NavLink
          to="/friends"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Friends
        </NavLink>
      </div>
      <div className={s.items}>
        <div className={s.it}>
          <img
            className={s.img}
            alt="#"
            src="https://avatars.mds.yandex.net/i?id=0f976508e33d0e5b31912ab7071e45559cb47233-6887327-images-thumbs&n=13"
          />
          <div className={s.name}>Sasha</div>
        </div>
        <div className={s.it}>
          <img
            className={s.img}
            alt="#"
            src="https://www.playingwithwords365.com/wp-content/uploads/2013/05/Friendship-Circle-Logo.jpg"
          />
          <div className={s.name}>Dima</div>
        </div>
        <div className={s.it}>
          <img
            className={s.img}
            alt="#"
            src="https://avatars.mds.yandex.net/i?id=0f976508e33d0e5b31912ab7071e45559cb47233-6887327-images-thumbs&n=13"
          />
          <div className={s.name}>Kate</div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
