import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <main>
      <div>
        <img
          className={s.mainImg}
          src="https://sun9-64.userapi.com/c836236/v836236980/ded1/BmN9vD2UYR0.jpg"
          alt="#"
        />
      </div>
      <div>ava+dis</div>
      <MyPosts />
    </main>
  );
};

export default Profile;
