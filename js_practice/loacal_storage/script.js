// document.getElementById('name').value=localStorage.getItem('name');



function storeName(){

    // let nameInput=document.getElementById('nameInput').value;
    // localStorage.setItem('username',nameInput);

    
    let name=document.getElementById('name').value;
    localStorage.setItem('name',name);

    let city=document.getElementById('city').value;
    localStorage.setItem('city',city);

    let mobile=document.getElementById('mobile').value;
    localStorage.setItem('mobile',mobile);

    let email=document.getElementById('email').value;
    localStorage.setItem('email',email);



}
function getData(){

    // let username=localStorage.getItem('username');
    // document.getElementById('data').textContent=username;


    let name=localStorage.getItem('name');
    document.getElementById('content').textContent=name;

    let city=localStorage.getItem('city');
    document.getElementById('content1').textContent=city;

    let mobile=localStorage.getItem('mobile');
    document.getElementById('content2').textContent= mobile;

    let email=localStorage.getItem('email');
    document.getElementById('content3').textContent=email;


}