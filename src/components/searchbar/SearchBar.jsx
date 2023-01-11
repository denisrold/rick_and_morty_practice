import style from"./SearchBar.module.css"

export default function SearchBar(props) {
   return (
      <div style={style}>
          <input type='search'></input>
          <button onClick={props.onSearch}>Agregar</button> 
      </div>
   );
}
