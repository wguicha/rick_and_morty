import { useDispatch, useSelector } from "react-redux";
import Card from '../Card/Card'
import { removeFav, filterCards, orderCards } from '../../redux/actions'
import styles from './Favorites.module.css'

const Favorites = () => {
   const dispatch = useDispatch()

   const { myFavorites } = useSelector((state) => state)

   const onClose = (id) => {
      dispatch(removeFav(id));
   }

   const handleFilter = (event) => {
      dispatch(filterCards(event.target.value));

   }

   const handleOrder = (event) => {
      dispatch(orderCards(event.target.value))

   }

   return (
      <div>
         <div className={styles.filterGroup}>
            <label className={styles.labelFilter}>Choose to filter:</label>
            <select className={styles.optionGroupFilter} onChange={handleFilter}>
               <option className={styles.optionFilter} value="All">All</option>
               <option className={styles.optionFilter} value="Male">Male</option>
               <option className={styles.optionFilter} value="Female">Female</option>
               <option className={styles.optionFilter} value="Genderless">Genderless</option>
               <option className={styles.optionFilter} value="unknown">unknown</option>
            </select>
            <label className={styles.labelFilter}>Order by:</label>
            <select className={styles.optionGroupFilter} onChange={handleOrder}>
               <option className={styles.optionFilter} value="A">Ascendente</option>
               <option className={styles.optionFilter} value="D">Descendente</option>

            </select>
         </div>
         <div className={styles.divFavCards}>
            {myFavorites.map((character) => {
                  return <Card id={character.id}
                     key={character.id}
                     name={character.name}
                     status={character.status}
                     species={character.species}
                     gender={character.gender}
                     origin={character.origin.name}
                     image={character.image}
                     onClose={onClose} />
               })
            }
         </div>
      </div>
   );
}

export default Favorites;