import style from"./SearchBar.module.css"
import { useState } from "react";


export default function SearchBar({onSearch}) {
   const [characters, setCharacters] = useState("")

   const handleChange = (event) => {
      setCharacters(event.target.value)
   }
   return (
      <div style={style}>
          <input type='search' value={characters} onChange={handleChange}></input>
          <button onClick={()=>{onSearch(characters)}}>Agregar</button> 
      </div>
   );
}
