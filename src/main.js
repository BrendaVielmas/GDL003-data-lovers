
document.getElementById("filterOptions").style.display = "none";
document.getElementById("pokemonStatisticsSec").style.display = "none";
let filteredPokemon;
//Esta función es para filtrar los Pokemon
let condition = () => {
	const pokemonList = document.getElementById("pokemonList");
	const optionSelect = document.getElementById("orderOptions");
	const formSelect = document.getElementById("orderForms");
	const optionSelectInText = optionSelect.options[optionSelect.selectedIndex].value;
	const formSelectInText = formSelect.options[formSelect.selectedIndex].text;
	const pokemonListFiltered = document.getElementById ("pokemonListFiltered");
	let firstListOfTypeOfPokemon = [];
	document.querySelectorAll('input[name="cbox"]:checked').forEach((checkbox) => {
		firstListOfTypeOfPokemon = firstListOfTypeOfPokemon.concat([checkbox.value]);
 	})
 	filteredPokemon = window.data.filterData(POKEMON.pokemon, firstListOfTypeOfPokemon);
 	let orderedPokemon = window.data.sortData(filteredPokemon, optionSelectInText, formSelectInText);
	pokemonListFiltered.innerHTML = "";
	filteredPokemon.forEach(function (pokemon) {
		pokemonListFiltered.innerHTML += `
		<div class = "cardOfPokemon" >
		<img src="${pokemon.img}">
		<p><h2>${pokemon.name}</h2></p>
		<p>Id: ${pokemon.id}</p>
		<p>Type: ${pokemon.type}</p>
		<p>Weaknesses: ${pokemon.weaknesses}</p>
		</div>`;

	});
};


let computeStats =() => {
	const pokemonStatistics = document.getElementById("pokemonStatistics");
	let countOfTypeOfPokemon = window.data.computeStats(filteredPokemon);
	pokemonStatistics.innerHTML = "";
	Object.keys(countOfTypeOfPokemon).forEach(function (type) {
		document.getElementById("pokemonStatisticsSec").style.display = "block";
		pokemonStatistics.innerHTML += `
		<tr>
			<td>${type}: </td>
			<td>${countOfTypeOfPokemon[type]} / 151<td>
		</tr>`;
	});
};

let showAllPokemons = () => {
	document.getElementById("filterOptions").style.display = "block";
	filteredPokemon = window.data.sortData(POKEMON.pokemon, "id", "Ascendente");
	pokemonListFiltered.innerHTML = "";
	filteredPokemon.forEach(function (pokemon) {
		pokemonListFiltered.innerHTML += `
		<div class = "cardOfPokemon" >
		<img src="${pokemon.img}">
		<p><h2>${pokemon.name}</h2></p>
		<p>Id: ${pokemon.id}</p>
		<p>Type: ${pokemon.type}</p>
		<p>Weaknesses: ${pokemon.weaknesses}</p>
		</div>`;

	});
}
document.getElementById("computeStatsButton").addEventListener("click", computeStats);
document.getElementById("pokeBallBtn").addEventListener("click", condition);
document.getElementById("pokeBallGif").addEventListener("click", showAllPokemons);
