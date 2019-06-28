
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
		<div class = "cardOfPokemon" >
		<img src="${pokemon.img}">
		<p>Name: ${pokemon.name}</p>
		<p>Id: ${pokemon.id}</p>
		<p>Type: ${pokemon.type}</p>
		<p>Weaknesses: ${pokemon.weaknesses}</p>
		</div>`;

	});
};

let sortBy = () => {
	const pokemonList = document.getElementById("pokemonList");
	const optionSelect = document.getElementById("orderOptions");
	const formSelect = document.getElementById("orderForms");
	const optionSelectInText = optionSelect.options[optionSelect.selectedIndex].value;
	const formSelectInText = formSelect.options[formSelect.selectedIndex].text;
	//console.log(optionSelectInText, formSelectInText);
	let orderedPokemon = window.data.sortData(POKEMON.pokemon, optionSelectInText, formSelectInText, firstListOfTypeOfPokemon);
	pokemonList.innerHTML = "";
	orderedPokemon.forEach(function (pokemon) {
		pokemonList.innerHTML += `
		<div class = "cardOfPokemon" >
		<img src="${pokemon.img}">
		<p>Name: ${pokemon.name}</p>
		<p>Id: ${pokemon.id}</p>
		<p>Type: ${pokemon.type}</p>
		<p>Weaknesses: ${pokemon.weaknesses}</p>
		</div>`;
	});
};

let computeStats =() => {
	const pokemonStatistics = document.getElementById("pokemonStatistics");
	let countOfTypeOfPokemon = window.data.computeStats(POKEMON.pokemon);
	pokemonStatistics.innerHTML = "";
	Object.keys(countOfTypeOfPokemon).forEach(function (type) {
		pokemonStatistics.innerHTML += `<p class="statisticsResult">${type}: ${countOfTypeOfPokemon[type]} / 151</p>`;
	});
};

let showAllPokemons = () => {
	let orderedPokemon = window.data.sortData(POKEMON.pokemon, "id", "Ascendente");
	orderedPokemon.forEach(function (pokemon) {
		pokemonList.innerHTML += `
		<div class = "cardOfPokemon" >
		<img src="${pokemon.img}">
		<p>Name: ${pokemon.name}</p>
		<p>Id: ${pokemon.id}</p>
		<p>Type: ${pokemon.type}</p>
		<p>Weaknesses: ${pokemon.weaknesses}</p>
		</div>`;

});
}
document.getElementById("sortButton").addEventListener("click", sortBy);
document.getElementById("computeStatsButton").addEventListener("click", computeStats);
document.getElementById("pokeBallBtn").addEventListener("click", condition);
document.getElementById("pokeBallGif").addEventListener("click", showAllPokemons);