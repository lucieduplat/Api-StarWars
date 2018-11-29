import React, { Component } from "react";
import "./Characters.css";
import axios from "axios";
import DisplayCharacter from "./DisplayCharacter";

class Characters extends Component {
  state = {
    tabCharacters: []
  };

  componentDidMount() {
    axios
      .get("https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json")
      .then(result => result.data)
      .then(data => this.setState({ tabCharacters: data }));
  }

  render() {
    console.log(this.state.tabCharacters);
    return (
      <div>
        {this.state.tabCharacters.map((character, index) => {
          return (
            <DisplayCharacter
              key={index}
              image={character.image}
              name={character.name}
            />
          );
        })}
      </div>
    );
  }
}

export default Characters;
