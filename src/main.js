let data = () => {
};
let sortBy = () => {
	/*se necesita hacer una variable que quede en lugar de "asc" y otra para "name"
	que elija el usuario desde html*/
	let orderedPokemon = window.data.sortData(POKEMON.pokemon, "id", "desc");
	root.innerHTML = "";
	orderedPokemon.forEach(function(pokemon) {
  		root.innerHTML += `<img src="${pokemon.img}">`;
	});
};
let sortOrder = () => {
};


document.getElementById("typeButton").addEventListener("click",sortBy);
