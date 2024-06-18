let fetchbtn=document.getElementById("fetchbtn");

fetchbtn.addEventListener("click",btnClickHandeler);

function btnClickHandeler(){
    console.log("fetch button is click");

// -----------------------initantiate XHR object

let XHR=new XMLHttpRequest;

//-------------------------open the object

// XHR.open('GET','pranali.txt',true);

XHR.open('GET','https://jsonplaceholder.typicode.com/todos/',true);

XHR.onprogress=function(){
    console.log("loading.................")
}

XHR.onload=function(){
    if(this.status===200){
        let response=JSON.parse(this.responseText);
        console.log(response);

       //console.log(this.responseText);

}
else {
    console.log("some error occured");
}
}


// console.log("gg, data fetch successfully");


//------------------------------send the request

XHR.send();


}


