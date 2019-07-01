let POKEMON;
let request = new XMLHttpRequest();
request.overrideMimeType("application/json");
request.open("GET", "data/pokemon/pokemon.json", true);
request.send(null);
request.onreadystatechange = function() {
  if ( request.readyState === 4 && request.status === 200 ) {
    POKEMON = JSON.parse(request.responseText);

  }
}
