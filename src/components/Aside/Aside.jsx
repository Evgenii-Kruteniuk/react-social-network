import React from "react";
import { NavLink } from "react-router-dom";
import newAside from "./Aside.module.css";

const Aside = () => {
  return (
    <aside className={newAside.nav}>
      <div className={newAside.item}>
        <a href="/profile">Profile</a>
      </div>
      <div className={newAside.item}>
        <a href="/dialogs">Messages</a>
      </div>
      <div className={newAside.item}>
        <a href="/news">News</a>
      </div>
      <div className={newAside.item}>
        <a href="/music">Music</a>
      </div>
      <div className={`${newAside.item} ${newAside.active}`}>
        <a href="/settings">Settings</a>
      </div>
    </aside>
  );
};

export default Aside;
