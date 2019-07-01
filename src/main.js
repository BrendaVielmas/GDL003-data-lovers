
//Objetos ocultos al inicio de la página
document.getElementById("filterOptions").style.display = "none";
document.getElementById("pokemonStatisticsSec").style.display = "none";

let filteredPokemon;
//Filtrar los Pokemon ya mostrados
let condition = () => {
	const optionSelect = document.getElementById("orderOptions");
	const formSelect = document.getElementById("orderForms");
	const optionSelectInValue = optionSelect.options[optionSelect.selectedIndex].value;
	const formSelectInText = formSelect.options[formSelect.selectedIndex].text;
	const pokemonListFiltered = document.getElementById ("pokemonListFiltered");
	let firstListOfTypeOfPokemon = [];
	document.querySelectorAll('input[name="cbox"]:checked').forEach((checkbox) => {
		firstListOfTypeOfPokemon = firstListOfTypeOfPokemon.concat([checkbox.value]);
	});
/* " $ {..}" significa meter una variable en un string
	 `...` significa hacer un string de varias lineas */
	filteredPokemon = window.data.filterData(POKEMON.pokemon, firstListOfTypeOfPokemon);
	let orderedPokemon = window.data.sortData(filteredPokemon, optionSelectInValue, formSelectInText);
	pokemonListFiltered.innerHTML = "";
	orderedPokemon.forEach(function (pokemon) {
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
//Mostrar estadisticas de los Pokemon
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
//Mostrar todos los Pokemon en forma ascendente por ID al inicio de la página
let showAllPokemons = () => {
	const pokemonListFiltered = document.getElementById("pokemonListFiltered");
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
};
//Sección de botones
document.getElementById("computeStatsButton").addEventListener("click", computeStats);
document.getElementById("pokeBallBtn").addEventListener("click", condition);
document.getElementById("pokeBallGif").addEventListener("click", showAllPokemons);
