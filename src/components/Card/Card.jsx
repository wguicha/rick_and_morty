import styles from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card(props) {
   //console.log('id: ', props.char)
   //const onClose=() => window.alert('Emulamos que se cierra la card');
   const { id, name, status, species, gender, origin, image, onClose } = props;
   return (
      <div className={styles.divCard}>
         <div className={styles.divImg}>
                     <div className={styles.divId}>
               <h2 className={styles.h2Id}>{id}</h2>
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
