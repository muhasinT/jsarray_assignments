var arr1 = [2,8,[6],3,3,5,3,4,[5,4]];

var count = 0;

for(let i=0; i<arr1.length; i++){

       if(Array.isArray(arr1[i])){
        count++;
       }
    }
console.log("Inside arr1 " + count + " arrays" );

var arr2 = [2,8,[6,3,3],[4],5,[3,4,[5,4]]];

var count = 0;

for(let i=0; i<arr2.length; i++){

       if(Array.isArray(arr2[i])){
        count++;
       }
    }
console.log("Inside arr2 " + count + " arrays" );

console.log(false === 0);
