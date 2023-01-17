var arr1=[3, 'a', 'a', 'a', 2, -1, 'a', 3, 'a', 2, 4, 9, 3];

var count;
var mx =0;
var temp;

for(let i = 0; i < arr1.length;i++){
    count=1;
    for(j=i+1; j<arr1.length;j++){

        if(arr1[i] != -1 && arr1[i] == arr1[j]) {
            arr1[j] = -1;
            count++;
        }
    }
    
    if(mx<count){
        mx=count;
        temp = arr1[i];
    }


}

console.log(`${temp} is ${mx} times present in the array`);3