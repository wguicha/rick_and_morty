import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import axios from 'axios';
import { useState } from 'react';

function App() {
   
   const [characters, setCharacters] = useState([]);

   const onSearch = (id) =>{
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onCLose = (id) => {
      setCharacters(characters.filter((x) => {
         return x !== parseInt(id);
      }))
   }

   return (
      <div className='App'>
         <Nav  onSearch={onSearch}/>
         <Cards characters={characters} />
      </div>
   );
}

export default App;
