//Esta función es para filtrar los Pokemon
let condition = () => {
	const pokemonListFiltered = document.getElementById ("pokemonListFiltered");

	
	let firstListOfTypeOfPokemon = [];
	
	document.querySelectorAll('input[name="cbox"]:checked').forEach((checkbox) => { 

		firstListOfTypeOfPokemon = firstListOfTypeOfPokemon.concat([checkbox.value]);
 	})
	let filteredPokemon = window.data.filterData(POKEMON.pokemon, firstListOfTypeOfPokemon);
	pokemonListFiltered.innerHTML += "";
	filteredPokemon.forEach(function (pokemon) {
		pokemonListFiltered.innerHTML += `
		<ul>

		<li><img src="${pokemon.img}"></li>
		<li>Name: ${pokemon.name}</li>
		<li>Id: ${pokemon.id}</li>
		<li>Type: ${pokemon.type}</li>
		<li>Weaknesses: ${pokemon.weaknesses}</li>
		</ul>`;

	});
};

let sortBy = () => {
	const pokemonList = document.getElementById("pokemonList");
	const optionSelect = document.getElementById("orderOptions");
	const formSelect = document.getElementById("orderForms");
	const optionSelectInText = optionSelect.options[optionSelect.selectedIndex].value;
	const formSelectInText = formSelect.options[formSelect.selectedIndex].text;
	//console.log(optionSelectInText, formSelectInText);
	let orderedPokemon = window.data.sortData(POKEMON.pokemon, optionSelectInText, formSelectInText);
	pokemonList.innerHTML = "";
	orderedPokemon.forEach(function (pokemon) {
		pokemonList.innerHTML += `
		<ul>
		<li><img src="${pokemon.img}"></li>
		<li>Name: ${pokemon.name}</li>
		<li>Id: ${pokemon.id}</li>
		<li>Type: ${pokemon.type}</li>
		<li>Weaknesses: ${pokemon.weaknesses}</li>
		</ul>`;
	});
};

/*let sortOrder = () => {
};*/
let computeStats =() => {
	const pokemonStatistics = document.getElementById("pokemonStatistics");
	let countOfTypeOfPokemon = window.data.computeStats(POKEMON.pokemon);
	pokemonStatistics.innerHTML = "";
	Object.keys(countOfTypeOfPokemon).forEach(function (type) {
		pokemonStatistics.innerHTML += `<p>${type}: ${countOfTypeOfPokemon[type]} / 151</p>`;
	});
};
document.getElementById("sortButton").addEventListener("click", sortBy);
document.getElementById("computeStatsButton").addEventListener("click", computeStats);
document.getElementById("pokeBallBtn").addEventListener("click", condition);
