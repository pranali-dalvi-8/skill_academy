// ------------------------------------------- event handeler ----------------------------------------------------


function myfunc(){
    console.log("box 1 clicked");
}


function mouseover(){
    console.log("you are on box 2");
}

function mousemove(){
    console.log("you are on box 3");
}

function keypress(){
    console.log("key is press");
}

function keydown(){
    console.log("key is down");
}

function keyup(){
    console.log("key is up");
}



// -------------------------------------------- event listener -------------------------------------------------------



let box4= document.getElementById("box4");

box4.addEventListener('click',(e)=>{
    console.log(e)
    console.log(e.clientX,e.clientY)
   console.log("box 4 is clicked, first");
})

// box4.addEventListener('click',()=>{
//     console.log("box 4 is clicked,second");
//  })

let box5=document.getElementById('box5');

box5.addEventListener('mousemove',()=>{
    console.log("mouse move is added");
})
let input=document.getElementById('inputtext');

input.addEventListener('keypress',(e)=>
{
    console.log(e);
    console.log(e.key+" is press");
})