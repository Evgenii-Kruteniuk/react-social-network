import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";

const Profile = (props) => {
  return (
    <main>
      <ProfileInfo />
      <MyPosts
        posts={props.state.profilePage.posts}
        newPostText={props.state.profilePage.newPostText}
        updateNewPostText={props.updateNewPostText}
        addPost={props.addPost}
      />
    </main>
  );
};

export default Profile;
