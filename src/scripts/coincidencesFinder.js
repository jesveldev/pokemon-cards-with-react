"use strict";

export default function coincidencesFinder(nameInRow, existingNames){

  for(let i = 0; i<existingNames.length; i++){
    if(existingNames[i].name===nameInRow) return true;
  }

  return false;
}