var i=0;
for(;i<100;i++)
{
    /*if(i%3==0)
    {
        console.log("Fizz");
    }
    if(i%5==0)
    {
        console.log("Buzz");
    }
    if(i%3==0 && i%5==0)
    {
        console.log("FizzBuzz");
    }
    console.log(i);*/

    var res=(i%3==0 && i%5==0) ? "FizzBuzz":(i%5==0)?"Buzz":(i%3==0)?"Fizz":i;
    console.log(res);
}
