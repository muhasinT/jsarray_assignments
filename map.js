const x = [1,2,NaN,8,NaN];

x.map((ele,index) => {

   if (isNaN(ele)){

    console.log(index);

   }
})

