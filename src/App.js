import "./App.css";
import Nav from "./components/nav/Nav";
import Cards from "./components/cards/Cards.jsx";
import About from "./components/about/About";
import Details from "./components/detail/Details";
import Forms from "./components/forms/forms";
import Favorites from "./components/Favorites/Favorites.jsx";
import React, { useState, useEffect } from "react";

import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  const [crashcharacters, setcrashCharacters] = useState([]);
  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (crashcharacters.includes(data.id)) {
          let input = document.querySelector("#inputs");
          input.value = "";
          return window.alert("ya estas visualizando a ese personaje");
        } else if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
          setcrashCharacters(() => [...crashcharacters, data.id]);
          console.log(crashcharacters);
          let input = document.querySelector("#inputs");
          input.value = "";
        } else {
          let input = document.querySelector("#inputs");
          input.value = "";
          window.alert("No hay personajes con esa ID");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));

    setcrashCharacters(crashcharacters.filter((e) => e !== id));
  };

  const location = useLocation();
  //esto lo haria en una base de datos, en este caso lo estoy haciendo en forma local.
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = "admin@admin.com";
  const password = "33pass";

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  }
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return (
    <div className="App" style={{ padding: "25px" }}>
      <div>{location.pathname !== "/" && <Nav onSearch={onSearch} />}</div>

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Routes>
          <Route path="/" element={<Forms login={login} />} />
          <Route
            path="home"
            element={<Cards onClose={onClose} characters={characters} />}
          />

          <Route path="About" element={<About />} />
          <Route path="detail/:detailId" element={<Details />} />
          <Route path="Favorites" element={<Favorites />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
