var x = "The Quick Brown Fox";

var y = x.split("");

for(var i = 0; i < y.length ; i++){

    if(y[i] ==  y[i].toUpperCase()){

        y[i]=y[i].toLowerCase();
        
    }else{
        y[i]=y[i].toUpperCase();

    }

}
var z = y.join("");

console.log(z);
