// function devide(a,b){
//     if(b===0){
//         throw new Error("devide by zero not allowed");
//     }
//     return a/b;
// }
// try{
//     let ans=devide(5,0);
//     console.log(ans);
// }
// catch(e){
//      console.log(e)
// }
// finally{
//     console.log("this code is executed");
// }


async function getData(){
    try{
        let response=await fetch('https://official-joke-api.appspot.com/random_joke');
        // console.log(response);
        if(!response.ok){
           throw new Error("error while fetching data")
        }
        else{
            let data=await response.json();
            console.log(data);
        }
    }
catch(e){
       console.log(e)
}
finally {
    console.log("the data fetched successfully");
}
}
getData();