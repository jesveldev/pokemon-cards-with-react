import React, { useState, useRef } from 'react';
import getData from './scripts/fetch.js';
import coincidencesFinder from './scripts/coincidencesFinder.js';
import Article from './comps/Article.jsx';
import SearchBar from './comps/SearchBar.jsx';

  // ------------------------------------------
  // ------------------------------------------
  // ------------------------------------------
  // ------------------------------------------
  // ------------------------------------------
  // ------------------------------------------

export default function App() {

  const [state, setState] = useState([]);
  const searchBar = useRef();

  // ------------------------------------------
  // ------------------------------------------
  // ------------------------------------------
  // ------------------------------------------
  // ------------------------------------------
  // ------------------------------------------

  async function addPokemon(e){

    e.preventDefault();

    if(searchBar.current.value==''){
      alert("Write a pokemon's ID or name");
      return null;
    }

    const pokemon = searchBar.current.value;

    try{

      if(coincidencesFinder(pokemon.toLowerCase(),state)) throw Error(`${pokemon} ya ha sido buscado.`);

      const fetching = await getData(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()=='giratina'?'giratina-altered':pokemon}`);

      console.log(fetching);

      const data = {
        "key":Math.random()*1000/7.8283723891,
        "name": fetching.name,
        "front_default" : fetching.sprites.front_default,
        "back_default" : fetching.sprites.back_default
      };

      setState([data,...state]);

      console.log(state);

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
      <SearchBar ref={ searchBar } func={ addPokemon }/>

      { state.map(e=>{
            <Article
              key={e.key}
              title={e.name=='giratina-altered'?'giratina':e.name}
              fImg={ e.front_default }
              sImg={ e.back_default }
            />
          }
        )
      }
    </>
  );
}
