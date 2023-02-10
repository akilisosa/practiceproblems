const grayCode = require('./grayCode');

test('to see if can return gray code', () => {
    expect(grayCode(2)).toEqual([0, 1, 3, 2])
})