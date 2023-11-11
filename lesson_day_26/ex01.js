var element1=document.createElement('div')
var element2=document.createElement('div')
var container=document.getElementById('container')


element1.id='div1'
element1.className='my-class'
element1.innerHTML='Element 1'
element1.style.backgroundColor='yellow'
element2.id='div2'
element2.className='my-class'
element2.innerHTML='Element 2'
element2.style.backgroundColor='orange'


container.appendChild(element1)
container.appendChild(element2)
