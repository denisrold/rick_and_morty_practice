import { Link } from "react-router-dom";
import styles from"./Card.module.css"
export default function Card(props) {
   return (
      <div className={styles.container}>
            <button className={styles.cerrar} onClick={props.onClose}>X</button>
            <Link to={`/detail/${props.id}`}>
               <h2 className={styles.name} >{props.name}</h2>
            </Link>
            <img className={styles.imagen} src={props.image} alt={props.name}></img>
            <hr></hr>
         <div className={styles.data}>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
         </div>      
      </div>
   );
}
