fetch('https://dog.ceo/api/breeds/image/random')
.then(response=>{
    console.log(response.status);
    console.log(response.ok);
    return response.json();
})
.then(data=>{
    console.log(data)
})