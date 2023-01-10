export default function SearchBar(props) {
   return (
      <div>
          <input type='search'></input>
          <button onClick={props.onSearch}>Agregar</button> 
      </div>
   );
}
