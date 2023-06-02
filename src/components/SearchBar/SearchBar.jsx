import { useState } from 'react';
import styles from './SearchBar.module.css'
import { useDispatch } from "react-redux";
import { removeAll } from '../../redux/actions'

export default function SearchBar(props) {
   const [id, setId] = useState('');

   const dispatch = useDispatch()

   const { onSearch, onRandom, onClear } = props;
   
   const handleChange = (event) => {
      setId(event.target.value);
   }

   const handleClear = () => {
      onClear();
      dispatch(removeAll());
   }

   return (
      <div className={styles.divWrap}>
         <div className={styles.divSearch}>
            <input className={styles.inputSearch} onChange={handleChange} type='search' placeholder='Write a number' />
            <button className={styles.buttonSearch} onClick={() => onSearch(id)}>ADD</button>
            <button className={styles.buttonRandom} onClick={() => onRandom()}>x10 Random</button>
            <button className={styles.buttonRandom} onClick={() => handleClear()}>Clear</button>
            <i className="fa fa-search"></i>
         </div>
      </div>
   );
}
