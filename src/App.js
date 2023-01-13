import "./App.css";
import Nav from "./components/nav/Nav";
import Cards from "./components/cards/Cards.jsx";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      <div>
        <Nav onSearch={onSearch} />
      </div>
      <hr />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Cards onClose={onClose} characters={characters} />
      </div>
      <hr />
    </div>
  );
}

export default App;

/*
 */
