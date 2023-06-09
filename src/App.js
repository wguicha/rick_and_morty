import './App.css';
import Cards from './components/Cards/Cards.jsx';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Nav from './components/Nav/Nav';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

function App() {
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   let location = useLocation();

   //const EMAIL = 'admin@mail.com'
   //const PASSWORD = 'abcd123'
   const URL = 'http://localhost:3001/rickandmorty/'

   async function login({ email, password }) {

      try{
         const { data } = await axios(`${URL}/login?email=${email}&password=${password}`)

         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      } catch({response}){
         const { data } = response;
         alert(data.message)
      }
      /*
            .then(({ data }) => {

      })
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
      */
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);

   const onSearch = async (id) => {
      if(validateDuplicate(id)){
         window.alert('¡Este personaje ya existe!');
      } else if (validataId(id)) {
         //`https://rickandmortyapi.com/api/character/${id}`
         try{
            const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
               if (data.name) {
                  setCharacters((oldChars) => [...oldChars, data]);
               }            
         } catch (err){
            window.alert(err.message);
         }
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   }

   const onRandom = () => {
      let min = 1;
      let max = 826;
      for (let i = 0; i < 10; i++ ){
         onSearch(Math.floor((Math.random() * (max - min + 1)) + min));
      }
   }

   const onClear = () => {
      setCharacters([]);
   }

   const onClose = (id) => {
      setCharacters(characters.filter((char) => {
         return char.id !== Number(id);
      }))
   }

   const validateDuplicate = (id) => {
      let duplicated = false;

      characters.forEach((char) => {

         if (Number(char.id) === Number(id)){
            duplicated = true;
         }
      })

      return duplicated;

   }

   const validataId = (id) => {
      return id <= 826;
   }

   return (
      <div className='App'>
         { location.pathname !== '/'
            ? <Nav  onSearch={onSearch} onRandom={onRandom} onClear={onClear}/>
            : <></>
         }
         
         <Routes>
            <Route path="/" element={<Form login={login} />} />
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<About />} />
         </Routes>
      </div>
   );
}

export default App;
