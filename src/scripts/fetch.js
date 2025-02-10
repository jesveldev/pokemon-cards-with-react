"use strict";

async function getData(url){

	const fetching = await fetch(url).then(res=>res.json());
	return fetching;
}

//"https://pokeapi.co/api/v2/pokemon/dragonite"

export default getData;