var label=document.getElementById('output')
function non(arg){
     label.innerHTML=arg
}
function backSpace(){
    label.innerHTML=[label.innerHTML.length-1]
}
function num(arg){
    label.innerHTML+=arg
}
function pass(arg){
    label.innerHTML+=arg+'0'
}

// function solve(arg){
//       label.innerHTML=eval(arg)
// }

function linearsolve(){
    label.innerHTML=eval(label.innerHTML)
}


function result(){
   for(let i=0; i<label.innerHTML.length; i++){
           switch(label.innerHTML[i]){
                 case '+':
                  Niilber()
                  break
                 case '-':
                  Yalgavar()
                  break
                 case '*':
                  Urjver()
                  break
                 case '/':
                  Noogdvor()
                  break
           }
   }
}

function Niilber(){
    let result=0
    let store=label.innerHTML.split('+')
    for(let i=0; i<store.length; i++){
       result+=parseInt(store[i])
    }
    label.innerHTML=result
}
function Urjver(){
    let result=1
    let store=label.innerHTML.split('*')
    for(let i=0; i<store.length; i++){
       result*=parseInt(store[i])
    }
    label.innerHTML=result
}
function Noogdvor(){
    let result=0
    let store=label.innerHTML.split('/')
    for(let i=0; i<store.length; i++){
       if(store[0]!=0){
            result=parseInt(store[0])
       }
       result/=parseInt(store[i])
    }
    label.innerHTML=result
}
function Yalgavar(){
    let result=0
    let store=label.innerHTML.split('-')
    for(let i=0; i<store.length; i++){
      if(store[0]!=0){
        result=parseInt(store[0])
   }
       result-=parseInt(store[i])
    }
    label.innerHTML=result
}