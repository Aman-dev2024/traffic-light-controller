const red=document.getElementById("red");
const yellow=document.getElementById("yellow");
const green=document.getElementById("green");

function changeRed(){
    red.style.backgroundColor='red';
    yellow.style.backgroundColor='grey';
    green.style.backgroundColor='grey';
}

function changeYellow(){
    yellow.style.backgroundColor="yellow";
    red.style.backgroundColor="grey";
    green.style.backgroundColor='grey';

}

function changeGreen(){
    green.style.backgroundColor="green";
    red.style.backgroundColor='grey';
    yellow.style.backgroundColor='grey';
}