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
