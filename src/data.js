// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};
window.example = example;
*/
const filterData = () => {
  return 'filterData';
};
const sortData = () => {
  return 'sortData';
};
const computeStats = () => {
  return 'computeStats';
};

window.data = {
  filterData,
  sortData,
  computeStats
};
