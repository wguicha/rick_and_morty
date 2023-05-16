import styles from './SearchBar.module.css'

export default function SearchBar(props) {
   const { onSearch } = props;
   return (
      <div className={styles.divWrap}>
         <div className={styles.divSearch}>
            <input className={styles.inputSearch} type='search' />
            <button className={styles.buttonSearch} onClick={onSearch}>Agregar</button>
            <i className="fa fa-search"></i>
         </div>
      </div>
   );
}
