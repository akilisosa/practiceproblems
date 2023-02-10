const plus1 = require('./plus1');

test('plut one adds 1', () => {
    expect(plus1([1, 2, 3])).toEqual([1, 2, 4]);
})