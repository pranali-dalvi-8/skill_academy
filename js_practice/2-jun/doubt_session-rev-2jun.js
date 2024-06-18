let update=document.getElementById('changeBtn');
update.addEventListener('click',btnHandeler);

function btnHandeler(){
    let updatedText=document.getElementById('content');
    updatedText.innerText="This is updated text"
}

let changeColor=document.getElementById('changeBtn1');
changeColor.addEventListener('click',ChangeStyle);

function ChangeStyle(){
    let changeClr=document.getElementById('content1');
    changeClr.style.color='blue';
    changeClr.style.fontSize="20px";
    changeClr.style.fontWeight="bold"
}

let hideBtn=document.getElementById('HideBtn');
hideBtn.addEventListener("click",BtnHideShow);

function BtnHideShow(){
    let show=document.getElementById('hideContent');
    if(show.style.display ==='block'){
        hideBtn.innerText='Show';
        show.style.display='none';
    }
    else{
        hideBtn.innerText='Hide';
        show.style.display='block';
    }
}



let addBtn=document.getElementById('addBtn');
addBtn.addEventListener('click',addPara);

function addPara(){
    // let para=document.getElementById('para');
    // para.innerHTML='<p>Hello , This is New Paragraph !!!!!</p>';
    let newPara=document.createElement('p');
    newPara.innerHTML="Hello , This is New Paragraph ";

    let para=document.getElementById('para');
    para.appendChild(newPara);
}
