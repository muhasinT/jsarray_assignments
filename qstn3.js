function first(arr, n){

    if(n == null){

        return arr[0];
    } 

    if(arr == null){

        return [];

    }
    if(n < 0){

        return [];

    }
    var reslt = arr.slice(0, n);

    return reslt;

    }
    console.log(first([7, 9, 0, -2]));

    console.log(first([],3));

    console.log(first([7, 9, 0, -2],3));

    console.log(first([7, 9, 0, -2],6));
    
    console.log(first([7, 9, 0, -2],-3));
