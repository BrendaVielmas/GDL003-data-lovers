//Esta función es para filtrar los Pokemon
let condition () => {
	/*let input () => {
		let checkInput = document.querySelector('input[name="cbox"]:checked');
	  let input = checkInput.value;
	};
	let condition () => {
	};*/
	let filteredPokemon = window.data.filterData(POKEMON.pokemon, "type");
	root.innerHTML = "";
	filteredPokemon.forEach(function(pokemon) {
  		root.innerHTML += `<p><img src="${pokemon.img}"> <br>${pokemon.name} <br>${pokemon.id} <br>${pokemon.type} <br>${pokemon.weaknesses}</p>`;
	});
};
document.getElementById("pokeBall2").addEventListener("click",condition);


/*let input = () => {
};*/
let sortBy = () => {
	const optionSelect = document.getElementById("orderOptions");
	const formSelect = document.getElementById("orderForms");
	const optionSelectInText = optionSelect.options[optionSelect.selectedIndex].value;
	const formSelectInText = formSelect.options[formSelect.selectedIndex].text;
	//console.log(optionSelectInText, formSelectInText);
	let orderedPokemon = window.data.sortData(POKEMON.pokemon, optionSelectInText, formSelectInText);
	let pokemonList ;
	pokemonList.innerHTML = "";
	orderedPokemon.forEach(function (pokemon) {
		pokemonList.innerHTML += `<img src="${pokemon.img}">`;
	});
};
/*let sortOrder = () => {
};*/
let computeStats =() => {
	let countOfTypeOfPokemon = window.data.computeStats(POKEMON.pokemon);
	/*
	let o = {
		"fire": 7,
		"water": 3
	}
	Object.keys(o)
	["fire", "water"]
	*/
	let pokemonStatistics ;
	pokemonStatistics.innerHTML = "";
	Object.keys(countOfTypeOfPokemon).forEach(function (type) {
		pokemonStatistics.innerHTML += `<p>${type}: ${countOfTypeOfPokemon[type]} / 151</p>`;
	});
};
document.getElementById("sortButton").addEventListener("click", sortBy);
document.getElementById("computeStatsButton").addEventListener("click", computeStats);
