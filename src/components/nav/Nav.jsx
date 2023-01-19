import SearchBar from "../searchbar/SearchBar.jsx";
import styles from"./Nav.module.css"
import { Link } from"react-router-dom"

 export default function Nav( {onSearch} ){
    return(
        <nav className={styles.navs}>
            <div>
                <Link to="/">Logout</Link>
                <Link to="about">about</Link>
                <Link to="home">home</Link>
                <SearchBar onSearch={onSearch} />
            </div>
        </nav>
    )
 }
