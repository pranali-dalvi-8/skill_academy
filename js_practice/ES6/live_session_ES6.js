// ******************************* Scope of let **************

// function demo(){
//     if(true){
//         let a=5;
    
//     }
//      console.log(a);
// }
// demo();




// ******************************* Scope of var **************

// function demo(){
//     if(true){
//         var a=5;
//     }
//     console.log(a);
// }
// demo();



// ******************************* temporary dead zone **************

// function demo(){
//     if(true){
//         console.log(a);           // -------------> temporary dead zone
//         let a=5;
//         console.log(a);
//     }
//     console.log(a);
// }
// demo();


// ******************************* Arrow function  **************

// let square= (x) =>  x*x;
// console.log(square(3));


// let printhello = () => "Hello World";
// console.log(printhello());



// ******************************* template litarals **************


// ------ multiline string --------


// let str = `hello world,
// I am learning js.
// i will become pro developer`

// console.log(str)


// ------ minterpolation --------


// let data="pranali";
// let s=` my name is ${data}`;
// console.log(s);





// ******************************* array destructuring   **************



// let arr=[10,20,30];
// let [a, b, c]=arr;
// console.log(a);
// console.log(b);
// console.log(c);


// let [x, y, z]=["rahul", "neha", "pooja"];
// console.log(x);
// console.log(y);
// console.log(z);





// ******************************* default parameter  **************



// function biodata(name="unknown",age =0, salary=0){
//     let bio=`my name is ${name} and age is ${age}. my salary is ${salary}`
//     console.log(bio);
// }
// biodata("neha",20,50000);
// biodata("neha",20,);
// biodata("neha");
// biodata();



// ******************************* Rest and spread  **************


// function sum(...numbers){
//     let sum=0;
//     for(i of numbers){
//         sum+=i;
//     }
//     console.log(sum);
// }
// sum(1,2,3,4,5);


// let[first,second, ...rest]=[1,2,3,4,5];
// console.log(first);
// console.log(second);
// console.log(rest);   //----------------->> collect the remaining element



// ---------spread -------


// let arr1=[1,2,3];
// let arr2=[...arr1,3,4,5];
// console.log(arr2);





// ******************************* inheritance  *******************


// class Animal{
//     legs=4;
//     eats(){
//         console.log("animals are eating");
//     }
// }
// class dog extends Animal{
//     bark(){
//         console.log("dog are barking");
//     }
//     sleep(){
//         console.log("dog are sleeping");
//     }
// }

// let a= new dog();
// a.bark();
// a.sleep();
// a.eats();




// ******************************* modules  **********************


        //-----------------------main.js

    // import {P}I from ./module.js;
    // console.log(PI);


        //-----------------------module.js

    // export const PI=3.14;