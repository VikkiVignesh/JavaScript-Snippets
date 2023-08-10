//Oops concept in java SCript 
//1.by using functions
//2,by using class keyword


function Person(name,age,gender,mobno) {
    this.Name=name;
    this.Age=age;
    this.Gender=gender;
    this.Mobno=mobno;

    this.display=()=> {
        console.log("Person Information");
        console.log(this.Name);
        console.log(this.Age);
        console.log(this.Gender);
        console.log(this.Mobno)
    }
}

var v=new Person("Alok",19,"male",47576572657);
v.display();



//using class

class Man{
    constructor(n,a,g,m)
    {
        this.name=n;
        this.age=a;
        this.gender=g;
        this.mob=m;   
    }

    display()
    { 
      return `Name:${this.name} ,Age:${this.age},Gender:${this.gender},Contact:${this.mob}`;
    }

    sayhi()
    {
        console.log("Hi"+this.name+"!!");
    }
}

var vi=new Man("Ronald",34,"male",479898989);
console.log(vi);
vi.sayhi();
vi.display();
