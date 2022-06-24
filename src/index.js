module.exports = function reverse (n) {
    let a = n.toString();
    a = a.split('');
    a = a.reverse();
    a = a.join('');
    a = parseFloat(a);
    return a;
};