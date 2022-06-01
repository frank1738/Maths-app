import calculate from '../Logic/Calculate';
test('adds two numbers to return an answer', () => {
  const object = { total: '2', next: '3', operation: '+' };
  expect(calculate(object, '=').total).toBe('5');
});
