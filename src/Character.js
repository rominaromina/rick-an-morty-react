import React, { useEffect, useState } from "react";
import api from "./Api";
import CharacterName from "./CharacterName";
import CharacterImage from "./CharacterImage";
import CharacterDescription from "./CharacterDescription";
import Layout from "./Layout";
import CharacterPlaceholder from "./CharacterPlaceholder";
import NextCharacter from "./NextCharacter";
import CharacterContext from "./CharacterContext";

export function Character({ match }) {
  const [character, setCharacter] = useState({});
  useEffect(() => {
    async function getCharacter() {
      setCharacter( await api.getCharacter(match.params.id || 1));
      console.log(character);
    }
    getCharacter();
  }, [match.params.id]);
  return (
      <CharacterContext.Provider
        value={{
          character,
          setCharacter,
        }}
      >
        <CharacterPlaceholder name={character.name} />
        <Layout
          Next={<NextCharacter />}
          Name={<CharacterName name={character.name} />}
          Image={<CharacterImage image={character.image} />}
          Description={
            <CharacterDescription
              gender={character.gender}
              species={character.species}
              status={character.status}
            />
          }
        />
      </CharacterContext.Provider>
  );
}

export default Character;
