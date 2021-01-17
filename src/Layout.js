import React, { useEffect, useState } from "react";
import "./App.css";

import api from "./Api";


function Layout({ Name, Image, Description, Next }) {
  const [character, setCharacter] = useState({});
  useEffect(() => {
    async function getCharacter() {
      setCharacter(await api.getCharacter(1));
      console.log(character);
    }
    getCharacter();
  }, []);
  return (
      <div class="wrapper">
        <div class="container logo-container">
          <img className="logo" src="./images/logo@2x.png" width="280" alt="" />
        </div>
        <div class="container display"  id="load-next">
          {Image}
          {Next}
        </div>
        <div class="container name"> {Name}</div>
        <div class="container description"> {Description}</div>
      </div>
  );
}

export default Layout;
