import Card from '../Card/Card';
import styles from './cards.module.css'

export default function Cards(props) {
   const { characters } = props;
   return (
      <div className={styles.divCards}>{
         characters.map((character) => {
            return <Card key={character.id} char={character} />
         })
      }</div>
   );
}
