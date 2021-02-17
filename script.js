const white = document.querySelectorAll(".white");
const black = document.querySelectorAll(".black");

for(let i=0;i<white.length;i++){
    white[i].addEventListener('click',swabza);
}
for(let i=0;i<black.length;i++){
    black[i].addEventListener('click',swabza);
}

function swabza(){
    for(let i=0;i<white.length;i++){
        if(white[i].className === "black"){
            white[i].className = "white";
            black[i].className = "black";
        }
        else if(white[i].className === "white"){
            white[i].className = "black";
            black[i].className = "white";
        }
    }
}