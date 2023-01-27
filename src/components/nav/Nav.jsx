import SearchBar from "../searchbar/SearchBar.jsx";
import styles from"./Nav.module.css"
import { Link } from"react-router-dom"

 export default function Nav( {onSearch} ){
    return(
        <nav className={styles.navs}>
            <div>
                <Link to="/"     className={styles.buttonNav}>Logout</Link>
                <Link to="about" className={styles.buttonNav}>About</Link>
                <Link to="home"  className={styles.buttonNav}>Home</Link>
                <Link to="favorites"  className={styles.buttonNav}>Favorites</Link>
                <SearchBar onSearch={onSearch}/>
            </div>
        </nav>
    )
 }
