import React from "react";
import s from "./Aside.module.css";
import Friends from "./Friends/Friends";
import List from "./List/List";

const Aside = (props) => {
  return (
    <aside className={s.nav}>
      <List />
      <Friends />
    </aside>
  );
};

export default Aside;
