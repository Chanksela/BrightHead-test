import React, { useState } from "react";
import MainCSS from "./Main.module.css";
import key from "./secret";
export const Main = () => {
  // light/dark theme handler
  const [lightTheme, setLightTheme] = useState(false);
  const [userName, setUserName] = useState();
  const [profile, setProfile] = useState();
  const [avatar, setAvatar] = useState();
  const handleLightTheme = () => {
    setLightTheme(!lightTheme);
  };
  // searchbar & api

  const [wordEntered, setWordEntered] = useState("");
  let array = [];
  async function handleFilter(event) {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const baseURL = `https://api.github.com/users/${wordEntered}`;
    const response = await fetch(baseURL, key);
    const data = await response.json();
    array.push(data);
    setUserName(array[0].login);
    setProfile(array[0].html_url);
    setAvatar(array[0].avatar_url);
    console.log(array);
  }

  return (
    <div className={lightTheme ? MainCSS.dark : MainCSS.light}>
      <button
        className={lightTheme ? MainCSS.button : MainCSS.buttonLight}
        onClick={handleLightTheme}
      >
        {lightTheme ? "Light" : "Dark"}
      </button>
      <div id={lightTheme ? MainCSS.search : MainCSS.searchLight}>
        <input type="text" value={wordEntered} onChange={handleFilter} />
      </div>

      <a href={profile} target="_blank">
        <img src={avatar} />
      </a>
      <span>
        {" "}
        <p>{userName}</p>
      </span>
      <h5 id={MainCSS.footer}>
        Created by{" "}
        <a
          href="https://github.com/Chanksela"
          target="_blank"
          id={lightTheme ? MainCSS.author : MainCSS.authorLight}
        >
          {" "}
          Chanksela
        </a>
      </h5>
    </div>
  );
};
