import React from "react";
import s from "./Message.module.css";

const Message = (props) => {
  let newMessageElement = React.createRef();

  let addMessage = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  };
  const clearMessage = () => {
    props.clearMessage();
  };

  return (
    <div className={s.message}>
      <textarea
        onChange={addMessage}
        className={s.textarea}
        ref={newMessageElement}
        value={props.newMessageText}
      />
      <button className={s.button} onClick={clearMessage}>
        Отправить сообщение
      </button>
    </div>
  );
};

export default Message;
