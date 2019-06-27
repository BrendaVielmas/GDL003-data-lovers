
window.data = {

	/*filterData : (input, pokemonTypes): esta función recibe dos parámetros.
	El parámetro input nos entrega los datos y el parámetro pokemonTypes nos indica
	el valor por el cual se va a filtrar el objeto*/
	filterData : (input, pokemonTypes) => {
		let filteredPokemons = input.filter((pokemon) => {
			let hasAnyType = false;
			console.log(pokemonTypes + " " + pokemon.type);
			pokemonTypes.forEach(function (type) {
				if (pokemon.type.includes(type) == true) {
					hasAnyType = true;
				}
			});
			return hasAnyType;
		});
		console.log (filteredPokemons);
		return filteredPokemons;
		},


		/*sortData(input, sortBy, sortOrder): esta función sort u ordenar
				recibe tres parámetros. El primer parámetro, input, nos entrega los datos.
				El segundo parámetro, sortBy, nos dice con respecto a cuál de los campos de
				la data se quiere ordenar. El tercer parámetro, sortOrder, indica si se quiere
				ordenar de manera ascendente o descendente.
				sort = ordenar.*/
			sortData : (input, sortBy, sortOrder) => {
				let output;
				if (sortOrder == "Ascendente") {
					output = input.sort((a, b) => {
						if (a[sortBy] < b[sortBy]) {
							return -1;
						} else if (a[sortBy] > b[sortBy]) {
							return 1;
						}
						return 0;
					});
				}
				if (sortOrder == "Descendente") {
					output = input.sort((b, a) => {
						if (a[sortBy] < b[sortBy]) {
							return -1;
						} else if (a[sortBy] > b[sortBy]) {
							return 1;
						}
						return 0;
					});
				}
				return output;
			},

			/*Se hace una variable donde se guarda un objeto con las cantidades de tipos
			de pokemon, usando la función reduce en el arreglo de pokemon, donde el primer
			argumento es el valor de la iteración anterior (counterType) y el segundo es
			el elemento actual del arreglo (actualPokemon)*/
			computeStats : (input) => {
				let countOfTypeOfPokemon = input.reduce((counterType, actualPokemon) => {
					//si tiene dos tipos de pokemon se hace esto

					if (actualPokemon.type.length == 2) {
						let type1 = actualPokemon.type[0]; // 0 = 1er indice(1er tipo)
						//esto se realiza si sale por primera vez el tipo de pokemon
						if (!counterType[type1]) {
							counterType[type1] = 1;
						//esto se realiza si ya salió anteriormente el tipo de pokemon
						}else {
							counterType[type1] += 1;
						}
						//para el segundo tipo se hace lo mismo:
						let type2 = actualPokemon.type[1]; // 1 = 2do indice(2do tipo)
						//esto se realiza si sale por primera vez el tipo de pokemon
						if (!counterType[type2]) {
							counterType[type2] = 1;
						//esto se realiza si ya salió anteriormente el tipo de pokemon
						}else {
							counterType[type2] += 1;
						}

					//si solo tiene un tipo de pokemon se hace esto

					} else {
						//esto se realiza si sale por primera vez el tipo de pokemon
						if (!counterType[actualPokemon.type]) {
							counterType[actualPokemon.type] = 1;
						//esto se realiza si ya salió anteriormente el tipo de pokemon
						}else {
							counterType[actualPokemon.type] += 1;
						}

					}


					return counterType;
				}, {});
				console.log(countOfTypeOfPokemon);
				return countOfTypeOfPokemon;
			}

		};
