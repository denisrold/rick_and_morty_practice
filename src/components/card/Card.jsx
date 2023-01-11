import styles from"./Card.module.css"
export default function Card(props) {
   return (
      <div className={styles.container}>
         <div className={styles.buttoncontain}>
            <button onClick={props.onClose}>X</button>
         </div>   
            <h2 className={styles.name} >{props.name}</h2>
            <img className={styles.imagen} src={props.image} alt={props.name}></img>
            <hr></hr>
         <div className={styles.data}>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
         </div>      
      </div>
   );
}
