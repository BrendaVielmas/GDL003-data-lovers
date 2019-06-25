let input = () => {
};
let sortBy = () => {
	const optionSelect = document.getElementById("orderOptions");
	const formSelect = document.getElementById("orderForms");
	const optionSelectInText = optionSelect.options[optionSelect.selectedIndex].text;
	const formSelectInText = formSelect.options[formSelect.selectedIndex].text;
	let orderedPokemon = window.data.sortData(POKEMON.pokemon, optionSelectInText, formSelectInText);
	root.innerHTML = "";
	orderedPokemon.forEach(function (pokemon) {
		root.innerHTML += `<img src="${pokemon.img}">`;
	});
};
let sortOrder = () => {
	root.innerHTML = "";
	typeOfPokemon.forEach(function (pokemon) {
		root.innerHTML += `<img src="${type}">`;
});
document.getElementById("sortButton").addEventListener("click", sortBy);
}