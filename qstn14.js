let arr1 = [[2,4],[5,,7,6,8]];

let arr2 = [[1,3,11],[4,[2],[7,9,25,100]]]

let res1 = arr1.concat(arr2);

let res2 = res1.flat(Infinity);

let uniq = [...new Set(res2)].sort((a,b) => a - b)

console.log(uniq);