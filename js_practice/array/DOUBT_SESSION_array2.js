// ************************************  CODE LAB SESSION *************************************************


// let arr=[1,2,3,4,5];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);

// let sum=0 ;
// for(let i=0 ; i<arr.length; i++){
//     sum += arr[i];
// }
// console.log("sum : " + sum);


// let mul=1 ;
// for(let i=0 ; i<arr.length; i++){
//     mul *= arr[i];
// }
// console.log("mul : " + mul);





// ************************************** find missing number from 1 to 7 ****************************************


// let N=7;
// let arr1=[5,3,1,2,6,7];
// for(let num=1;num<=N;num++){
//     found = false;
//     for(i=0;i<=arr1.length;i++){
//         if(arr1[i]==num){
//             found=true;
//         }
//     }
//     console.log(num+ " " +found)
// }






// let N=7;
// let arr2=[5,3,1,2,6,7];
// arr2.sort()
// console.log(arr2)
// for(i=0;i<arr2.length; i++){
//     if(arr2[i]!= i+1){
//         console.log("missing value is "+(i+1));
//         break;
//     }
// }




// let n=5;
// let arr=[4,1,2,5];
// let expected=(n*(n+1)/2);
// let curr=0;
// for( i=0;i<arr.length;i++){
//     curr+=arr[i];
// }
// let missing=expected-curr;
// console.log("missing value is : "+missing);