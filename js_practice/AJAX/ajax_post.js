let fetchbtn=document.getElementById("fetchbtn");

fetchbtn.addEventListener("click",btnClickHandeler);

function btnClickHandeler(){
    console.log("fetch button is click");

// -----------------------initantiate XHR object

let XHR=new XMLHttpRequest;

//-------------------------open the object

// XHR.open('GET','pranali.txt',true);

// XHR.open('GET','https://dummy.restapiexample.com/api/v1/employees',true);


XHR.open('POST','https://dummy.restapiexample.com/api/v1/create',true);

XHR.onprogress=function(){
    console.log("loading.................")
}

XHR.onload=function(){
    if(this.status===200){
    console.log(this.responseText);
}
else {
    console.log("some error occured");
}
}


// console.log("gg, data fetch successfully");


//------------------------------send the request

data={"name":"pranali","salary":"2000000","email":"abc@gmail.com"}
XHR.send(data);


}


