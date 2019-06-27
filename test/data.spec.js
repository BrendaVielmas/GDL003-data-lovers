require('../src/data.js');

//Pruebas de filterData
describe ('filterData', () => {
  it('is a filterData', () => {
    expect (typeof data.filterData).toEqual('function');
  });

  it('debería retornar el filtrado de Pokemons tipo Poison', () => {
    let input = [{"type": ["Ghost", "Poison"]},{"type": ["Ghost", "Poison"]},{"type": ["Fighting"]}];
    let condition = ["Poison"];
    expect(data.filterData(input, condition)).toEqual([
      {"type": ["Ghost", "Poison"]},
      {"type": ["Ghost", "Poison"]}
    ]);
  });

  it('debería retornar el filtrado de Pokemons tipo Poison y Pokemons tipo Ghost', () => {
    let input = [{"type": ["Poison"]},{"type": ["Ghost"]},{"type": ["Fighting"]}];
    let condition = ["Poison", "Ghost"];
    expect(data.filterData(input, condition)).toEqual([
      {"type": ["Poison"]},
      {"type": ["Ghost"]}
    ]);
  });
});

//Pruebas de sortData
describe ('sortData', () => {
  it ('is a function', () => {
    expect (typeof data.sortData).toEqual('function');
  });

  it('debería retornar el listado de Pokemon ordenando alfabeticamente de manera ascendente', () => {
    let input = [{"name": "Squirtle"},{"name": "Charmander"},{"name": "Bulbasaur"}];
    let sortBy = "name";
    let sortOrder = "Ascendente";
    expect(data.sortData(input, sortBy, sortOrder)).toEqual([{"name": "Bulbasaur"},{"name": "Charmander"},{"name": "Squirtle"}]);
  });
    
  it('debería retornar retornar el listado de Pokemon ordenando alfabeticamente de manera descendente', () => {
    let input = [{"name": "Charmander"},{"name": "Squirtle"},{"name": "Bulbasaur"}];
    let sortBy = "name";
    let sortOrder = "Descendente"; 
    expect(data.sortData(input, sortBy, sortOrder)).toEqual([{"name": "Squirtle"},{"name": "Charmander"},{"name": "Bulbasaur"}]);
  });
});

//Pruebas de computeStats
describe ('computeStats', () => {
  it ('is a function', () => {
    expect (typeof data.computeStats).toEqual('function');
  });

  it('debería retornar el listado de cada tipo de pokemon con sus repeticiones', () => {
    let input = [{"type": ["Ghost", "Poison"]},{"type": ["Ghost", "Poison"]},{"type": ["Fighting"]}];
    let output = data.computeStats(input);
    expect(output.Poison).toEqual(2);
    expect(output.Ghost).toEqual(2);
    expect(output.Fighting).toEqual(1);
  });
});