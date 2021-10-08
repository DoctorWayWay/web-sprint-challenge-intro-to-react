// Write your Character component here
// Importing Libraries
import React from "react";
import styled from "styled-components";

// Component Styling
const StyleCharacter = styled.div`
  width: 20%;
  opacity: 40%;
  background-color: whitesmoke;
  border-radius: 20px;
  padding: 2%;
  transition: 0.2s ease-in-out;
  &:hover {
    opacity: 100%;
  }
  h3,
  p {
    color: #443e3e;
  }
`;

// Component
const Character = (props) => {
  const { name, birthYear, gender } = props;
  return (
    <StyleCharacter>
      <h3>{name}</h3>
      <p>Born: {birthYear}</p>
      <p>Gender: {gender}</p>
    </StyleCharacter>
  );
};

export default Character;
