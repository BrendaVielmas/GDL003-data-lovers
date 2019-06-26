require('../src/data.js');
//Pruebas de filterData
describe ('filterData', () => {
  it('is a filterData', () => {
    expect (typeof data.filterData).toEqual('function');
  });

  it('debería retornar [{"name": "Bulbasaur"},{"name": "Ivysaur"},{"name": "Venusaur"}]', () => {
    let input = [{"name": "Bulbasaur"},{"name": "Charmander"},{"name": "Ivysaur"},{"name": "Venusaur"}];
    let condition = "Poison";
    expect(data.filterData(input, condition)).toEqual([{"name": "Bulbasaur"},{"name": "Ivysaur"},{"name": "Venusaur"}]);
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
  
  it('debería retornar [{"Poison": "2"},{"Fighting": "1"},{"Ghost": "2"}]', () => {
    let input = [{"type": ["Ghost", "Poison"]},{"type": ["Ghost", "Poison"]},{"type": ["Fighting"]}];
    expect(data.computeStats(input)).toEqual([{"Poison": " 2 / 151"},{"Fighting": " 1 / 151"},{"Ghost": " 2 / 151"}]);
  });
});

