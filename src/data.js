
window.data = {
	filterData : (input, condition) => {
		return 'filterData';
	},
	/*sortData(input, sortBy, sortOrder): esta función sort u ordenar
	  recibe tres parámetros. El primer parámetro, input, nos entrega los datos.
	   El segundo parámetro, sortBy, nos dice con respecto a cuál de los campos de
	   la data se quiere ordenar. El tercer parámetro, sortOrder, indica si se quiere
			ordenar de manera ascendente o descendente.*/
			
	sortData : (input, sortBy, sortOrder) => {
		/*let ascOrder = (a, b)=>{
			if (a[sortBy] < b[sortBy]) {
				return -1;
			}
			else if (a[sortBy] > b[sortBy]) {
				return 1;
			}
			return 0;
		};
		let descOrder = (b, a)=>{
			if (a[sortBy] < b[sortBy]) {
				return -1;
			}
			else if (a[sortBy] > b[sortBy]) {
				return 1;
			}
			return 0;
		};*/
		/*sort = ordenar.
		Si no se provee compareFunction, los elementos son ordenados convirtiéndolos
		a strings y comparando la posición del valor Unicode de dichos strings.
		Cuando se necesita acomodar con base a los atributos de un objeto se necesita
		proveer compareFunction*/
		let output;
		if (sortOrder == "Ascendente") {
			output = input.sort((a, b) => {
				if (a[sortBy] < b[sortBy]) {
				return -1;
				}
				else if (a[sortBy] > b[sortBy]) {
				return 1;
				}
				return 0;
			});
		};
		if (sortOrder == "Descendente") {
			output = input.sort((b, a) => {
				if (a[sortBy] < b[sortBy]) {
					return -1;
				}
				else if (a[sortBy] > b[sortBy]) {
				return 1;
				}
				return 0;
			});
		};
    return output;
		
},
	computeStats : (input) => {
		const typeOfPokemons = [POKEMON.pokemon[O], "type"];
		const timesOfTypeOfPokemon = typeOfPokemons.reduce((counterType, typeOfPokemon) => {
			counterType[typeOfPokemon] = (counterType[typeOfPokemon] || 0) + 1;
		})
		console.log(counterType);
		return 'computeStats';
		
}

}
		