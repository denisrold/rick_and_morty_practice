import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {deleteFavs} from"../redux/actions"
import styles from"./Favorite.module.css"
import info from './info.png';
import star2 from"./star2.png"


function Favorite({id, name, species, gender, image,deleteFavs}) {
   const handleFavorite = () =>{
         deleteFavs(id)
      }

    return (
      <div className={styles.container} >
      <h2 className={styles.name}>{name}</h2>
      <img className={styles.imagen} src={image} alt={name}></img>
      <div className={styles.linkes}>
      <img src={star2} onClick={handleFavorite} className={styles.favs}/>
      <Link to={`/detail/${id}`} className={styles.links}>
      <img src={info} className={styles.info}/>
      </Link >
      </div>
      <hr></hr>
      <div className={styles.data}>
      <h2 className={styles.text}>{species}</h2>
      <h2 className={styles.text}>{gender}</h2>
   </div>   
</div>
     );
  }

  export const mapStateToProps = (state)=>{
   return {myFavorites: state.myFavorites,
   
}  
}
export const mapDispatchToProps =(dispatch)=>{
   return{
deleteFavs:(id)=>{dispatch(deleteFavs(id))}
}}
  export default connect(mapStateToProps,mapDispatchToProps) (Favorite);