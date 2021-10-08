// Importing Libraries
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
// Importing Components
import Character from "./components/Character";
// Importing StyleSheets
import "./App.css";

// App Component Styling
const FlexWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people")
      .then((response) => {
        console.log(response);
        setCharacters(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <FlexWrapper>
        {characters ? (
          characters.map((character) => {
            return (
              <Character
                name={character.name}
                birthYear={character["birth_year"]}
                gender={character.gender}
              />
            );
          })
        ) : (
          <h2>Cannot Load...</h2>
        )}
      </FlexWrapper>
    </div>
  );
};

export default App;
