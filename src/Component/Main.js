import React, { useEffect, useState } from "react";
import MainCSS from "./Main.module.css";

export const Main = () => {
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [avatar, setAvatar] = useState("");
  const handleInput = (e) => {
    setInput(e.target.value);
    console.log(input);
  };
  // light/dark theme handler
  const [lightTheme, setLightTheme] = useState(false);
  const handleLightTheme = () => {
    setLightTheme(!lightTheme);
  };
  // test api

  useEffect(() => {
    fetch("https://api.github.com/users/example")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
  const setData = ({ login, html_url, avatar_url }) => {
    setName(login);
    setLink(html_url);
    setAvatar(avatar_url);
  };

  return (
    <div className={lightTheme ? MainCSS.dark : MainCSS.light}>
      <button
        className={lightTheme ? MainCSS.button : MainCSS.buttonLight}
        onClick={handleLightTheme}
      >
        {lightTheme ? "Light" : "Dark"}
      </button>
      <div id={lightTheme ? MainCSS.search : MainCSS.searchLight}>
        <form>
          {" "}
          <input type="search" id="search-user" onChange={handleInput} />
        </form>
      </div>
      <h4>
        <a target="_blank" href={link}>
          <img src={avatar} />
          <h5>{name}</h5>
        </a>
      </h4>
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
