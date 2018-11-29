import React from "react";
import "./DisplayCharacter.css";

const DisplayCharacter = props => {
  return (
    <div className="wars">
      {props.name}
      <br />
      <img src={props.image} alt={props.name} />
    </div>
  );
};

export default DisplayCharacter;
