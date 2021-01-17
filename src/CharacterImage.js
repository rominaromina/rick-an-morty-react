import React from "react";

function CharacterImage({ image, name }) {
  return (
    <div className="character-image-container">
      <img src={image} alt={name} className="character-image" />
    </div>
  );
}
export default CharacterImage;
