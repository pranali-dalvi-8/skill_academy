// async function fetchData(){
// try{
// let response=await fetch('https://jsonplaceholder.typicode.com/posts/1');
// if(!response.ok){
//     throw new Error("some error occured ! request failed");
// }
// let data=await response.json();
// console.log(data);
// }
// catch(error){
//   console.log("error : " + error)
// }
// }
// fetchData();



//_________________________fetching multiple parallely resources______________________________________



let fetchBtn=document.getElementById('display_btn');
fetchBtn.addEventListener('click',fetchData1);


async function fetchData1(){
try{
let [posts,comments]=await Promise.all( 
    [fetch('https://jsonplaceholder.typicode.com/posts'),
    fetch('https://jsonplaceholder.typicode.com/comments')] 
);


if(!posts.ok || !comments.ok){
    throw new Error("some error occured ! request failed");
}
let postsData=await posts.json();
let commentsData=await comments.json();

console.log("post data fetch successfully ",postsData);
console.log("comments data fetch successfully ",commentsData);

let po1=`Body : ${postsData[2].body} ,\n id : ${postsData[2].id} ,\ntitle :  ${postsData[2].title} ,\n UserId : ${postsData[2].userId}`;
let content=document.getElementById('content');
content.innerText=po1;
}
catch(error){
  console.log("error : " + error)
}

}
// fetchData1();

