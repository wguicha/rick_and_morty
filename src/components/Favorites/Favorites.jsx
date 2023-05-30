import { useDispatch, useSelector } from "react-redux";
import Card from '../Card/Card'
import { removeFav } from '../../redux/actions'
import styles from './Favorites.module.css'

const Favorites = () => {
    const dispatch = useDispatch()

    const myFavorites = useSelector((state) => state.myFavorites)

    const onClose = (id) => {
        dispatch(removeFav(id));
    }

    return (
        <div className={styles.divCards}>{
           myFavorites.map((character) => {
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
        }</div>
     );
}

export default Favorites;