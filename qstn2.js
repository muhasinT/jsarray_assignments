var arrayClone = function(arr1){

    return arr1.slice(0);

}

console.log(arrayClone([1, 2, 4, 0]));

console.log(arrayClone([1, 2, [4, 0]]));