import SearchBar from '../SearchBar/SearchBar'
import styles from './Nav.module.css'

export default function Nav(props) {
   const { onSearch } = props;
   return (
        <div className={styles.divNav}>
            <SearchBar onSearch={onSearch}/>
        </div>
   );
}
