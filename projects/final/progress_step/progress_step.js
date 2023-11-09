var block=document.getElementsByClassName('block')
var line=document.getElementsByClassName('line')

var prev=document.getElementById('btn1')
var next=document.getElementById('btn2')
var count=0
next.addEventListener('click',f1)
var list=Array.from(block);

function f1(){
    list.forEach(function(el){
        console.log(el.style.borderColor='blus')
    })
}