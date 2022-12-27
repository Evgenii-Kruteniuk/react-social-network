import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={s.mainImg}
          src="https://sun9-64.userapi.com/c836236/v836236980/ded1/BmN9vD2UYR0.jpg"
          alt="#"
        />
      </div>
      <div className={s.discriptionBlock}>ava+dis</div>
    </div>
  );
};

export default ProfileInfo;
