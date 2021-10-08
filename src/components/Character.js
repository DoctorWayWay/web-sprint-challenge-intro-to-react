// Write your Character component here
// Importing Libraries
import React from "react";
import styled from "styled-components";

// Component Styling
const StyleCharacter = styled.div`
  width: 20%;
  background-color: whitesmoke;
  border-radius: 20px;
  padding: 2%;
  h3 {
    color: #443e3e;
  }
`;

// Component
const Character = (props) => {
  const { name, birthYear, gender } = props;
  return (
    <StyleCharacter>
      <h3>Testing</h3>
    </StyleCharacter>
  );
};

export default Character;
