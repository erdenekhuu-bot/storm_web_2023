var label=document.getElementById('output')
function non(arg){
     label.innerHTML=arg
}
function backSpace(){
    label.innerHTML=[label.innerHTML.length-1]
}
function num(arg){
    var event=label.innerHTML+=arg
}
function pass(arg){
    label.innerHTML+=arg+'0'
}

function add(){
     
}
function sub(){

}
function mul(){

}
function div(){

}

function sign(arg){
       switch(arg){
           case '+':
             break
           case '-':
             break
           case '*':
             break
           case '/':
             break
       }
}
