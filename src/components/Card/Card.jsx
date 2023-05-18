import styles from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card(props) {
   //console.log('id: ', props.char)
   //const onClose=() => window.alert('Emulamos que se cierra la card');
   const { char, id, onClose } = props;
   return (
      <div className={styles.divCard}>
         <div className={styles.divImg}>
                     <div className={styles.divId}>
               <h2 className={styles.h2Id}>{char.id}</h2>
            </div>
            <div className={char.status === 'Dead' ? styles.divStatusDead : styles.divStatusAlive}>
            </div>
            <img src={char.image} alt={char.name + '-image'} />
            <Link to={`/detail/${id}`} >
               <div className={styles.divName}>
                  <h2 className={styles.h2Name}>{char.name}</h2>
               </div>
            </Link>
            <div className={styles.divOriginName}>
               <h2 className={styles.h2OriginName}>Origin: {char.origin.name}</h2>
               <h2 className={styles.h2OriginName}>Specie: {char.species}</h2>
               <h2 className={styles.h2OriginName}>Gender: {char.gender}</h2>
            </div>
            <h2 className={styles.h2OriginName}>{char.gender}</h2>
            <button className={styles.buttonClose} onClick={() => onClose(id)}>X</button>
         </div>
      </div>
   );
}
