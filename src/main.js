
//Objetos ocultos al inicio de la página
document.getElementById("filterOptions").style.display = "none";
document.getElementById("pokemonStatisticsSec").style.display = "none";


let filteredPokemon ;
//Filtrar los Pokemon ya mostrados
let condition = () => {
	document.getElementById("pokemonListFiltered").style.display = "block";
	document.getElementById("pokemonStatisticsSec").style.display = "none";
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
	orderedPokemon.forEach((pokemon) => {
		pokemonListFiltered.innerHTML += `
		<div class = "cardOfPokemon" >
		<img src="${pokemon.img}">
		<p><h3>${pokemon.name}</h3></p>
		<p>Id: ${pokemon.id}</p>
		<p>Type: ${pokemon.type}</p>
		<p>Weaknesses: ${pokemon.weaknesses}</p>
		</div>`;

	});
};
//Mostrar estadisticas de los Pokemon
let computeStats =() => {
	document.getElementById("pokemonListFiltered").style.display = "none";
	const pokemonStatistics = document.getElementById("pokemonStatistics");
	let countOfTypeOfPokemon = window.data.computeStats(filteredPokemon);
	pokemonStatistics.innerHTML = "";
	Object.keys(countOfTypeOfPokemon).forEach((type) => {
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
	filteredPokemon = window.data.sortData(POKEMON.pokemon, "id", "Ascending");
	pokemonListFiltered.innerHTML = "";
	filteredPokemon.forEach((pokemon) => {
		pokemonListFiltered.innerHTML += `
		<div class = "cardOfPokemon" >
		<img src="${pokemon.img}">
		<p><h3>${pokemon.name}</h3></p>
		<p>Id: ${pokemon.id}</p>
		<p>Type: ${pokemon.type}</p>
		<p>Weaknesses: ${pokemon.weaknesses}</p>
		</div>`;
	});
};
//Botón All
/*let selectAll = () => { 	
	//document.getElementById("f1").checked;
	//document.querySelectorAll('input[name="cbox"]:checked');
	if (cboxAll.checked) { document.querySelectorAll('input[name="cbox"]').checked;
	}
};*/

const cboxAllFuntion = document.querySelector("#cboxAll");
let cboxForAll = document.querySelectorAll('input[name="cbox"]')
cboxAllFuntion.addEventListener("change", (e) => {
	if(cboxAllFuntion.checked) {
		cboxForAll.forEach((checkbox) => {
			checkbox.checked = true;
		});
	};
});
//Sección de botones
document.getElementById("computeStatsButton").addEventListener("click", computeStats);
document.getElementById("pokeBallBtn").addEventListener("click", condition);
document.getElementById("pokeBallGif").addEventListener("click", showAllPokemons);
