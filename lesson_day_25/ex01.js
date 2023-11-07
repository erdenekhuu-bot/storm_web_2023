var el1=document.createElement('main')
var p=document.createElement('p')
var footer=document.createElement('footer')
var subP=document.createElement('p')
var head=document.createElement('header')
var h1=document.createElement('h1')

var header=document.body.appendChild(head)
header.appendChild(h1)
h1.innerText='Welcome to My Website'
var main=document.body.appendChild(el1)
var footer=document.body.appendChild(footer)
main.appendChild(p)
p.innerText='This is a small website created using HTML and Javascript'
footer.appendChild(subP)
subP.innerHTML='&copy; 2023 Your Name'
