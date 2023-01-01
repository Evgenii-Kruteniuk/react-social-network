import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import { Route, Routes } from "react-router-dom";

const App = (props) => {
  return (
    <div className="wrapper">
      <Header />
      <Aside />
      <div className="wrapperContent">
        <Routes>
          <Route
            path="/"
            element={<Profile posts={props.state.profilePage.posts} />}
          />
          <Route
            path="/profile"
            element={<Profile posts={props.state.profilePage.posts} />}
          />
          {/*Если совпадение в url точь в точь, то пишем /dialogs ( В React v6 теперь не нужно использовать exact, все пути по умолчанию точно должны совпадать), тогда в диалогах Евгений, Саша, Аня... не отобразятся т. к. их url будет dialogs/2. Если мы хотим, чтобы все работало даже если после dialogs было что-то написано, то ставим /* после /dialogs */}
          <Route
            path="/dialogs/*"
            element={
              <Dialogs
                dialogs={props.state.dialogsPage.dialogs}
                messages={props.state.dialogsPage.messages}
              />
            }
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
