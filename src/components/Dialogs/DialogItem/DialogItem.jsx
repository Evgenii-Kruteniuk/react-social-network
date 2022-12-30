import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";

const DialogItem = (props) => {
  return (
    <div className={s.dialog}>
      <img
        className={s.img}
        src="https://avatars.dzeninfra.ru/get-zen_doc/1899873/pub_5dcdb90634bb04739962fe7b_5dd29488e5968126aa191e1a/scale_1200"
      />
      <NavLink
        to={"/dialogs/" + props.id}
        className={
          ((navData) => (navData.isActive ? s.active : s.item), s.text)
        }
      >
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
