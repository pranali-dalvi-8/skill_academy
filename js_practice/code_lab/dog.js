let dogButton=document.getElementById('dog-btn');
dogButton.addEventListener('click',dogButtonHandeler);

function dogButtonHandeler(){

fetch('https://dog.ceo/api/breeds/image/random')
.then(response=>{
   if(response.status===200){
    console.log("request successful")
   }
   else{
    console.log("error in processing");
   }

    return response.json();
})
.then(data=>{
    console.log(data);
    let output=`<img src=${data.message}>`;

    let dogimg=document.getElementById('dog-img');
   
    dogimg.innerHTML=output;
})

}




// let dogbutton=document.getElementById('dog-btn');
// dogbutton.addEventListener('click',dogBtnHandeler);

// function dogBtnHandeler(){
// fetch('https://dog.ceo/api/breeds/image/random')
// .then(response=>{
//     if(response.status===200){
//         console.log("request successful");
//     }
//     else{
//         console.log("request processing error");
//     }
//     return response.json()
// })
// .then(data=>{
//     console.log(data);
//     let output=`<img src=${data.message}>`;
//     let dogimg=document.getElementById('dog-img');
//     dogimg.innerHTML=output;
// })
// }