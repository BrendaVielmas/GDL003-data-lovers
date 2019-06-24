// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
window.data = {
	filterData : () => {
		return 'filterData';
	},
	/*sortData(input, sortBy, sortOrder): esta función sort u ordenar 
	  recibe tres parámetros. El primer parámetro, input, nos entrega los datos.
	   El segundo parámetro, sortBy, nos dice con respecto a cuál de los campos de 
	   la data se quiere ordenar. El tercer parámetro, sortOrder, indica si se quiere
	    ordenar de manera ascendente o descendente.*/
	sortData : (input, sortBy, sortOrder) => {
		let ascOrder = (a, b)=>{
			if (a[sortBy] < b[sortBy]) {
				return -1;
			}
			if (a[sortBy] > b[sortBy]) {
				return 1;
			}
			return 0;
		};
		let descOrder = (b, a)=>{
			if (a[sortBy] < b[sortBy]) {
				return -1;
			}
			if (a[sortBy] > b[sortBy]) {
				return 1;
			}
			return 0;
		};
		/*sort = ordenar. 
		Si no se provee compareFunction, los elementos son ordenados convirtiéndolos
		a strings y comparando la posición del valor Unicode de dichos strings. 
		Cuando se necesita acomodar con base a los atributos de un objeto se necesita
		proveer compareFunction*/
		let output;
		if (sortOrder == "asc") {
			output = input.sort(ascOrder);
		} 
		if (sortOrder == "desc") {
			output = input.sort(descOrder);
		}
		return output;
	},


	computeStats : () => {
		return 'computeStats';
	} 
};