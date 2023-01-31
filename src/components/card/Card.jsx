import React from"react"
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from"./Card.module.css"
import { connect } from 'react-redux';
import { addFavorites, deleteFavs} from"../redux/actions"
import info from './info.png';
import star2 from"./star2.png"
import sinstar2 from"./sinstar2.png"

 function Card(props) {
   const [isFav, setisFav] = React.useState(false);

   const handleFavorite = () =>{
 
      if(!isFav){setisFav(true);
      props.addFavorites(props)
      }

      if(isFav){setisFav(false);
         props.deleteFavs(props.id)
      };
      }

   useEffect(() => {
   props.allCharacters?.forEach((fav) => {
   if (fav.id === props.id) {
   setisFav(true);
   }});
}, [props.myFavorites]);


   return (
      <div className={styles.container}>
            <button className={styles.cerrar} onClick={props.onClose}>X</button>
            <h2 className={styles.name} >{props.name}</h2>
            <img className={styles.imagen} src={props.image} alt={props.name}></img>
            <div>
            {isFav? (<img src={star2} onClick={handleFavorite} className={styles.favs}/>) : (
            <img src={sinstar2} onClick={handleFavorite} className={styles.favs}/>)}
            <Link to={`/detail/${props.id}`} className={styles.links}>
            <img src={info} className={styles.info}/>
            </Link >
            </div>
            <hr></hr>
         <div className={styles.data}>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
         </div>      
      </div>
   );
}

export function mapDispatchToProps(dispatch){
return {
   addFavorites:(id)=>{dispatch(addFavorites(id))},
   deleteFavs:(id)=>{dispatch(deleteFavs(id))},
}
}

export const mapStateToProps = (state)=>{
return {myFavorites: state.myFavorites,
   allCharacters: state.allCharacters,
}  
}

export default connect(mapStateToProps,mapDispatchToProps)(Card);
