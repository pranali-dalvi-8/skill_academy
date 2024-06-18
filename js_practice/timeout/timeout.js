// setTimeout(()=>{
//     console.log("This function will appear after 5 seconds");
// },5000);


// function greet(){
//     console.log("welcome to this website");
//     alert('hello welcome');
// }
// setTimeout(greet,3000);




function updateText(){
    let text=document.getElementById('para');
    text.innerHTML="untill salman khan arrives";
}
setTimeout(updateText,3000);


function changeText(){
    let changeTxt=document.getElementById('color-text');
    changeTxt.style.color='red';
    changeTxt.style.fontSize='30px';
}
setTimeout(changeText,3000);

function moveBox(){
    let movingBox=document.getElementById('box');
    movingBox.style.left="200px";
}
setTimeout(moveBox,5000);