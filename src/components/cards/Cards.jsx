import Card from '../card/Card';
import styles from"./Cards.module.css"


export default function Cards({ characters }) {
   return  <div className={styles.divs}>
      {characters.map((element)=>{
         return(
           
            <Card 
            key = {element.id}
            name = {element.name}
            species = {element.species}
            gender = {element.gender}
            image = {element.image}
            onClose = {() => alert('Emulamos que se cierra la card')}
            />
          
         )
      })}
   </div>;
}
