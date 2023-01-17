var x = "025468";

var y = x.split('');

for (let i = 0; i < y.length; i++) {

    if(y[i] % 2 == 0 && y[i+1] % 2 ==0 ){
     
     y[i] = y[i] + "-";

    }
}
var z = y.join("");

console.log(z);