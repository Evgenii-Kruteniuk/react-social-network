import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";

const Profile = (props) => {
  let newPosts = props.myPosts;
  return (
    <main>
      <ProfileInfo />
      <MyPosts newPosts={newPosts} />
    </main>
  );
};

export default Profile;
