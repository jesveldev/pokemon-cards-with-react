import React, { useState, useRef } from 'react';
import getData from './scripts/fetch.js';
import coincidencesFinder from './scripts/coincidencesFinder.js';
import Article from './comps/Article.jsx';
import SearchBar from './comps/SearchBar.jsx';

import styled from 'styled-components';

  // ------------------------------------------
  // ------------------------------------------
  // ------------------------------------------
  // ------------------------------------------
  // ------------------------------------------
  // ------------------------------------------

const Btn = styled.button`
  background: linear-gradient(to right, #f953c6, #b91d73);
  color:white;
  font-size:1.2em;
  padding:1% 2%;
  border-radius:5px;
  border:none;
  cursor:pointer;
  margin-top:2%;
`;

export default function App() {

  const [state, setState] = useState([]);
  const inputRef = useRef();

  // ------------------------------------------
  // ------------------------------------------
  // ------------------------------------------
  // ------------------------------------------
  // ------------------------------------------
  // ------------------------------------------

  async function addPokemon(e){

    e.preventDefault();

    if(inputRef.current.value==''){
      alert("Write a pokemon's ID or name");
      return null;
    }

    const pokemon = inputRef.current.value;

    try{

      if(coincidencesFinder(pokemon.toLowerCase(),state)) throw Error(`${pokemon} ya ha sido buscado.`);

      const fetching = await getData(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()=='giratina'?'giratina-altered':pokemon}`);

      console.log(fetching);

      const data = {
        "key": fetching.name,
        "name": fetching.name,
        "front_default" : fetching.sprites.front_default,
        "back_default" : fetching.sprites.back_default
      };

      setState([data,...state]);

    }catch(e){
      alert(e);
    }
  };

  // ------------------------------------------
  // ------------------------------------------
  // ------------------------------------------
  // ------------------------------------------
  // ------------------------------------------
  // ------------------------------------------

  return(
    <>
      <SearchBar ref={ inputRef } func={ addPokemon } text='Search'/>

      { state.map(e=>{

          // console.log([e.key,e.name,e.front_default,e.back_default]);
        
          return (<Article
                key={e.key}
                title={e.name=='giratina-altered'?'giratina':e.name}
                fImg={ e.front_default }
                sImg={ e.back_default }
              />
            );
          }
        )
      }

      <Btn onClick={()=>console.log(state)}>Depuration</Btn>
    </>
  );
}
