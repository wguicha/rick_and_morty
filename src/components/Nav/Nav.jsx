import SearchBar from '../SearchBar/SearchBar'
import styles from './Nav.module.css'
import { Link } from 'react-router-dom'

export default function Nav(props) {
   const { onSearch } = props;
   return (
        <div className={styles.divNav}>
            <Link to="/home">
                <button className={styles.buttonNav}>HOME</button>
            </Link>
            <Link to="/about">
                <button className={styles.buttonNav}>ABOUT</button>
            </Link>
            <SearchBar className={styles.searchBarNav} onSearch={onSearch}/>
        </div>
   );
}
