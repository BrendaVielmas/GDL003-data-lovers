let POKEMON;
/*let request = new XMLHttpRequest();
request.overrideMimeType("application/json");
request.open("GET", "data/pokemon/pokemon.json", true);
request.send(null);
request.onreadystatechange = function() {
  if ( request.readyState === 4 && request.status === 200 ) {
    POKEMON = JSON.parse(request.responseText);

  }
}*/
const url = `https://github.com/Laboratoria/GDL003-data-lovers/blob/master/src/data/pokemon/pokemon.json`;
fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });