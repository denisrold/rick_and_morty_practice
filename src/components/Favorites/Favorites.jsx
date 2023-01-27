import styles from"./Favorites.modules"
import { connect} from 'react-redux';
import Card from "../card/Card";
import { orderCards, filterCards, allFavs } from "../redux/actions"; 

const Favorites =(props) => {

const orderCard = (event)=>{
  props.orderCards(event.target.value)
}
const filterCard = (event)=>{
  props.filterCards(event.target.value)
}
const allFav = (event)=>{
  props.allFavs(event.target.value)
} 
  return (
    <>
    <div>
    <button onClick={allFav}>Ver todos</button>
    <hr />
      <span>Orden: </span>
    <select onChange={orderCard}>
    <option value="Ascendente">Ascendente</option>
    <option value="Descendente">Descendente</option>
    </select>
    <select onChange={filterCard}>
    <option value="none">Por genero</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="Genderless">Genderless</option>
    <option value="unknown">unknown</option>
    </select>
    </div>
    <div className={styles.divs}> {
      props.myFavorites.map(({id, name, species, gender, image}) => {
        return <Card
         key={id}
         name={name}
         species={species}
         gender={gender}
         image={image}
         id={id}
        />
      })
   }
   </div>;

    </>
)
}

export const mapStateToProps = (state)=>{
    return {myFavorites: state.myFavorites,
    
}  
}

export const mapDispatchToProps = (dispatch) =>{
  return {
    orderCards:(select)=>{dispatch(orderCards(select))},
    filterCards:(status)=>{dispatch(filterCards(status))},
    allFavs:(allfav)=>{dispatch(allFavs(allfav))},
 }
} 

export default connect(mapStateToProps,mapDispatchToProps)(Favorites);
