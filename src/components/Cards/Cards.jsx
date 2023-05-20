import Card from '../Card/Card';
import styles from './Cards.module.css'

export default function Cards(props) {
   const { characters, onClose } = props;
   return (
      <div className={styles.divCards}>{
         characters.map((character) => {
            console.log("Origin: ",character.origin.name )
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
