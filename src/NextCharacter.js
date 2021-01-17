import React, { useContext } from "react";
import api from "./Api";
import CharacterContext from "./CharacterContext";
import nProgress from "nprogress";

function NextCharacter() {
  const context = useContext(CharacterContext);
  async function handleClick() {
    nProgress.start();
    context.setCharacter(await api.getCharacter(context.character.id + 1));
    nProgress.done();
  }
  console.log(context);
  return (
    <div className="next-container">
    <button className="next-button" onClick={handleClick}>Next</button>
    </div>
  );
}

export default NextCharacter;
