var bt1=document.getElementById("bt1");
var bt2=document.getElementById("bt2");
var line1=document.getElementById("line1");
var line2=document.getElementById("line2");
var line3=document.getElementById("line3");
var line4=document.getElementById("line4");


var pixel=0
var Limit1=line1.offsetWidth;
var Limit2=line2.offsetWidth;
var Limit3=line3.offsetWidth;
var Limit4=line4.offsetWidth;

bt2.addEventListener('click', fillLine1)

function fillLine1() {
    // Use a for loop to fill the line pixel by pixel
    for (let i = 0; i < Limit1; i++) {
         setTimeout(() => { // Introduce a delay for a smooth effect
               line1.style.width = i + 'px';
               line1.style.backgroundColor = 'rgb(57, 145, 227)';
         },1); 
     }
     


  }

fillLine1().then(async function(){
    for(let i=0; i<Limit2; i++){
        setTimeout(function(){
               line2.style.width=i+'px';
               line2.style.backgroundColor='rgb(57, 145, 227)'
        },1)
     }
}).then( async function(){
    for(let i=0; i<Limit3; i++){
        setTimeout(function(){
               line3.style.width=i+'px';
               line3.style.backgroundColor='rgb(57, 145, 227)'
        },1)
     }
})