let POKEMON;
fetch(`https://raw.githubusercontent.com/Laboratoria/GDL003-data-lovers/master/src/data/pokemon/pokemon.json`)
  .then(function(response) {
    return response.json();
  })
  .then(function(pokemonJson) {
  	POKEMON = pokemonJson;  
  });