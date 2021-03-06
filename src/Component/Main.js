import React, { useState } from "react";
import MainCSS from "./Main.module.css";

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
    const response = await fetch(baseURL, {
      method: "GET",
      headers: {
        Authorization: process.env.TOKEN,
      },
    });
    const data = await response.json();
    array.push(data);
    setUserName(array[0].login);
    setProfile(array[0].html_url);
    setAvatar(array[0].avatar_url);
    console.log(wordEntered);
  }

  return (
    <div className={lightTheme ? MainCSS.dark : MainCSS.light}>
      <div
        className={lightTheme ? MainCSS.button : MainCSS.buttonLight}
        onClick={handleLightTheme}
      ></div>

      <div id={lightTheme ? MainCSS.search : MainCSS.searchLight}>
        <input
          type="text"
          value={wordEntered}
          onChange={handleFilter}
          placeholder="type here..."
        />
        {wordEntered.length > 0 && (
          <div
            className={
              !lightTheme ? MainCSS.typeaheadLight : MainCSS.typeaheadDark
            }
          >
            <a
              className={MainCSS.userInfo}
              href={profile}
              rel="noreferrer"
              target="_blank"
            >
              <img className={MainCSS.avatar} src={avatar} alt="avatar" />
              <p className={MainCSS.userName}>{userName}</p>
            </a>
          </div>
        )}
      </div>

      <h5 id={MainCSS.footer}>
        Created by{" "}
        <a
          href="https://github.com/Chanksela"
          target="_blank"
          rel="noreferrer"
          id={lightTheme ? MainCSS.author : MainCSS.authorLight}
        >
          {" "}
          Chanksela
        </a>
      </h5>
    </div>
  );
};
