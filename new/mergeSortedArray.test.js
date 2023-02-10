const merge = require('./mergeSortedArray');

const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];
const m = 3;
const n = 3

test('adds 1 + 2 to equal 3', () => {
  expect(merge(nums1, m, nums2, n)).toEqual([1, 2, 2, 3, 5, 6]);
});

