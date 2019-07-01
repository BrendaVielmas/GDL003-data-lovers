
window.data = {

	/* El parámetro input(arreglo de pokemons) entrega los datos.
		pokemonTypes (arreglo de tipos) indica el valor por 
		el cual se va a filtrar el objeto.*/
	filterData : (input, pokemonTypes) => {
		/*Se hace una función con argumento "pokemon" que está filtrando
			la data dentro de una variable*/ 
		let filteredPokemons = input.filter((pokemon)  => {
			//Aquí ningún pokemon está incluido
			let hasAnyType = false;
			/*Se hace la función con argumento "type" para cada(forEach) tipo 
				que se le de en "pokemonTypes" */
			pokemonTypes.forEach( (type) => {
				// Si tu pokemon tiene cualquiera de los tipos dados, 
				if (pokemon.type.includes(type)) {
					//incluyelo
					hasAnyType = true;
				}
			});
			//Aquí sólo regresa verdadero o falso.
			return hasAnyType;
		});
		//Aquí regresa los pokemons que cumplieron con verdadero.
		return filteredPokemons;
	},


	/*El parámetro input entrega los datos.
		sortBy dice con respecto a cuál de los campos de input se quiere ordenar. 
		sortOrder indica orden: ascendente o descendente.*/
	sortData : (input, sortBy, sortOrder) => {
		let output;
		//Si sortOrder es igual a "Ascendente"
		if (sortOrder == "Ascendente") {
			//output es igual a acomodar la data con argumento a = pokemon 1, b = pokemon 2
			output = input.sort((a, b) => { 
				//Si a es menor que b según criterio de ordenamiento
				if (a[sortBy] < b[sortBy]) {
					return -1;
				// Si a es mayor que b según criterio de ordenamiento
				} else if (a[sortBy] > b[sortBy]) {
					return 1;
				}
				// a debe ser igual b
				return 0;
			});
		}
		//Si sortOrder es igual a "Descendente" igual que arriba pero con valores inversos
		if (sortOrder == "Descendente") {
			output = input.sort((a, b) => {
				if (a[sortBy] < b[sortBy]) {
					return 1;
				} else if (a[sortBy] > b[sortBy]) {
					return -1;
				}
				return 0;
			});
		}
		//regresa input acomodado
		return output;
	},

	
	computeStats : (input) => {
		/*Se hace una función con argumento "counterType" (valor de la iteración 
		anterior) y "currentPokemon" (elemento actual del arreglo) que está 
		reduciendo la data dentro de una variable para guardar un objeto con las
		repeticiones de cada tipo de pokemon*/
		let countOfTypeOfPokemon = input.reduce((counterType, currentPokemon) => {
			//Si el pokemon actual tiene dos tipos 
			if (currentPokemon.type.length == 2) {
				//El 1er tipo obtiene indice 0
				let type1 = currentPokemon.type[0];
				//Si sale por primera vez el tipo de pokemon, vale 1
				if (!counterType[type1]) {
					counterType[type1] = 1;
				/*Si ya salió anteriormente el tipo de pokemon, vale la suma de counterType
				anterior + 1*/
				}else {
					counterType[type1] += 1;
				}
				//El 2do tipo obtiene indice 1 y se hace lo mismo que arriba
				let type2 = currentPokemon.type[1];
				if (!counterType[type2]) {
					counterType[type2] = 1;
				}else {
					counterType[type2] += 1;
				}
			//Si solo tiene un tipo de pokemon se hace lo mismo
			} else {
				if (!counterType[currentPokemon.type]) {
					counterType[currentPokemon.type] = 1;
				}else {
					counterType[currentPokemon.type] += 1;
				}
			}
			//regresa el valor de la iteración acumulativa
			return counterType;
			//counterType va a ser un objeto vacío en la primer iteración
		}, {});
		//Regresa el total de las iteraciones
		return countOfTypeOfPokemon;
	}

};
