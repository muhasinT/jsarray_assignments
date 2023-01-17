function rangFinder(start, end){

    var arr1 = new Array;
   
    for(var i=0; i<end; i++,start++){

        arr1[i] = start;   

     }
   
    return arr1;
}
  
console.log( rangFinder(-6,4));



function arrayRange( start, range ) {
	return Array( range ).fill().map(( el, idx ) => start + idx );
}

console.log( arrayRange( 1, 4 ));