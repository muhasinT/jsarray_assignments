function filterFalse(arr){

    var arr1 = arr.filter(function(val){

        return val;
    });
    return arr1;
}
console.log(filterFalse([58, '', 'abcd', true, null, false, 0]));