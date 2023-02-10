function grayCode(n) {
    let result = [];
    let size = 1 << n;
    for (let i = 0; i < size; i++) {
        result.push(i ^ (i >> 1));
    }
    return result;
}


module.exports = grayCode;