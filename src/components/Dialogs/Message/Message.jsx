import React from "react";
import s from "./Message.module.css";

const Message = (props) => {
  const newMessageElement = React.createRef();

  const addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  };
  return (
    <div className={s.message}>
      <textarea className={s.textarea} ref={newMessageElement}>
        {props.message}
      </textarea>

      <button className={s.button} onClick={addMessage}>
        Отправить сообщение
      </button>

      {/*<div className={s.message}>{props.message}</div>)*/}
    </div>
  );
};

export default Message;
