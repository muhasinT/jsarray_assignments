

function testNaN(arr){

    return arr.map(function(el,i){

        if(isNaN(el))

        return i;

        return  false;

    }).filter(function(el){

        return el;
         
    });
}

        arr1 = [2,4,NaN,6,8,NaN]

console.log(testNaN(arr1));