
let actorsbtn=document.getElementById("actorsbtn");
actorsbtn.addEventListener('click', actorsbtnHandeler);

function actorsbtnHandeler(){
    let xhr=new XMLHttpRequest;

    xhr.open('GET','actors.json',true);

    xhr.onload=function(){
        if(this.status===200){
            // console.log(this.responseText);
           let response=JSON.parse(this.responseText);
           let output="<ul>";
            for (actor of response){
                output+=`<li> ${actor.name}</li>`;
              
            }
            output+="</ul>";

            let contentActors=document.getElementById('content-actors');
            contentActors.innerHTML=output;

        }
        else{
            console.log("error occured")
        }
    }
    xhr.send();
}


let singersbtn=document.getElementById("singersbtn");

singersbtn.addEventListener('click', singersbtnHandeler);

function singersbtnHandeler(){
    let xhr=new XMLHttpRequest;

    xhr.open('GET','singers.json',true);

    xhr.onload=function(){
        if(this.status===200){
            // console.log(this.responseText);
           let response=JSON.parse(this.responseText);
           let output="<ul>";
            for (singer of response){
                output+=`<li> ${singer.name}</li>`;
              
            }
            output+="</ul>";

            let contentSingers=document.getElementById('content-singers');
            contentSingers.innerHTML=output;

        }
        else{
            console.log("error occured")
        }
    }
    xhr.send();
}