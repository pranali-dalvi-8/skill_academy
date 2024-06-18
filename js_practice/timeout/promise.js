function fetchData(){
   let p= new Promise((resolve,reject)=>{
        let success=true;

        if(success){
            resolve("Data Fetch Successfully");
        }else{
            reject("data fetching Error");
        }

    })
    console.log(p);
    return(p)
}

fetchData()
.then((message)=>{
    console.log(message);
})
.catch((e)=>{
    console.log(e)
})