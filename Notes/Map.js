// map() is a type of function which allows to call another function in each  iteration

var even=(ar)=>
{  if(ar%2==0)
    {
        return ar;
    }
}


var double=(c)=>{
    return c*c;
}


let lst=[1,2,3,4,5,6,7,8,9,10];
let arr=[];
for(var i=0;i<lst.length;i++)
{
    arr.push(double);
}
console.log(arr);


let evenarr=[];
let mix=[2,3,5,6,7,8,90,12,34,51,34,46,34,12,35,65,77,90,89,91,100];
for(var i=0;i<mix.length;i++)
{
    evenarr.push(even(mix[i]))
}

console.log(evenarr);