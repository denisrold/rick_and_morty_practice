import SearchBar from "../searchbar/SearchBar.jsx";
import styles from"./Nav.module.css"

 export default function Nav( {onSearch} ){
    return(
        <nav className={styles.navs}>
            <div>
                <SearchBar onSearch={onSearch} />
            </div>
        </nav>
    )
 }
