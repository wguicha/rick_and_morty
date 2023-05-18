import './App.css';
import Cards from './components/Cards/Cards.jsx';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Nav from './components/Nav/Nav';
import axios from 'axios';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {

   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      if(!validateDuplicate(id)){
         axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
      }
   }

   const onClose = (id) => {
      setCharacters(characters.filter((char) => {
         return char.id !== Number(id);
      }))
   }

   const validateDuplicate = (id) => {
      let duplicated = false;

      characters.forEach((char) => {
         if (char.id === Number(id)){
            duplicated = true;
         }
      })

      return duplicated;

   }

   return (
      <div className='App'>
         <Nav  onSearch={onSearch}/>
         <Routes>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
         </Routes>
      </div>
   );
}

export default App;
