function arrayMove(arr1, oldIndex, newIndex){

    let l  =  arr1.length

    if( newIndex >= l){

        newIndex = l - 1;

    }
        arr1.splice(newIndex, 0, arr1.splice(oldIndex, 1)[0]);

        return arr1;

}

console.log(arrayMove([10, 20, 30, 40, 50], 0, 2));

console.log(arrayMove([10, 20, 30, 40, 50], -1, 2));