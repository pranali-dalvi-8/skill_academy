//************************************************Array.of(....) *******************************************


let arr = Array.of(2,3,4,5);
console.log(arr);

let happy= Array.of('h','a','p','p','y')
console.log(happy);

let mix=Array.of(2,1,'s','z',true,'hii');
console.log(mix);

for(let i in mix){
    console.log(typeof(i));
}

// s='';
// for (let i of mix){
//     s+=i;
// }
// console.log(s)


//************************************************Array.from(....) *******************************************


let arr1 =Array.from("helloworld");
console.log(arr1);


let arr2 =Array.from([1,2,3,4]);
console.log(arr2);

let person={name:"pranali",roll:1}
let arr3 =Array.from(Object.keys(person));
console.log(arr3);



//************************************************  find() -> testing function *******************************************

let arr4=[-1,-5,4,8];
let positive=arr4.find(i=>i>0);
console.log(positive);
let negative=arr4.find(i=>i<0);
console.log(negative);


let numbers=[3,4,6,7,4,9,8,13,5,7];
let div=numbers.find(i=>i%3==0);
console.log(div);



//************************************************  findIndex() -> testing function *******************************************


let arr5=[-1,-5,4,8];
let positive1=arr5.findIndex(i=>i>0);
console.log(positive1);
let negative1=arr5.findIndex(i=>i<0);
console.log(negative1);




//************************************************  every()  *******************************************



let arr6=[1,2,3,4,8];
let checkPos=arr6.every(i=>i>0);
console.log(checkPos);

let arr7=[1,-2,3,4,8];
let checkPos1=arr7.every(i=>i>0);
console.log(checkPos1);



// check all are prime number or not

function checkPrime(n){
    for(let i=2; i<n;i++){
        if(n%i==0){
            return false;
        }
        return true;
    }
}
let nums=[3,19,13,17];
let primes=nums.every(checkPrime);
console.log(primes);




//************************************************  some()  *******************************************

let arr8=[-1,-5,4,8];
let positive3=arr8.some(i=>i>0);
console.log(positive3);
let negative3=arr8.some(i=>i<0);
console.log(negative3);





//************************************************  join()  *******************************************


let letters=['n','e','h','a'];
let madam=letters.join("");
console.log(madam);


let letters1=['n','e','h','a'];
let madam1=letters.join("-");
console.log(madam1);




//************************************************  fill()  *******************************************


let fill_arr=[1,2,3,5,6,7];
let a_fill_arr=fill_arr.fill(0);
console.log(a_fill_arr)


let fill_arr1=[1,2,3,5,6,7];
let a_fill_arr1=fill_arr1.fill(0,3,7);
console.log(a_fill_arr1)
