require('../src/data.js');
//Pruebas de filterData
describe ('filterData', () => {
  it('is a filterData', () => {
    expect (typeof data.filtrado).toEqual('function');
  });

  it('returns `filterData`', () => {
    expect(data.filterData()).toEqual('filterData');
  });
});
//Pruebas de sortData
describe ('sortData', () => {
  it ('is a function', () => {
    expect (typeof data.sortData).toEqual('function');
  });
  it('debería retornar [{"name": "Bulbasaur"},{"name": "Charmander"},{"name": "Squirtle"}]', () => {
    let input = [{"name": "Squirtle"},{"name": "Charmander"},{"name": "Bulbasaur"}];
    let sortBy = "name";
    let sortOrder = "asc"; //asc=ascendente
    expect(data.sortData(input, sortBy, sortOrder)).toEqual([{"name": "Bulbasaur"},{"name": "Charmander"},{"name": "Squirtle"}]);
  });
  it('debería retornar [{"name": "Squirtle"},{"name": "Charmander"},{"name": "Bulbasaur"}]', () => {
    let input = [{"name": "Charmander"},{"name": "Squirtle"},{"name": "Bulbasaur"}];
    let sortBy = "name";
    let sortOrder = "desc"; //desc=descendente
    expect(data.sortData(input, sortBy, sortOrder)).toEqual([{"name": "Squirtle"},{"name": "Charmander"},{"name": "Bulbasaur"}]);
  });
});
//Pruebas de computeStats
describe ('computeStats', () => {
  it ('is a function', () => {
    expect (typeof data.computeStats).toEqual('function');
  });

  it('returns `computeStats`', () => {
    expect(data.computeStats()).toEqual('computeStats');
  });
});

