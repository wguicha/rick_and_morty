import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions'
import { useState, useEffect } from 'react';

function Card(props) {
   const { id, name, status, species, gender, origin, image, onClose } = props;
   const [isFav, setIsFav] = useState(false);

   function handleFavorite(){
      if(isFav){
         setIsFav(false);
         props.removeFav(id);
      } else {
         setIsFav(true);
         props.addFav({ id, name, status, species, gender, origin, image })
      }
   }

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [props.myFavorites]);

   return (
      <div className={styles.divCard}>
         <div className={styles.divImg}>
            <div className={styles.divFavIcon}>
               {isFav ? (
                  <button className={styles.h2IdRed} onClick={handleFavorite}>❤️<br/>{id}</button>
               ) : (
                  <button className={styles.h2Id} onClick={handleFavorite}>🤍<br/>{id}</button>
               )
               }
            </div>
            <div className={status === 'Dead' ? styles.divStatusDead : styles.divStatusAlive}>
            </div>
            <img src={image} alt={name + '-image'} />
            <Link to={`/detail/${id}`} >
               <div className={styles.divName}>
                  <h2 className={styles.h2Name}>{name}</h2>
               </div>
            </Link>
            <div className={styles.divOriginName}>
               <h2 className={styles.h2OriginName}>Origin: {origin}</h2>
               <h2 className={styles.h2OriginName}>Specie: {species}</h2>
               <h2 className={styles.h2OriginName}>Gender: {gender}</h2>
            </div>
            <h2 className={styles.h2OriginName}>{gender}</h2>
            <button className={styles.buttonClose} onClick={() => onClose(id)}>X</button>
         </div>
      </div>
   );
}

export function mapStateToProps(state){
   return {
      myFavorites: state.myFavorites,
   }
}

export  function mapDispatchToProps(dispatch){
   return {
      addFav: function(character){
         dispatch(addFav(character));
      },
      removeFav: function(id){
         dispatch(removeFav(id));
      },
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);