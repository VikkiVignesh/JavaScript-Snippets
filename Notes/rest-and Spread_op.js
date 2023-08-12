//Rest Operator is used when we do not know how many parm we are passing
var sum=(...args)=>{
    res=0;
    for(var i=0;i<args.length;i++)
    {
        res+=args[i];
    }  return res;
}

console.log(sum(1,8,5,7,6,5,6,57,97,89));
console.log(sum(1,8,5,7));
console.log(sum(1,8,5,7,6,5,6));

//Spread operator is also similar to rest which is used for printing,and assigning values in some cases ,and for expanding

let lt=["Abhi","Ram",23,"Banglore",563130];
console.log([...lt]);

let arr2=lt.concat(...lt);
console.log(arr2);
console.log([...arr2])





class Human
{
    constructor(n,a,g,m)
    {
        this.name=n;
        this.age=a;
        this.gender=g;
        this.mob=m;
    }
}

let obj1=new Human("Abhi",20,"Male",4566857288);
let obj2= new Human("Pooja",19,"Female",999717727);
console.log({...obj1})
console.log({...obj2})


//Destructing

let a=["a",23,34.56,'c',0.567,-98];

let [a1,b1]=[1,2,3];
console.log(a1," ",b1);

let [x,y,z]=a
console.log(x," ",y," ",z);

let[p, , , , ,q]=a;
console.log(p," ",y," ",q);

