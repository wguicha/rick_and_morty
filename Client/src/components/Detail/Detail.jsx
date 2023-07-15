import axios from 'axios';
import styles from './Detail.module.css'
import Card from '../Card/Card';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Detail() {

   const { id } = useParams();

   const [character, setCharacter] = useState({});

   useEffect(() => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacter(data);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
      return setCharacter({});
   }, [id]);

   useEffect(() => {console.log(character.origin?.name)}, [character])

   return (
         <div className={styles.divDetail}>
            {character ? (<Card id={character.id}
               key={character.id}
               name={character.name}
               status={character.status}
               species={character.species}
               gender={character.gender}
               origin={character.origin?.name}
               image={character.image}/>) : (<h1>Cargando....</h1>)}
         </div>
   );
}