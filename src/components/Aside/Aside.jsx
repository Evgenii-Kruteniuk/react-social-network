import React from "react";
import newAside from "./Aside.module.css";

function Aside() {
  return (
    <aside className={newAside.nav}>
      <div>
        <a className={newAside.item} href="">
          Profile
        </a>
      </div>
      <div>
        <a className={newAside.item} href="">
          Messages
        </a>
      </div>
      <div>
        <a className={newAside.item} href="">
          News
        </a>
      </div>
      <div>
        <a className={newAside.item} href="">
          Music
        </a>
      </div>
      <div>
        <a className={`${newAside.item} ${newAside.active}`} href="">
          Settings
        </a>
      </div>
    </aside>
  );
}

export default Aside;
