let memeBtn=document.getElementById('memeBtn');
memeBtn.addEventListener('click',memeBtnHandeler);

async function memeBtnHandeler(){
try{
    let response=await fetch('https://official-joke-api.appspot.com/random_joke');
    if(!response.ok){
        throw new Error("Data is not fetch successfully");
    }
    else{
        let result=document.getElementById('punchLine');
        let setUp=document.getElementById('setUp');

        let data=await response.json();
        dataResult=`${data.punchline}`;
        setUpText=`${data.setup}`;

        result.innerText=dataResult;
        setUp.innerText=setUpText;
        console.log(data)
    }

}
catch(e){
    console.log(e);
}
}