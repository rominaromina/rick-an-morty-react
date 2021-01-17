import React from "react";

function CharacterDescription({ status, gender, species }) {
  return (
      <div className="character-labels">
        <h3 className="character-label">Gender: {gender}</h3>
        <h3 className="character-label">Species: {species} </h3>
        <h3 className="character-label">Status: {status}</h3>
      </div>
  );
}

export default CharacterDescription;
