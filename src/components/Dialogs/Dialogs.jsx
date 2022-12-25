import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>
          <NavLink to="/dialogs/1"> Evgenii </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2"> Sasha </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3"> Ann </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/4"> Rita </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/5"> Masha </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/6"> Kate </NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hello</div>
        <div className={s.message}>My name in Evgenii</div>
        <div className={s.message}>Hello world</div>
      </div>
    </div>
  );
};

export default Dialogs;
