//  create object literal syntax

let thar={
    brand:"mahindra",
    wheels:4,
    price:18000000,
    color:"black",
    engine:"bs6 2.0"
};
console.log(thar);
console.log(thar.engine);


//  create object using object constructor

let pen=new Object()
pen.color="Blue";
pen.price=10;
pen.type="ballpoint";
console.log(pen);
pen.price=20;
console.log(pen);



// create object using constructor function

function Phone(model ,price, year){
    this.model=model;
    this.price=price;
    this.year=year;

}
let iphone=new Phone("15 pro max", 100000,2024);
console.log(iphone)




//  ***************function inside the object

let mustang={
    brand:"ford",
    price:"8000000",
    year:2024,
    drive: function () {
        console.log("driving mustang");
    },
    brake: function () {
        console.log("braking mustang");
    }

}
mustang.drive();
mustang.brake();



// student

let satish={
    age : 30,
    weight:66,
    hobbies:'cricket',
    sleep:function(){
        console.log("satish is sleeping");
    },
    eat:function(){
        console.log("satish is eating");
    }
}
console.log(satish.hobbies);
satish.sleep()



// calculator

let calculator={
    info:"hello i am calulator",

    addition:function(n1,n2){
        return n1+n2;
    },
    subtraction:function(n1,n2){
        return n1-n2;
    },
    multiplication:function(n1,n2){
        return n1*n2;
    },
    division:function(n1,n2){
        return n1/n2;
    }  
}
console.log(calculator.addition(10,20));
console.log(calculator.subtraction(10,20));
console.log(calculator.multiplication(10,20));
console.log(calculator.division(10,20));


// nested objects

let company={
    name:"testbook",
    address:{
        street:"123 road",
        state:"maharastra",
        city:"pune"
    },
    employees:[
        {name:"rahul",role:"SE"}
    ]
}
console.log(company.address['city']);
console.log(company.address.city);
console.log(company.employees[0].role);


//destructuring

let user={
    id:1,
    username:"pranali",
    email:"pranalidalvi8123@gmail.com",
    profile:{
        first:"pranali",
        last:"dalvi"
    }
}
let {id , username,email,profile:{first,last},}=user;
console.log(username)
console.log(last)