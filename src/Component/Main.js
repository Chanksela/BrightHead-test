import React from "react";
import MainCSS from "./Main.module.css";
import { DarkMode } from "./DarkMode";

export const Main = () => {
  return (
    <div className={MainCSS.main}>
      <DarkMode id={MainCSS.header} />
      <div id={MainCSS.search}>
        <input type="search" id="search-user" />
      </div>
      <h5 id={MainCSS.footer}>
        Created by{" "}
        <a
          href="https://github.com/Chanksela"
          target="_blank"
          id={MainCSS.author}
        >
          {" "}
          Chanksela
        </a>
      </h5>
    </div>
  );
};
