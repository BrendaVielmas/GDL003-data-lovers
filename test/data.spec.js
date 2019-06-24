require('../src/data.js');


/*describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});*/
describe('filterData', () => {
  it('is a function', () => {
    expect(typeof data.filterData).toBe('function');
  });

  it('returns `filterData`', () => {
    expect(data.filterData()).toBe('filterData');
  });
});

describe('sortData', () => {
  it('is a function', () => {
    expect(typeof data.sortData).toBe('function');
  });

  it('returns `sortData`', () => {
    expect(data.sortData()).toBe('sortData');
  });
});

describe('computeStats', () => {
  it('is a function', () => {
    expect(typeof data.computeStats).toBe('function');
  });

  it('returns `computeStats`', () => {
    expect(data.computeStats()).toBe('computeStats');
  });
});
