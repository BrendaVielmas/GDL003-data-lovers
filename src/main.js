
//Objetos ocultos al inicio de la página
document.getElementById("filterOptions").style.display = "none";
document.getElementById("pokemonStatisticsSec").style.display = "none";
document.getElementById("goToTheTopButton").style.display = "none";


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
		<section class = "cardOfPokemon" >
		<img src="${pokemon.img}">
		<p><h3>${pokemon.name}</h3></p>
		<p>Id: ${pokemon.id}</p>
		<p>Type: ${pokemon.type}</p>
		<p>Weaknesses: ${pokemon.weaknesses.toString().replace(/,/g,", ")}</p>
		</section>`;
	});
	document.getElementById("goToTheTopButton").style.display = "block";
};
//Mostrar estadisticas de los Pokemon
let computeStats =() => {
	document.getElementById("pokemonListFiltered").style.display = "none";
	document.getElementById("pokemonStatisticsSec").style.display = "block";

	const pokemonStatistics = document.getElementById("pokemonStatisticsSec");
	let countOfTypeOfPokemon = window.data.computeStats(filteredPokemon);
	pokemonStatistics.innerHTML = "";
	//Se crea la tabla de datos para la gráfica
	let dataTable = new google.visualization.DataTable();
	//Se añaden columnas
    dataTable.addColumn("string", "Type");
    dataTable.addColumn("number", "Total");
    //Se añade la información a graficar
    Object.keys(countOfTypeOfPokemon).forEach((type) => {
			dataTable.addRow([type, countOfTypeOfPokemon[type]]);
	});
    //Definir opciones de la gráfica
		let optionsOfChart = {
			"title":"How Many Pokemons Total By Type",
			 colors:["#FECD05"],
			 backgroundColor: {fillColor:"#F0EEF1", fillOpacity:0.8},
		 };
	//Crear y dibujar la gráfica pasando las opciones anteriores
	let chart = new google.visualization.BarChart(pokemonStatistics);
	chart.draw(dataTable, optionsOfChart);
};

//Mostrar todos los Pokemon en forma ascendente por ID al inicio de la página
let showAllPokemons = () => {
	const pokemonListFiltered = document.getElementById("pokemonListFiltered");
	document.getElementById("filterOptions").style.display = "block";
	document.getElementById("pokemonListFiltered").style.display = "block";
	document.getElementById("pokemonStatisticsSec").style.display = "none";
	filteredPokemon = window.data.sortData(POKEMON.pokemon, "id", "Ascending");
	pokemonListFiltered.innerHTML = "";
	filteredPokemon.forEach((pokemon) => {
		pokemonListFiltered.innerHTML += `
		<section class = "cardOfPokemon" >
		<img src="${pokemon.img}">
		<p><h3>${pokemon.name}</h3></p>
		<p>Id: ${pokemon.id}</p>
		<p>Type: ${pokemon.type}</p>
		<p>Weaknesses: ${pokemon.weaknesses.toString().replace(/,/g,", ")}</p>
		</section>`;
	});
	document.getElementById("goToTheTopButton").style.display = "block";
};
//Botón All
const cboxAllFunction = document.getElementById("cboxAll");
let cboxForAll = document.querySelectorAll('input[name="cbox"]');
cboxAllFunction.addEventListener("change", () => {
	if(cboxAllFunction.checked) {
		cboxForAll.forEach((checkbox) => {
			checkbox.checked = true;
		});
	}else {
		cboxForAll.forEach((checkbox) => {
			checkbox.checked = false;
		});
	}
});

//Función para regresar hasta arriba
let goToTheTopBtn = () =>{
	window.location ="#container";
};

//Carga la API de visualización (charts)
google.charts.load('current', {'packages':['corechart']});
//Sección de botones
document.getElementById("computeStatsButton").addEventListener("click", computeStats);
document.getElementById("pokeBallBtn").addEventListener("click", condition);
document.getElementById("pokeBallGif").addEventListener("click", showAllPokemons);
document.getElementById("goToTheTopButton").addEventListener("click", goToTheTopBtn);
