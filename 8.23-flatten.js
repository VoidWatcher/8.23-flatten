function flatten (arr) {
    arr = [].concat.apply([], arr);
    return arr.some(Array.isArray) ? flatten(arr) : arr;
}

console.log(flatten([1,2,[1,2],[3,4]]));
console.log(flatten([4,[3,[2,[1]]]]));