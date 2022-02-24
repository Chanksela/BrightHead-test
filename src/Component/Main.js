import React, { useState } from "react";
import MainCSS from "./Main.module.css";

export const Main = () => {
  const [lightTheme, setLightTheme] = useState(false);
  const handleLightTheme = () => {
    setLightTheme(!lightTheme);
    console.log(lightTheme);
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
        <input type="search" id="search-user" />
      </div>
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
