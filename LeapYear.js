/*
1.For every 4 years once ,leap year appers.
2.Leap year is evenly divisible by 100
3.unless it is divisible by 400 also its a leap year
*/ 

function checkLeap(n)
{
    var str=false;
    if(n%4==0)
    {
        if(n%100==0)
        {
            if(n%400==0)
              str=true;
            else
              str=false
        }
        else
          str=true
    }
    else
      str=false
  return str
}

var year=1951;
if(checkLeap(year))
  console.log(year+" is Leap...")
else
  console.log(year+" is not Leap...")