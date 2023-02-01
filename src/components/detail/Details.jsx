import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import{ Link } from"react-router-dom"
import styles from"./Details.module.css"
const Details = ()=>{
    const { detailId } = useParams();
    const [character, setCharacter] = useState({}); 

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);
 return (
    <div>
      
      <div className={styles.contains}>

        <div className={styles.name}>
          <h1>Nombre: {character?.name}</h1>
        </div>
        <div className="style.imageConteiner">
          <img src={character?.image} alt="imagen" className={character?.status == "Dead"? styles.dead:styles.image}/>
        </div>
      
        <div className={styles.status}>
          <p>Especie: {character?.species}</p>
          <p>Genero: {character?.gender}</p>
          <p>Estado: {character?.status}</p>
          <p>ID: {character?.id}</p>
        </div>

        <div className={styles.origin}>
          <p>{character?.origin?.name}</p>
        </div>
    </div>
    <div className={styles.buttonHome}>
        <Link to="/home" className={styles.link}>Go Home</Link>
    </div>
    </div>

 )   
} 

export default Details;