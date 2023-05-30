import { useState } from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar(props) {
   const [id, setId] = useState('');

   const { onSearch } = props;
   
   const handleChange = (event) => {
      setId(event.target.value);
   }
   return (
      <div className={styles.divWrap}>
         <div className={styles.divSearch}>
            <input className={styles.inputSearch} onChange={handleChange} type='search' placeholder='Write a number' />
            <button className={styles.buttonSearch} onClick={() => onSearch(id)}>Agregar</button>
            <i className="fa fa-search"></i>
         </div>
      </div>
   );
}
