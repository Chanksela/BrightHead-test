import React, { useState } from "react";
import MainCSS from "./Main.module.css";

export const Main = () => {
  // light/dark theme handler
  const [lightTheme, setLightTheme] = useState(false);
  const handleLightTheme = () => {
    setLightTheme(!lightTheme);
  };
  // searchbar & api
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const baseURL = "https://api.github.com/users";
  async function handleFilter(event) {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const response = await fetch(baseURL);
    const data = await response.json();

    console.log(data);

    const newFilter = data.filter((value) => {
      return value.login.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
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
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value) => {
            return (
              <a className="dataItem" href={value.html_url} target="_blank">
                <p>{value.login} </p>
              </a>
            );
          })}
        </div>
      )}

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
