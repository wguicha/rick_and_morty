import styles from './card.module.css'

export default function Card(props) {
   //console.log('id: ', props.char)
   const onClose=() => window.alert('Emulamos que se cierra la card');
   return (
      <div>
         <div className={styles.divImg}>
         <button onClick={() => onClose()}>X</button>
            <div className={styles.divId}>
               <h2 className={styles.h2Id}>{props.char.id}</h2>
            </div>
            <div className={props.char.status === 'Dead' ? styles.divStatusDead : styles.divStatusAlive}>
            </div>
            <img src={props.char.image} alt={props.char.name + '-image'} />
            <div className={styles.divName}>
               <h2 className={styles.h2Name}>{props.char.name}</h2>
            </div>
            <div className={styles.divOriginName}>
               <h2 className={styles.h2OriginName}>Origin: {props.char.origin.name}</h2>
               <h2 className={styles.h2OriginName}>Specie: {props.char.species}</h2>
               <h2 className={styles.h2OriginName}>Gender: {props.char.gender}</h2>
            </div>
            <h2 className={styles.h2OriginName}>{props.char.gender}</h2>
         </div>
      </div>
   );
}
