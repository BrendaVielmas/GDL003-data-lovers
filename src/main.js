let requestFile = "./data/pokemon/pokemon.json";
let request = new XMLHttpRequest ();
request.open("GET", requestFile);
request.responseType = 'json';
request.send(null);
let
