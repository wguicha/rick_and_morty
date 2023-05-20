import './App.css';
import Cards from './components/Cards/Cards.jsx';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Nav from './components/Nav/Nav';
import Form from './components/Form/Form';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

function App() {
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   let location = useLocation();

   const EMAIL = 'admin@mail.com'
   const PASSWORD = 'abcd123'

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

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
         { location.pathname !== '/'
            ? <Nav  onSearch={onSearch}/>
            : <></>
         }
         
         <Routes>
            <Route path="/" element={<Form login={login} />} />
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="*" element={<About />} />
         </Routes>
      </div>
   );
}

export default App;
