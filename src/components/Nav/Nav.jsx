import SearchBar from '../SearchBar/SearchBar'
import styles from './Nav.module.css'
import { Link } from 'react-router-dom'

export default function Nav(props) {
   const { onSearch } = props;
   return (
        <div className={styles.divNav}>
            <Link to="/home">
                <button>HOME</button>
            </Link>
            <Link to="/about">
                <button>ABOUT</button>
            </Link>
            <SearchBar onSearch={onSearch}/>
        </div>
   );
}
