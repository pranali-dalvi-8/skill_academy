//************************************** */ higher order function ***************************************


//----------------- map ----------------------------

let arr=[3,4,8,7];
let doubled=arr.map(i=>i*2);
console.log(doubled);

//example : find the square and cubes all number of array

let arr1=[3,4,8,7];
let square=arr1.map(i=>i*i);
let cube=arr1.map(i=>i*i*i);
console.log("square : "+square);
console.log("cube : "+cube);



//----------------- filter ----------------------------


let num=[2,9,14,21,3,28,63];
let result=num.filter(i=>i%7==0);
console.log(result);


// given an array find all the elements whose squares divisble by 3

let arr2=[2,3,9,4,16];
let suare=arr2.map(i=>i*i)
let result1=suare.filter(num=>num%3==0);
console.log(result1)



// remove march from month

let months=["jan","feb","mar","apr"];
let updated=months.filter(i=>i!="mar");
console.log(updated)



//  --------------- splice --------------------

let number=[1,2,3,4,5];
console.log(number.splice(2,1));  //remove 3
console.log(number);


let number1=[1,2,3,4,5];
res=number1.splice(0,number1.length); //remove all element -------> or  -------->     number1.splice(0);
console.log(res);
console.log(number1);


//  get all the positive numbers

function checkPositive(n){
    if(n>0){
        return true;
    }else{
        return false;
    }
}

let nums=[-1,2,-4,-6,7,8,9];
let postive=nums.filter(checkPositive);
console.log(postive);



//------------------------------ reduce ------------------------------


let array=[1,2,3,4,5];
let add=array.reduce((sum,i)=>sum+i,0);
console.log(add);
