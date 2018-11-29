import React from "react";
import "./Header.css";

const Header = props => {
  return (
    <p className="titre">
      {" "}
      My API {props.name} with {props.status}{" "}
    </p>
  );
};

export default Header;
