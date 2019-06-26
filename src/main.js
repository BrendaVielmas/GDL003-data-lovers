let input = () => {
};
let sortBy = () => {
	const optionSelect = document.getElementById("orderOptions");
	const formSelect = document.getElementById("orderForms");
	const optionSelectInText = optionSelect.options[optionSelect.selectedIndex].value;
	const formSelectInText = formSelect.options[formSelect.selectedIndex].text;
	//console.log(optionSelectInText, formSelectInText);
	let orderedPokemon = window.data.sortData(POKEMON.pokemon, optionSelectInText, formSelectInText);
	pokemonList.innerHTML = "";
	orderedPokemon.forEach(function (pokemon) {
		pokemonList.innerHTML += `<img src="${pokemon.img}">`;
	});
};
let sortOrder = () => {
}
let computeStats =() => {
	let countOfTypeOfPokemon = window.data.computeStats();
	/*
	let o = {
		"fire": 7,
		"water": 3
	}
	Object.keys(o)
	["fire", "water"]
	*/
	pokemonStatistics.innerHTML = "";
	Object.keys(countOfTypeOfPokemon).forEach(function (type) {
		pokemonStatistics.innerHTML += `<p>${type}: ${countOfTypeOfPokemon[type]} / 151</p>`;
	});;
}
document.getElementById("sortButton").addEventListener("click", sortBy);
document.getElementById("computeStatsButton").addEventListener("click", computeStats);