import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <Message
          newMessageText={props.dialogsPage.newMessageText}
          updateNewMessageText={props.updateNewMessageText}
          clearMessage={props.clearMessage}
        />
      </div>
    </div>
  );
};

export default Dialogs;
