import Card from '../card/Card';
import styles from"./Cards.module.css"


export default function Cards({ characters, onClose }) {
   return  <div className={styles.divs}> {
      characters.map(({id, name, species, gender, image}) => {
        return <Card
         key={id}
         name={name}
         species={species}
         gender={gender}
         image={image}
         onClose={() => onClose(id)}
        />
      })
   }
   </div>;
}
