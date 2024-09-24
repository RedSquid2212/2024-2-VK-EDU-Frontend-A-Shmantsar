import nonUniqueElements from './nonUniqueElements';


test('returns non unique elements', () => {
  expect(nonUniqueElements([1, 2, 3, 1, 3])).toEqual([1, 3, 1, 3]);
  expect(nonUniqueElements([1, 2, 3, 4, 5])).toEqual([]);
  expect(nonUniqueElements([5, 5, 5, 5, 5])).toEqual([5, 5, 5, 5, 5]);
  expect(nonUniqueElements([10, 9, 10, 10, 9, 8])).toEqual([10, 9, 10, 10, 9]);
})

test('returns "false" when input data is not array of numbers', () => {
  expect(nonUniqueElements(null)).toEqual(false);
  expect(nonUniqueElements(['one', 'two', 'three'])).toEqual(false);
  expect(nonUniqueElements([NaN, 1, 2, 4])).toEqual(false);
  expect(nonUniqueElements([])).toEqual(false);
})
