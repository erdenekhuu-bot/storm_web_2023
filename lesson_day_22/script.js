console.log('JS DOM - HTML functions')
let h2 = document.createElement('h2');
h2.innerHTML = 'My favorite food!';
let content = document.getElementById('content');
h2.setAttribute('class', 'my-favorite-food');
content.appendChild(h2);

let foods = ['Бууз', 'Хуушуур', 'Цуйван', 'Хорхог', 'Царцаамаг']
let ulElement = document.createElement('ul');
for (let i = 0; i < foods.length; i++) {
    let liElement = document.createElement('li');
    liElement.innerHTML = foods[i]
    ulElement.appendChild(liElement);
    content.appendChild(ulElement);
}
let h4=document.createElement('h4');
h4.innerHTML = 'Minii durtai hool';
content.insertBefore(h4, ulElement);
console.log('DOM FTML functions')
let btn=document.createElement('button');
btn.innerHTML = 'click me';
content.appendChild(btn);
btn.setAttribute('style', 'border: 1px solid red; padding: 10px; font-size: 20px');
function showAlert() {
    alert('Hello')
}
showAlert()
btn.addEventListener('click', showAlert)
btn.addEventListener('onmouseover', showAlert)

btn.style.backgroundColor




makeButton("q");
makeButton("w");
//copy your makeButton function from the previous exercise
function makeButton(a){
    var btn=document.createElement('button')
    btn.innerHTML=a
    var keyboard=document.getElementById('keyboard')
    keyboard.appendChild(btn)
    btn.addEventListener('click',function(){
        makeText(btn.innerHTML)
    })
}
function makeText(a){
    var textbox=document.getElementById('textbox')
    textbox.innerHTML+=a
}