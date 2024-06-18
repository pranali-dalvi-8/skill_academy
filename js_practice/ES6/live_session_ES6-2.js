// ****************************************** method in string ***********************************


// includes 

let str="i am the boss";
let ans = str.includes("boss");
console.log(ans);
let ans1 = str.includes("bo ss");
console.log(ans1);
let ans2 = str.includes(" I boss");
console.log(ans2);
let ans3 = str.includes("the boss");
console.log(ans3);


// starsWith

let method2=str.startsWith("i");
console.log(method2);



//endsWith


console.log(str.endsWith("boss"));
console.log(str.endsWith("i"));
console.log(str.endsWith("the boss"));


//repeat

let greet="hello !! ";
console.log(greet.repeat(5));

//padStart

let num="5";
console.log(num.padStart(4,"0"));

console.log(" morning".padStart(50,"Good "));


//padEnd

console.log("Hello".padEnd(50,"o"));